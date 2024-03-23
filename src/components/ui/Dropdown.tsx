import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign, Entypo } from "@expo/vector-icons";

interface IDropdownItem {
  label: string;
  value: string;
}

export interface IDropdownProps {
  containerStyle?: ViewStyle;
  placeholder?: string;
  modalTitle?: string;
  items: IDropdownItem[];
  value: string;
  setItems: Dispatch<SetStateAction<IDropdownItem[]>>;
  setValue: Dispatch<SetStateAction<string>>;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
}

const Dropdown: FC<IDropdownProps> = ({
  containerStyle,
  modalTitle,
  placeholder,
  items,
  value,
  setItems,
  setValue,
  style,
  labelStyle,
  placeholderStyle,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={[styles.dropdown, style]}
      containerStyle={[styles.container, containerStyle]}
      placeholderStyle={[styles.title, placeholderStyle]}
      labelStyle={[styles.title, labelStyle]}
      listMode="MODAL"
      ArrowDownIconComponent={() => (
        <Entypo name="chevron-thin-down" size={wp(4)} color={Colors.white} />
      )}
      modalAnimationType="slide"
      modalContentContainerStyle={{ backgroundColor: Colors.dark2 }}
      CloseIconComponent={() => (
        <AntDesign name="close" size={wp(6)} color={Colors.white} />
      )}
      searchContainerStyle={styles.dropdownSearchContainer}
      listItemLabelStyle={[styles.title, styles.listItemLabel]}
      flatListProps={{ contentContainerStyle: styles.listContent }}
      TickIconComponent={() => (
        <AntDesign name="check" color={Colors.white} size={wp(5)} />
      )}
      modalTitle={modalTitle || "Select Option"}
      modalTitleStyle={styles.modalTitle}
      placeholder={placeholder || "Select"}
      itemSeparatorStyle={styles.separator}
      itemSeparator
    />
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    width: wp(48),
  },
  dropdown: {
    backgroundColor: "#F3F3F31A",
    borderRadius: wp(10),
    borderWidth: 0,
    paddingHorizontal: wp(4),
    minHeight: undefined, // to over-ride library default behavoir
    height: hp(4),
  },
  title: {
    color: Colors.white,
    fontSize: FontSizes.size16,
    flex: 1,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  dropdownSearchContainer: {
    borderBottomColor: Colors.white + 90,
    paddingBottom: hp(2),
    paddingHorizontal: wp(4),
  },
  listItemLabel: {
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Urbanist.Medium,
    paddingHorizontal: wp(2),
  },
  listContent: {
    paddingTop: hp(1),
  },
  modalTitle: {
    fontSize: FontSizes.size22,
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  separator: {
    backgroundColor: Colors.gray700,
    height: 1,
    marginVertical: hp(1),
  },
});
