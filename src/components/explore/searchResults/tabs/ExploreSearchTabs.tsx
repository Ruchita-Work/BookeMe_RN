import React, { FC } from "react";
import { ViewStyle } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import ExploreSearchAllTab from "@components/explore/searchResults/tabs/ExploreSearchAllTab";
import ExploreSearchProductTab from "@components/explore/searchResults/tabs/ExploreSearchProductTab";
import ExploreSearchServiceTab from "@components/explore/searchResults/tabs/ExploreSearchServiceTab";
import { Colors, FontSizes, FontFamily } from "@theme";
import { hp, wp } from "@utils/responsive";

const Tab = createMaterialTopTabNavigator();

interface IExploreSearchTabsProps {
  containerStyle?: ViewStyle;
}

const tabOptions: MaterialTopTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: "transparent",
  },
  tabBarActiveTintColor: Colors.primary,
  tabBarInactiveTintColor: Colors.gray700,
  tabBarLabelStyle: {
    fontSize: FontSizes.size18,
    textTransform: "capitalize",
    lineHeight: hp(2.8),
    fontFamily: FontFamily.Urbanist.SemiBold,
  },
  tabBarIndicatorStyle: {
    backgroundColor: Colors.primary,
    height: hp(0.4),
    borderRadius: wp(10),
  },
};

const ExploreSearchTabs: FC<IExploreSearchTabsProps> = ({ containerStyle }) => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name="All" component={ExploreSearchAllTab} />
      <Tab.Screen name="Products" component={ExploreSearchProductTab} />
      <Tab.Screen name="Services" component={ExploreSearchServiceTab} />
    </Tab.Navigator>
  );
};

export default ExploreSearchTabs;
