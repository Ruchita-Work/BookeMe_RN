import React, { forwardRef, useMemo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { hp, wp } from "@utils/responsive";
import { useHideTabsForSheet } from "@hooks";
import {
  AppSheet,
  BookServiceSheetServicesList,
  SearchInput,
} from "@components";
import { Colors, FontFamily, FontSizes } from "@theme";
import { AntDesign } from "@expo/vector-icons";
import { AppImages } from "@assets";

const ClientBookServiceSheet = forwardRef<BottomSheet, any>((props, ref) => {
  const { onAnimateSheet } = useHideTabsForSheet();
  const snapPoints = useMemo(() => [hp(65)], []);

  const handleSheetClose = () => {
    ref.current?.close();
  };

  return (
    <AppSheet
      handleStyle={styles.sheetHandle}
      onAnimate={onAnimateSheet}
      ref={ref}
      snapPoints={snapPoints}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add Services</Text>
          <TouchableOpacity onPress={handleSheetClose} hitSlop={wp(2)}>
            <AntDesign name="close" size={wp(5)} color={Colors.neutral200} />
          </TouchableOpacity>
        </View>
        <SearchInput
          containerStyle={styles.searchInputContainer}
          style={styles.searchInput}
          placeholder="Find your favorite artists"
          placeholderTextColor={Colors.neutral400}
          useBottomSheetInput
          customSearchIcon={() => (
            <Image
              source={AppImages.searchShine}
              style={styles.searchInputIcon}
            />
          )}
        />
        <BookServiceSheetServicesList />
      </View>
    </AppSheet>
  );
});

export default ClientBookServiceSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral800,
    paddingHorizontal: wp(5),
  },
  sheetHandle: {
    backgroundColor: Colors.neutral800,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(1.5),
  },
  headerTitle: {
    color: Colors.neutral200,
    fontSize: FontSizes.size24,
    fontFamily: FontFamily.Poppins.Medium,
  },
  searchInputIcon: {
    height: wp(6),
    width: wp(6),
    resizeMode: "contain",
    tintColor: Colors.primary,
  },
  searchInputContainer: {
    marginTop: hp(1),
    marginBottom: hp(2),
    borderWidth: 0,
    backgroundColor: Colors.neutral700,
    borderRadius: wp(10),
    paddingVertical: hp(1.2),
  },
  searchInput: {
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size16,
    color: Colors.neutral200,
  },
});
