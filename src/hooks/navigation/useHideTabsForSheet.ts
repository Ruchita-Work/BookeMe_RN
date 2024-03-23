import { useCallback, useContext } from "react";
import { ViewStyle } from "react-native";
import useAppNavigation from "@hooks/navigation/useAppNavigation";
import {
  clientHomeTabOptions,
  proHomeTabOptions,
} from "@navigation/tab/hometabOptions";
import { AppContext } from "@context/AppContextProvider";

const useHideTabsForSheet = () => {
  const { navigation } = useAppNavigation();
  const { isUserPro, setIsHomeTabVisible } = useContext(AppContext);

  const tabBarStyle: ViewStyle = isUserPro
    ? (proHomeTabOptions.tabBarStyle as ViewStyle)
    : (clientHomeTabOptions.tabBarStyle as ViewStyle);

  const handleOnAnimateSheet = useCallback(
    (fromIndex: number, toIndex: number) => {
      if (fromIndex === -1) {
        if (isUserPro) {
          setIsHomeTabVisible(false);
        } else {
          navigation.setOptions({
            tabBarStyle: { display: "none" },
          } as any);
        }
      } else if (toIndex === -1) {
        if (isUserPro) {
          setIsHomeTabVisible(true);
        } else {
          navigation.setOptions({
            tabBarStyle: {
              ...tabBarStyle,
              display: "flex",
            },
          } as any);
        }
      }
    },
    [],
  );

  return { onAnimateSheet: handleOnAnimateSheet };
};

export default useHideTabsForSheet;
