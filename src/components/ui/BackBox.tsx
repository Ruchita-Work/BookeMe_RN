import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { wp } from "@utils/responsive";
import { Colors } from "@theme";
import { useAppNavigation } from "@hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IBackBoxProps {
  style?: ViewStyle;
}

const BackBox: FC<IBackBoxProps> = ({ style }) => {
  const { navigation } = useAppNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={[styles.backButton, style]}>
      <AntDesign name="arrowleft" size={wp(5)} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default BackBox;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    marginLeft: wp(7.5),
    borderWidth: 2,
    borderColor: Colors.neutral600,
    borderRadius: wp(2),
    padding: wp(1),
    alignItems: "center",
    alignSelf: "flex-start",
  },
});
