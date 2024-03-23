import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomTabBar from "@components/ui/CustomTabBar";
import ProOrderUpcomingList from "@components/order/list/pro/ProOrderUpcomingList";
import ProOrderPastList from "@components/order/list/pro/ProOrderPastList";

const TopTab = createMaterialTopTabNavigator();

const ProOrderTabs: FC = () => {
  return (
    <TopTab.Navigator
      sceneContainerStyle={styles.tabSceneContainer}
      tabBar={tabProps => <CustomTabBar {...tabProps} />}>
      <TopTab.Screen name="Upcoming" component={ProOrderUpcomingList} />
      <TopTab.Screen name="Past" component={ProOrderPastList} />
    </TopTab.Navigator>
  );
};

export default ProOrderTabs;

const styles = StyleSheet.create({
  tabSceneContainer: {
    backgroundColor: "transparent",
  },
});
