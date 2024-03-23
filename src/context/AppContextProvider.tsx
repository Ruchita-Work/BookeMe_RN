import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Linking } from "react-native";
import { hideAsync } from "expo-splash-screen";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { IMainStackScreenParams } from "@navigation/types";
import { getFCMToken } from "@utils/firebase";
import { authActions, onboardingActions } from "@redux";
import { useGetInviteDetailsById } from "@api";
import { useNavigation } from "@react-navigation/native";

interface AppContextValue {
  isUserPro: boolean;
  isUserClient: boolean;
  isHomeTabVisible: boolean;
  setIsHomeTabVisible: Dispatch<SetStateAction<boolean>>;
  initialRouteName: keyof IMainStackScreenParams;
}

const AppContext = createContext({} as AppContextValue);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { mutateAsync: mutateGetInviteDetails } = useGetInviteDetailsById();

  const onboardingUserType = useAppSelector(state => state.onboarding.userType);
  const isSocialSigninDone = useAppSelector(
    state => state.auth.isSocialSigninDone,
  );
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const authenticatedUserType = useAppSelector(
    state => state.auth?.userData?.role,
  );

  const [isHomeTabVisible, setIsHomeTabVisible] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState<
    keyof IMainStackScreenParams | null
  >(null);

  const userType = isAuthenticated ? authenticatedUserType : onboardingUserType;
  const isUserPro = userType === "PRO";
  const isUserClient = userType === "CLIENT";

  const hideSplashScreen = () => {
    setTimeout(() => {
      hideAsync();
    }, 600); // * to avoid flickring when redering default screen
  };

  const handleInitialRoutName = () => {
    if (isAuthenticated) {
      setInitialRouteName(isUserPro ? "ProHomeTabs" : "ClientHomeTabs");
    } else if (isSocialSigninDone) {
      setInitialRouteName("Usertype");
    } else {
      setInitialRouteName("SignIn");
    }
    hideSplashScreen();
  };

  const handleFCMToken = async () => {
    try {
      const fcmToken = await getFCMToken();
      dispatch(authActions.setFcmToken(fcmToken));
    } catch (error) {}
  };

  const handleInviteLinkReceived = async (inviteId: string) => {
    try {
      const inviteDetailsResponse = await mutateGetInviteDetails({
        id: inviteId,
      });
      dispatch(
        onboardingActions.updateInviteDetails({
          id: inviteId,
          details: inviteDetailsResponse.data.data,
        }),
      );
      navigation.reset({
        routes: [{ name: "InvitedMember" as never }],
        index: 0,
      });
      setInitialRouteName("InvitedMember");
    } catch (error) {
    } finally {
      hideSplashScreen();
    }
  };

  const onDeepLinkReceived = (url: string) => {
    const isInviteLink = url.includes("bookme://invite/user/");
    if (isInviteLink && !isAuthenticated) {
      const inviteId = url.split("/").slice(-1)[0];
      if (!inviteId) {
        return;
      }
      handleInviteLinkReceived(inviteId);
    }
  };

  const handleDeepLinkingListeners = () => {
    if (isAuthenticated) {
      handleInitialRoutName();
    }
    Linking.addEventListener("url", deepLink => {
      if (deepLink?.url) {
        onDeepLinkReceived(deepLink.url);
      }
    });
    Linking.getInitialURL().then(deepLinkUrl => {
      if (deepLinkUrl) {
        onDeepLinkReceived(deepLinkUrl);
      } else {
        handleInitialRoutName();
      }
    });
  };

  useEffect(() => {
    handleFCMToken();
    handleDeepLinkingListeners();
  }, []);

  if (!initialRouteName) {
    return null;
  }

  const value: AppContextValue = {
    isUserPro,
    isUserClient,
    isHomeTabVisible,
    setIsHomeTabVisible,
    initialRouteName,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext };
