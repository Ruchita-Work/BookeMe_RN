import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import AvatarImage from "@components/ui/AvatarImage";
import { AppImages } from "@assets";
import { wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import Checkbox from "@components/ui/Checkbox";

interface ISelectStaffItemProps {
  onSelect: (newValue: boolean) => void;
  selected: boolean;
}

const SelectStaffItem: FC<ISelectStaffItemProps> = ({ onSelect, selected }) => {
  return (
    <View style={styles.container}>
      <AvatarImage size={wp(13.5)} image={AppImages.dummyProfileAvatar} />
      <View style={styles.content}>
        <Text style={styles.name}>Arthur Brady</Text>
        <Text style={styles.category}>Barbers</Text>
      </View>
      <Checkbox checked={selected} onPress={onSelect} />
    </View>
  );
};

export default SelectStaffItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  name: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: FontSizes.size16,
  },
  category: {
    color: Colors.neutral400,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.Regular,
  },
});
