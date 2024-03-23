import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Colors, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomTabBar from "@components/ui/CustomTabBar";
import ClientBookingShoppingList from "@components/bookService/list/ClientBookingShoppingList";
import BookServiceFooter from "@components/bookService/ui/BookServiceFooter";
import { useAppNavigation } from "@hooks";

const TopTabs = createMaterialTopTabNavigator();

const ClientBookingShoppingTabs: FC = () => {
  const insets = useSafeAreaInsets();

  const { navigation } = useAppNavigation();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + hp(1) }]}>
      <TopTabs.Navigator
        sceneContainerStyle={styles.tabScreen}
        tabBar={tabProps => (
          <CustomTabBar
            {...tabProps}
            containerStyle={styles.customTabBarContainer}
            tabStyle={styles.customTabBar}
            tabLabelStyle={styles.customTabLabel}
          />
        )}>
        <TopTabs.Screen
          name="ALL PRODUCTS"
          component={ClientBookingShoppingList}
        />
        <TopTabs.Screen
          name="HAIR CARE"
          component={ClientBookingShoppingList}
        />
        <TopTabs.Screen name="COSMETIC" component={ClientBookingShoppingList} />
        <TopTabs.Screen
          name="SKIN CARE"
          component={ClientBookingShoppingList}
        />
      </TopTabs.Navigator>
      <BookServiceFooter
        containerStyle={styles.footer}
        hideArrow
        footerButtonTitle="Next"
        onPressFooterButton={navigation.goBack}
      />
    </View>
  );
};

export default ClientBookingShoppingTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral800,
    flex: 1,
    marginTop: hp(2),
    paddingVertical: hp(1.5),
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
  },
  customTabBarContainer: { columnGap: wp(1) },
  customTabBar: { paddingHorizontal: wp(3) },
  customTabLabel: { fontSize: FontSizes.size12 },
  tabScreen: {
    paddingHorizontal: wp(4),
    backgroundColor: "transparent",
    paddingVertical: hp(1),
  },
  footer: { paddingTop: hp(2), paddingHorizontal: wp(4) },
});
