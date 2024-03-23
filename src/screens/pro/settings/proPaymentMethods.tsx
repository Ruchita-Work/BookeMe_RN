import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, FontFamily, FontSizes } from "@theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "@utils/responsive";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useAppNavigation } from "@hooks";
import { AppImages } from "@assets";

const ProPaymentMethods = () => {
  const { navigation } = useAppNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <AntDesign name="arrowleft" color={Colors.white} size={wp(6)} />
      </TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity style={styles.paymentMethodCard}>
          <Image source={AppImages.stripe} style={styles.stripeCardImage} />
          <Text style={styles.paymentMethodCardTitle}>Stripe</Text>
          <Entypo name="chevron-thin-right" size={wp(4)} color={Colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentMethodCard, styles.paymentCardExtraPadding]}>
          <Image
            source={AppImages.mastercard}
            style={styles.paymentMethodCardImage}
          />
          <View style={styles.masterCardContent}>
            <Text style={styles.paymentMethodCardTitle}>
              Master Card{"  "}
              <Text style={styles.paymentMethodCardGreyTitle}>
                (Default)
              </Text>{" "}
            </Text>
            <Text style={styles.paymentMethodCardGreyTitle}>
              xxxx - xxxx - xxxx - 5689
            </Text>
          </View>
          <Entypo name="chevron-thin-right" size={wp(4)} color={Colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentMethodCard, styles.paymentCardExtraPadding]}>
          <Image
            source={AppImages.apple}
            style={styles.paymentMethodCardImage}
          />
          <Text style={styles.paymentMethodCardTitle}>Stripe</Text>
          <Entypo name="chevron-thin-right" size={wp(4)} color={Colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentMethodCard, styles.paymentCardExtraPadding]}>
          <Image
            source={AppImages.cards}
            style={styles.paymentMethodCardImage}
          />
          <Text style={styles.paymentMethodCardTitle}>Stripe</Text>
          <Entypo name="chevron-thin-right" size={wp(4)} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProPaymentMethods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    paddingTop: hp(2),
    paddingHorizontal: wp(5),
  },
  content: {
    marginTop: hp(4),
    rowGap: hp(5),
  },
  paymentMethodCard: {
    backgroundColor: Colors.neutral800,
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
  },
  paymentMethodCardImage: {
    height: wp(10),
    width: wp(10),
    resizeMode: "contain",
  },
  paymentMethodCardTitle: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: FontSizes.size18,
    flex: 1,
  },
  paymentMethodCardGreyTitle: {
    color: Colors.neutral400,
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size16,
    flex: 1,
  },
  stripeCardImage: {
    height: wp(15),
    width: wp(15),
    resizeMode: "contain",
  },
  masterCardContent: {
    flex: 1,
    rowGap: hp(0.5),
  },
  paymentCardExtraPadding: { paddingVertical: hp(2.5) },
});
