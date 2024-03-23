import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AppImages, AppSvgs } from "@assets/index";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@theme/colors";
import { hp, wp } from "@utils/responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgUri } from "react-native-svg";
import { FontFamily } from "@theme/fonts";
import { useAppNavigation } from "@hooks/index";

const StoreWelcome = () => {
  const { top } = useSafeAreaInsets();
  const { navigation } = useAppNavigation();

  return (
    <ImageBackground
      source={AppImages.serviceBg}
      style={[styles.serviceBg, { paddingTop: top }]}
      resizeMode="cover">
      <TouchableOpacity
        style={{ marginLeft: wp(5) }}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={wp(6)} color={Colors.white} />
      </TouchableOpacity>
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.camera}>
          <SvgUri uri={AppSvgs.camera} />
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeTitle}>Welcome Jennifer,</Text>
      <Text style={styles.beautyTitle}>Beauty Bar</Text>
      <TouchableOpacity
        style={styles.addServiceBtn}
        onPress={() => navigation.navigate("Collection")}>
        <Text style={styles.addServicesName}>Add Services</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default StoreWelcome;

const styles = StyleSheet.create({
  serviceBg: {
    flex: 1,
  },
  camera: {
    backgroundColor: Colors.white_500,
    borderWidth: 1,
    alignSelf: "center",
    borderColor: Colors.white,
    padding: wp(8),
    borderRadius: 50,
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
  },
  welcomeTitle: {
    color: Colors.white_800,
    fontFamily: FontFamily.Rubik.Medium,
    fontSize: 16,
    marginHorizontal: wp(8),
  },
  beautyTitle: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.Bold,
    fontSize: 30,
    marginVertical: hp(1.5),
    marginHorizontal: wp(8),
  },
  addServiceBtn: {
    borderWidth: 1,
    borderColor: Colors.white,
    alignSelf: "flex-start",
    marginHorizontal: wp(8),
    paddingHorizontal: wp(8),
    paddingVertical: hp(1.5),
    borderRadius: 30,
    marginBottom: hp(5),
  },
  addServicesName: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.SemiBold,
    textTransform: "uppercase",
  },
});
