import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home,
  Explore,
  ProSettings,
  ClientOrders,
  Messages,
  ClientSettings,
} from "@screens";
import { AppImages } from "@assets";
import { Colors } from "@theme";
import { clientHomeTabOptions } from "@navigation/tab/hometabOptions";
import { wp } from "@utils/responsive";

const Tab = createBottomTabNavigator();

const getTabColor = (isFocus: boolean) => {
  return isFocus ? Colors.primary : Colors.neutral200;
};

const ClientHomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={clientHomeTabOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppImages.home}
              tintColor={getTabColor(focused)}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppImages.homeExplore}
              tintColor={getTabColor(focused)}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ClientOrders"
        component={ClientOrders}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppImages.homeShop}
              tintColor={getTabColor(focused)}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppImages.homeMessage}
              tintColor={getTabColor(focused)}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ClientSettings"
        component={ClientSettings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppImages.homeMore}
              tintColor={getTabColor(focused)}
              style={styles.tabIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ClientHomeTabs;

const styles = StyleSheet.create({
  tabIcon: { height: wp(6), width: wp(6) },
});
