import React, { Dispatch, FC, SetStateAction } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp, wp } from "@utils/responsive";
import { TAddServiceSelectedMediaTabType } from "@hooks/addService/useAddService";

interface IAddServiceVideoBottomOptionsProps {
  selectedtab: TAddServiceSelectedMediaTabType;
  setselectedtab: Dispatch<SetStateAction<TAddServiceSelectedMediaTabType>>;
}

interface IOptionItemProps {
  title: string;
  type: TAddServiceSelectedMediaTabType;
}

const AddServiceVideoBottomOptions: FC<IAddServiceVideoBottomOptionsProps> = ({
  selectedtab,
  setselectedtab,
}) => {
  const OptionTabItem = (props: IOptionItemProps) => {
    const titleStyle =
      selectedtab === props.type ? styles.activeText : styles.inActiveText;
    return (
      <TouchableOpacity onPress={() => setselectedtab(props.type)}>
        <Text style={titleStyle}>{props.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.footerOptionsContainer}>
      <OptionTabItem title="Camera" type="image" />
      <OptionTabItem title="Quick" type="video" />
      <OptionTabItem title="Templates" type="template" />
    </View>
  );
};

export default AddServiceVideoBottomOptions;

const styles = StyleSheet.create({
  footerOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(8),
    justifyContent: "center",
    height: hp(7),
    width: "104%",
  },
  activeText: {
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Urbanist.Bold,
    color: Colors.white,
  },
  inActiveText: {
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Urbanist.Bold,
    color: Colors.gray600,
  },
});
