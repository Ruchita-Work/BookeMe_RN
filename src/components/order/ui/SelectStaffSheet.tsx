import React, { forwardRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import AppSheet from "@components/ui/AppSheet";
import { useHideTabsForSheet } from "@hooks";
import { hp, wp } from "@utils/responsive";
import SelectStaffItem from "@components/order/ui/SelectStaffItem";
import { AntDesign } from "@expo/vector-icons";
import { FontFamily, FontSizes, Colors } from "@theme";
import ButtonComponent from "@components/button/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ISelectStaffSheetProps {
  onPressFooterButton: () => void;
}

const SelectStaffSheet = forwardRef<BottomSheet, ISelectStaffSheetProps>(
  (props, ref) => {
    const { onAnimateSheet } = useHideTabsForSheet();
    const { bottom } = useSafeAreaInsets();

    const [selectedStaffs, setSelectedStaffs] = useState<Set<number>>(
      new Set(),
    );

    const handleSheetClose = () => {
      ref.current?.close();
    };

    const handleSelectStaff = (id: number, newValue: boolean) => {
      setSelectedStaffs(prevIds => {
        const newIdsSet = new Set(prevIds);
        if (newIdsSet.has(id)) {
          newIdsSet.delete(id);
          return newIdsSet;
        } else {
          return newIdsSet.add(id);
        }
      });
    };

    return (
      <AppSheet
        onAnimate={onAnimateSheet}
        ref={ref}
        onClose={handleSheetClose}
        handleStyle={{ backgroundColor: Colors.neutral800 }}
        snapPoints={[hp(70)]}>
        <View style={[styles.container, { paddingBottom: hp(1) + bottom }]}>
          <TouchableOpacity style={styles.close} onPress={handleSheetClose}>
            <AntDesign name="close" color={Colors.white} size={wp(6)} />
          </TouchableOpacity>
          <Text style={styles.title}>Select Staff</Text>
          <Text style={styles.subTitle}>For Men's Haircut</Text>
          <BottomSheetFlatList
            data={[1, 2, 3]}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <SelectStaffItem
                selected={selectedStaffs.has(item)}
                onSelect={newValue => handleSelectStaff(item, newValue)}
              />
            )}
            style={styles.list}
            contentContainerStyle={styles.listContent}
          />
          <ButtonComponent
            buttonStyle={{ width: "100%" }}
            text="Check Availability"
            onPress={() => {
              handleSheetClose();
              props.onPressFooterButton();
            }}
          />
        </View>
      </AppSheet>
    );
  },
);

export default SelectStaffSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral800,
    paddingHorizontal: wp(5),
  },
  title: {
    fontSize: FontSizes.size24,
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
  },
  subTitle: {
    marginTop: hp(0.5),
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size14,
  },
  close: {
    marginLeft: "auto",
  },
  list: {
    marginTop: hp(3),
  },
  listContent: {
    rowGap: hp(1.5),
  },
});
