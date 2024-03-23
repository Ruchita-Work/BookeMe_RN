import React, { useContext, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily } from "@theme";
import { AntDesign } from "@expo/vector-icons";
import { AppContext } from "@context/AppContextProvider";
import { SvgUri } from "react-native-svg";
import { AppSvgs } from "@assets/index";
import { Text } from "react-native";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { authActions } from "@redux/features";

const ProBottomTabbar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { isHomeTabVisible } = useContext(AppContext);
  const { isOpenModal } = useAppSelector(state => state.auth);

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
        onLongPress={() => onLongPress(route)}>
        {options.tabBarIcon({
          focused: isFocused,
          color: Colors.primary,
          size: wp(6),
        })}
      </TouchableOpacity>
    );
  };

  const handelAddService = () => {
    navigation.navigate("AddService");
    dispatch(authActions.setIsOpenModal(false));
  };

  const handelAddProduct = () => {
    navigation.navigate("ProAddService");
    dispatch(authActions.setIsOpenModal(false));
  };

  const handelModal = () => {
    if (isOpenModal) {
      dispatch(authActions.setIsOpenModal(false));
    } else {
      dispatch(authActions.setIsOpenModal(true));
    }
  };

  return (
    <View>
      <View
        style={[
          styles.tabbar,
          { paddingBottom: bottom },
          !isHomeTabVisible && { display: "none" },
        ]}>
        {state.routes.slice(0, 2).map(renderTabItems)}
        <TouchableOpacity
          style={styles.plusIconContainer}
          activeOpacity={0.6}
          onPress={() => handelModal()}>
          <AntDesign name="plus" size={wp(5)} color={Colors.white} />
        </TouchableOpacity>
        {state.routes
          .slice(2, 4)
          .map((item, index) => renderTabItems(item, index + 2))}
      </View>
      {isOpenModal && (
        <View style={styles.bottomView}>
          <SvgUri uri={AppSvgs.unionbg} />
          <View style={styles.btnMainView}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnName}>Appoint</Text>
              <SvgUri uri={AppSvgs.calendarPlus} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handelAddService()}>
              <Text style={styles.btnName}>Service</Text>
              <SvgUri uri={AppSvgs.video_camera_front} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handelAddProduct()}>
              <Text style={styles.btnName}>Product</Text>
              <SvgUri uri={AppSvgs.video_camera_back} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProBottomTabbar;

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    height: hp(11),
    paddingTop: hp(2),
    justifyContent: "space-around",
    backgroundColor: "#27262860",
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    alignItems: "center",
    bottom: -1,
    position: "absolute",
    right: 0,
    left: 0,
  },
  plusIconContainer: {
    height: wp(11.5),
    width: wp(11.5),
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(6),
  },
  bottomView: {
    position: "absolute",
    zIndex: 1,
    bottom: hp(10),
    alignSelf: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(0.5),
  },
  btnName: {
    color: Colors.white,
    width: wp(15),
    fontFamily: FontFamily.Urbanist.Bold,
    fontSize: 16,
    marginRight: wp(2),
  },
  btnMainView: {
    position: "absolute",
    alignSelf: "center",
    bottom: hp(4.5),
  },
});
