import React, { FC, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@theme";
import {
  LogoutSheet,
  NotificationIconWithBadge,
  SearchInput,
  SettingItem,
} from "@components";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import BottomSheet from "@gorhom/bottom-sheet";
import { useAppNavigation } from "@hooks";

const settingsList = [
  { title: "My Profile", icon: AppImages.settingsProfile },
  { title: "Payment Methods", icon: AppImages.settingsPayment },
  { title: "Orders History", icon: AppImages.settingsOrder },
  { title: "Settings", icon: AppImages.settingsSetting },
  { title: "Log Out", icon: AppImages.settingsLogout },
];

const ClientSettings: FC = () => {
  const logoutSheetRef = useRef<BottomSheet>(null);
  const { navigation } = useAppNavigation();

  const closeLogout = () => {
    logoutSheetRef.current?.close();
  };

  const handleOnPressSettingItem = (title: string) => {
    switch (title) {
      case "Log Out":
        logoutSheetRef.current?.snapToIndex(0);
        break;
      case "My Profile":
        navigation.navigate("ClientSettingsProfile");
        break;
      case "Payment Methods":
        navigation.navigate("ClientPaymentMethods");
        break;
      case "Orders History":
        navigation.navigate("ClientOrders");
        break;
      case "Settings":
        navigation.navigate("ProAdvancedSettings");
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchInput
          placeholder="Search for Services"
          containerStyle={styles.searchInputContainer}
        />
        <NotificationIconWithBadge count="3" />
      </View>
      {settingsList.map((item, index) => {
        return (
          <SettingItem
            key={`${item.title}-${index}`}
            {...item}
            onPress={() => handleOnPressSettingItem(item.title)}
            hideRightIcon={item.title === "Log Out"}
          />
        );
      })}
      <LogoutSheet ref={logoutSheetRef} closeButtonOption={closeLogout} />
    </SafeAreaView>
  );
};

export default ClientSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    paddingHorizontal: wp(4),
    rowGap: hp(3),
  },
  searchInputContainer: {
    borderRadius: wp(20),
    paddingVertical: hp(1),
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4),
    marginTop: hp(1),
  },
});
