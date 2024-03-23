import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { forwardRef, useMemo, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { useHideTabsForSheet } from "@hooks/index";
import { hp, wp } from "@utils/responsive";
import AppSheet from "@components/ui/AppSheet";
import { Colors } from "@theme/colors";
import { FontFamily } from "@theme/fonts";
import { ButtonComponent, Dropdown } from "@components";
import { AppSvgs } from "@assets/index";
import { SvgUri } from "react-native-svg";

const ProsSheet = forwardRef<BottomSheet, any>((props, ref) => {
  const { onAnimateSheet } = useHideTabsForSheet();
  const snapPoints = useMemo(() => [hp(80)], []);

  const [proType, setProType] = useState(null);
  const [reatAmount, setReatAmount] = useState(null);
  const [proTypeItems, setProTypeItems] = useState([
    { label: "Employee ", value: "Employee " },
    { label: "Independent Pro", value: "Independent Pro" },
  ]);
  const [RentAmountItems, setRentAmountItems] = useState([
    { label: "Employee ", value: "Employee " },
    { label: "Independent Pro", value: "Independent Pro" },
  ]);

  return (
    <AppSheet onAnimate={onAnimateSheet} ref={ref} snapPoints={snapPoints}>
      <View style={styles.mianView}>
        <Text style={styles.title}>Add Pro</Text>
        <TextInput
          placeholder="First Name"
          placeholderTextColor={Colors.white}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor={Colors.white}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={Colors.white}
          style={styles.textInput}
        />
        <Dropdown
          items={proTypeItems}
          setItems={setProTypeItems}
          value={proType}
          setValue={setProType}
          containerStyle={styles.container}
          style={styles.dropDownStyle}
          modalTitle="Select Type"
          placeholder="Pro Type"
          placeholderStyle={styles.placeholder}
        />
        <Dropdown
          items={RentAmountItems}
          setItems={setRentAmountItems}
          value={reatAmount}
          setValue={setReatAmount}
          containerStyle={styles.container}
          style={styles.dropDownStyle}
          modalTitle="Select Amount"
          placeholder="Seat Rent Amount"
          placeholderStyle={styles.placeholder}
        />
        <TouchableOpacity style={styles.addPhotoBtn}>
          <View style={styles.cameraView}>
            <SvgUri uri={AppSvgs.camera} />
          </View>
        </TouchableOpacity>
        <ButtonComponent text="Save" buttonStyle={{ width: wp(90) }} />
      </View>
    </AppSheet>
  );
});

export default ProsSheet;

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
  container: {
    width: wp(90),
    alignSelf: "center",
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    borderRadius: 20,
    marginBottom: hp(2),
  },
  dropDownStyle: {
    height: hp(4.4),
  },
  placeholder: {
    fontFamily: FontFamily.Urbanist.Medium,
    fontSize: 16,
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
});
