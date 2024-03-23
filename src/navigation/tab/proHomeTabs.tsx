import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, ProOrders, ProHome, ProSettings } from "@screens";
import { AppImages } from "@assets";
import { Colors } from "@theme";
import { proHomeTabOptions } from "@navigation/tab/hometabOptions";
import ProBottomTabbar from "@navigation/ui/ProBottomTabbar";
import { wp } from "@utils/responsive";

const Tab = createBottomTabNavigator();

const getTabColor = (isFocus: boolean) => {
  return isFocus ? Colors.primary : Colors.neutral200;
};

const ProHomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={proHomeTabOptions}
      tabBar={tabbarProps => <ProBottomTabbar {...tabbarProps} />}>
      <Tab.Screen
        name="ProHome"
        component={ProHome}
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
        name="ProExplore"
        component={Home}
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
        name="ProOrders"
        component={ProOrders}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppImages.homeProCart}
              tintColor={getTabColor(focused)}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProSettings"
        component={ProSettings}
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

export default ProHomeTabs;

const styles = StyleSheet.create({
  tabIcon: { height: wp(6), width: wp(6) },
});
