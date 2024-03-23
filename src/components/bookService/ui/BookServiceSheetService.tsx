import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily, FontSizes } from "@theme";
import ButtonWithIcon from "@components/button/ButtonWithIcon";
import { Feather } from "@expo/vector-icons";

interface IBookServiceSheetServiceProps {
  isAdded: boolean;
  title: string;
  price: string;
  time: string;
  onPress: () => void;
}

const BookServiceSheetService: FC<IBookServiceSheetServiceProps> = props => {
  const { isAdded, onPress, price, time, title } = props;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{price}</Text>
          <View style={styles.separatorDot} />
          <Text style={styles.subtitle}>{time}</Text>
        </View>
      </View>
      <ButtonWithIcon
        onPress={onPress}
        text={isAdded ? "Added" : "Add"}
        icon={
          isAdded ? (
            <Feather name="check" color={Colors.primary} size={wp(4.5)} />
          ) : null
        }
        style={[styles.addButton, isAdded && styles.addedButton]}
        textStyle={[styles.addButtonText, isAdded && styles.addedButtonText]}
      />
    </View>
  );
};

export default BookServiceSheetService;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    rowGap: hp(0.5),
  },
  title: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size16,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    color: Colors.neutral400,
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size14,
  },
  addButton: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    backgroundColor: Colors.primary,
    gap: wp(2),
  },
  addButtonText: {
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.SemiBold,
    color: Colors.white,
  },
  addedButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: "transparent",
    paddingHorizontal: wp(3.5),
  },
  addedButtonText: {
    color: Colors.primary,
  },
  separatorDot: {
    height: wp(1),
    width: wp(1),
    backgroundColor: Colors.neutral400,
    borderRadius: wp(1),
    marginHorizontal: wp(2),
  },
});
