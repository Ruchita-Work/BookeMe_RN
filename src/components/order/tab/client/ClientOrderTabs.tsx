import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomTabBar from "@components/ui/CustomTabBar";
import ClientOrderServicesList from "@components/order/list/client/ClientOrderServicesList";
import ClientOrderProductsList from "@components/order/list/client/ClientOrderProductsList";

const TopTab = createMaterialTopTabNavigator();

const ClientOrderTabs: FC = () => {
  return (
    <TopTab.Navigator
      sceneContainerStyle={styles.tabSceneContainer}
      tabBar={tabProps => <CustomTabBar {...tabProps} />}>
      <TopTab.Screen name="SERVICES" component={ClientOrderServicesList} />
      <TopTab.Screen name="PRODUCTS" component={ClientOrderProductsList} />
    </TopTab.Navigator>
  );
};

export default ClientOrderTabs;

const styles = StyleSheet.create({
  tabSceneContainer: {
    backgroundColor: "transparent",
  },
});
