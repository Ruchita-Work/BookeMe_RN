import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { forwardRef, useMemo } from "react";
import AppSheet from "@components/ui/AppSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { useHideTabsForSheet } from "@hooks/index";
import { hp, wp } from "@utils/responsive";
import { Colors } from "@theme/colors";
import { FontFamily } from "@theme/fonts";
import { ButtonComponent } from "..";
import { SvgUri } from "react-native-svg";
import { AppSvgs } from "@assets/index";

const PromoSheet = forwardRef<BottomSheet, any>((props, ref) => {
  const { onAnimateSheet } = useHideTabsForSheet();
  const snapPoints = useMemo(() => [hp(80)], []);

  return (
    <AppSheet onAnimate={onAnimateSheet} ref={ref} snapPoints={snapPoints}>
      <View style={styles.mianView}>
        <Text style={styles.title}>Add Promo</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor={Colors.white}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Discount Amount"
          placeholderTextColor={Colors.white}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Description"
          placeholderTextColor={Colors.white}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.addPhotoBtn}>
          <View style={styles.cameraView}>
            <SvgUri uri={AppSvgs.camera} />
          </View>
        </TouchableOpacity>
        <ButtonComponent text="Save" buttonStyle={styles.button} />
      </View>
    </AppSheet>
  );
});

export default PromoSheet;

const styles = StyleSheet.create({
  mianView: {
    backgroundColor: Colors.dark2,
    flex: 1,
  },
  title: {
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Black,
    fontSize: 22,
    textAlign: "center",
    marginBottom: hp(3),
  },
  textInput: {
    fontFamily: FontFamily.Urbanist.Medium,
    fontSize: 16,
    backgroundColor: Colors.dark4,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    marginHorizontal: wp(5),
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    borderRadius: 20,
    marginBottom: hp(2),
  },
  addPhotoBtn: {
    width: wp(90),
    height: hp(25),
    alignSelf: "center",
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(2),
  },
  cameraView: {
    borderWidth: 0.5,
    borderColor: Colors.white,
    padding: wp(3),
    borderRadius: 50,
  },
  button: {
    width: wp(90),
    marginTop: hp(14),
  },
});
