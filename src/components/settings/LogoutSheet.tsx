import React, { forwardRef, useMemo } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { hp } from "@utils/responsive";
import { useAppDispatch, useAppNavigation, useHideTabsForSheet } from "@hooks";
import logoutSheetStyles from "@components/settings/LogoutSheetStyles";
import AppSheet from "@components/ui/AppSheet";
import Separator from "@components/ui/Separator";
import ButtonComponent from "@components/button/Button";
import { Colors, FontFamily } from "@theme";
import { createAction } from "@reduxjs/toolkit";

const logoutAction = createAction("LOGOUT");

const LogoutSheet = forwardRef<BottomSheet, any>((props, ref) => {
  const { navigation } = useAppNavigation();
  const dispatch = useAppDispatch();
  const { onAnimateSheet } = useHideTabsForSheet();

  const snapPoints = useMemo(() => [hp(30)], []);

  const handleOnPressLogout = () => {
    dispatch(logoutAction());
    navigation.reset({ routes: [{ name: "SignIn" }] });
  };

  return (
    <AppSheet onAnimate={onAnimateSheet} ref={ref} snapPoints={snapPoints}>
      <View style={logoutSheetStyles.container}>
        <Text style={logoutSheetStyles.title}>Logout</Text>
        <Separator color={Colors.dark3} />
        <Text style={logoutSheetStyles.subtitle}>
          Are you sure you want to log out?
        </Text>
        <View style={logoutSheetStyles.buttonsContainer}>
          <ButtonComponent
            buttonStyle={{ backgroundColor: Colors.dark3 }}
            textStyle={{ fontFamily: FontFamily.Urbanist.Bold }}
            text="Cancel"
            onPress={() => {
              props?.closeButtonOption?.();
            }}
          />
          <ButtonComponent
            text="Yes, logout"
            textStyle={{ fontFamily: FontFamily.Urbanist.Bold }}
            onPress={handleOnPressLogout}
          />
        </View>
      </View>
    </AppSheet>
  );
});

export default LogoutSheet;
