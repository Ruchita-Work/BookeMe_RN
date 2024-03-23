import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily, FontSizes } from "@theme";

interface ICustomTabBarProps extends MaterialTopTabBarProps {
  containerStyle?: StyleProp<ViewStyle>;
  tabStyle?: StyleProp<ViewStyle>;
  tabLabelStyle?: StyleProp<TextStyle>;
}

const CustomTabBar: FC<ICustomTabBarProps> = props => {
  const { navigation, descriptors, state } = props;

  const onPress = (route: any, isFocused: boolean) => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  const onLongPress = (route: any) => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  const renderTabItems = (route: any, index: number) => {
    const { options } = descriptors[route.key];
    const isFocused = state.index === index;

    return (
      <TouchableOpacity
        key={index}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={() => onPress(route, isFocused)}
        onLongPress={() => onLongPress(route)}
        style={[
          isFocused ? styles.activeTab : styles.inactiveTab,
          props.tabStyle,
        ]}>
        <Text
          style={[
            isFocused ? styles.activeTabTitle : styles.inactiveTabTitle,
            props.tabLabelStyle,
          ]}>
          {route.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.tabContainer, props.containerStyle]}>
      {state.routes.map(renderTabItems)}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(1),
    columnGap: wp(1),
  },
  activeTab: {
    paddingHorizontal: wp(7),
    paddingVertical: hp(1),
    backgroundColor: Colors.primary,
    borderRadius: wp(10),
  },
  activeTabTitle: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.SemiBold,
    fontSize: FontSizes.size14,
  },
  inactiveTab: {
    paddingHorizontal: wp(7),
    paddingVertical: hp(1),
  },
  inactiveTabTitle: {
    color: Colors.primary,
    fontFamily: FontFamily.Poppins.SemiBold,
    fontSize: FontSizes.size14,
  },
});
