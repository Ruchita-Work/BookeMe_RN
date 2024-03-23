import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily, FontSizes } from "@theme";
import { AppImages } from "@assets";
import { FontAwesome } from "@expo/vector-icons";

interface IPayPlanCardProps {
  selected: boolean;
  title: string;
  subTitle: string;
  onPress: () => void;
}

const PayPlanCard: FC<IPayPlanCardProps> = ({
  selected,
  subTitle,
  title,
  onPress,
}) => {
  const colors = selected
    ? ["#86FF99", "#88C0FC", "#BE9EFF", "#FFB8E0"]
    : ["transparent"];

  return (
    <TouchableOpacity onPress={() => onPress()} activeOpacity={0.7}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.container, selected && styles.selectedContainer]}>
        {!!selected && (
          <>
            <View style={styles.checkContainer}>
              <FontAwesome name="check" color={Colors.white} size={wp(4)} />
            </View>
            <Image
              source={AppImages.celebrate}
              resizeMode="contain"
              style={styles.selectedImage}
            />
          </>
        )}
        <View
          style={[
            styles.detailsContainer,
            !selected && styles.deSelectedDetailsContainer,
          ]}>
          <Text style={[styles.title, selected && styles.selectedTitle]}>
            {title}
          </Text>
          <Text style={[styles.subTitle, selected && styles.selectedSubTitle]}>
            {subTitle}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PayPlanCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#88C0FC",
    borderRadius: wp(5),
    height: hp(23),
    width: wp(40),
  },
  selectedContainer: {
    borderWidth: 0,
  },
  checkContainer: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(6),
    borderWidth: wp(1.8),
    borderColor: Colors.dark1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6EA95C",
    margin: wp(1),
  },
  selectedImage: {
    width: wp(9),
    height: hp(4.5),
    alignSelf: "center",
  },
  selectedTitle: {
    color: "#200745",
  },
  selectedSubTitle: {
    color: "#200745",
    fontFamily: FontFamily.Inter.Regular,
  },
  title: {
    fontSize: FontSizes.size20,
    color: Colors.white,
    fontFamily: FontFamily.Poppins.SemiBold,
    textAlign: "center",
  },
  subTitle: {
    color: Colors.colorful2,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Inter.Bold,
    width: wp(18),
    textAlign: "center",
    lineHeight: hp(2),
  },
  detailsContainer: {
    marginVertical: hp(3),
    alignItems: "center",
    rowGap: hp(1),
  },
  deSelectedDetailsContainer: {
    marginTop: hp(13),
  },
});
