import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { hp } from "@utils/responsive";

export const clientHomeTabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: "#27262870",
    position: "absolute",
    borderTopWidth: 0,
    height: hp(9),
  },
};

export const proHomeTabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
};
