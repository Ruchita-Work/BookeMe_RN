import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useAppNavigation } from "@hooks";
import { Colors } from "@theme";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { SettingItem } from "@components";
import { ScrollView } from "react-native-gesture-handler";

const settingsList = [
  { title: "Location", icon: AppImages.location },
  {
    title: "Notification",
    customIcon: (
      <FontAwesome5 name="bell" size={wp(5)} color={Colors.neutral200} />
    ),
  },
  { title: "Security", icon: AppImages.security },
  { title: "Terms & Privacy", icon: AppImages.settingsTermPrivacy },
  { title: "About BookMe", icon: AppImages.settingsAboutBeauty },
];

const ProAdvancedSettings = () => {
  const { navigation } = useAppNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <AntDesign name="arrowleft" color={Colors.white} size={wp(6)} />
      </TouchableOpacity>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {settingsList.map((item, index) => (
          <SettingItem
            key={`${item.title}-${index}`}
            {...item}
            hideRightIcon={item.title === "About BookMe"}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProAdvancedSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    paddingTop: hp(2),
    paddingHorizontal: wp(5),
  },
  content: {
    marginTop: hp(4),
    rowGap: hp(2.5),
  },
});
