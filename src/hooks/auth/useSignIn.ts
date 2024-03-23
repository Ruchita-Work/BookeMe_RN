import { useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { appleAuth } from "@invertase/react-native-apple-authentication";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import useAppNavigation from "@hooks/navigation/useAppNavigation";
import { SocialAuthTypes } from "@types";
import { useAppDispatch } from "@hooks/redux";
import { authActions } from "@redux";
import { showErrorToast } from "@utils/toast";
import { useCheckUserExistence } from "@api";

GoogleSignin.configure({
  webClientId:
    "596659672440-hksas2m4r8e18mr7gn3s9o60u7ca3ona.apps.googleusercontent.com",
  offlineAccess: false,
  scopes: [
    "https://www.googleapis.com/auth/plus.me",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ],
});

const useSignIn = () => {
  const { navigation } = useAppNavigation();
  const dispatch = useAppDispatch();
  const { mutateAsync } = useCheckUserExistence();
  const [isLoading, setIsLoading] = useState(false);

  const onSuccessAuth = async (
    response: FirebaseAuthTypes.UserCredential,
    type: SocialAuthTypes,
  ) => {
    try {
      const signInActionPayload = { data: response, type };
      dispatch(authActions.storeSocialSigninData(signInActionPayload));

      const existenceResponse = await mutateAsync({
        email: response?.user?.email,
      });
      const isClientUser = existenceResponse.data?.data?.role === "CLIENT";
      const doesUserExists = !!existenceResponse.data?.data;

      if (doesUserExists) {
        setIsLoading(false);
        dispatch(authActions.loginUser(existenceResponse.data?.data));
        navigation.reset({
          routes: [{ name: isClientUser ? "ClientHomeTabs" : "ProHomeTabs" }],
          index: 0,
        });
      } else {
        navigation.reset({ routes: [{ name: "Usertype" }], index: 0 });
      }
    } catch (error) {
      setIsLoading(false);
      showErrorToast({ text1: "Failed to Signin into app" });
    }
  };

  const onGoogleSignInPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const { idToken } = await GoogleSignin.signIn();
      setIsLoading(true);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const response = await auth().signInWithCredential(googleCredential);
      await onSuccessAuth(response, "GOOGLE");
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onAppleSigninPress = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      if (!appleAuthRequestResponse.identityToken) {
        throw new Error("Apple Sign-In failed - no identify token returned");
      }

      setIsLoading(true);
      const { identityToken, nonce } = appleAuthRequestResponse;
      const appleCredential = auth.AppleAuthProvider.credential(
        identityToken,
        nonce,
      );

      const response = await auth().signInWithCredential(appleCredential);
      await onSuccessAuth(response, "APPLE");
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onFacebookSigninPress = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
      ]);
      if (result.isCancelled) {
        throw "User cancelled the login process";
      }

      setIsLoading(true);
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw "Something went wrong obtaining access token";
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      const response = await auth().signInWithCredential(facebookCredential);
      await onSuccessAuth(response, "FACEBOOK");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return {
    onGoogleSignInPress,
    onAppleSigninPress,
    onFacebookSigninPress,
    isLoading,
  };
};

export default useSignIn;
