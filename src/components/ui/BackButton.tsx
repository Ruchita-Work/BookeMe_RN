import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

interface IBackButtonProps {
  containerStyle?: ViewStyle;
}

const BackButton: FC<IBackButtonProps> = ({ containerStyle }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={[styles.backButtonContainer, containerStyle]}>
      <AntDesign name="left" size={wp(5)} color={Colors.white} />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: wp(2.5),
  },
  backButton: {
    paddingVertical: 0,
    paddingLeft: wp(1),
  },
  backText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Poppins.Medium,
    paddingHorizontal: wp(2),
  },
});
