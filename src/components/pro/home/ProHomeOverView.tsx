import React, { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { AppImages } from "@assets";
import { hp, wp } from "@utils/responsive";
import MultiImagesRow from "@components/ui/MultiImagesRow";
import { FontFamily, FontSizes, Colors } from "@theme";
import { LinearGradient } from "expo-linear-gradient";

const dummyOurClientData = new Array(4).fill(AppImages.dummyProfileAvatar);

const ProHomeOverView: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionColumn}>
        <ImageBackground source={AppImages.proServices} style={styles.services}>
          <View style={styles.imageTitleRow}>
            <Text style={styles.imageTitleRowText}>Services</Text>
            <Text style={styles.imageTitleRowText}>20+</Text>
          </View>
          <LinearGradient
            colors={["transparent", Colors.primary + 50, Colors.primary]}
            locations={[0.1, 0.3, 0.7]}
            style={styles.gradient}
          />
        </ImageBackground>
        <View style={styles.ourClients}>
          <MultiImagesRow imageSize={wp(9.5)} images={dummyOurClientData} />
          <Text style={styles.ourClientsText}>Our Client’s</Text>
        </View>
      </View>
      <View style={styles.sectionColumn}>
        <ImageBackground
          source={AppImages.proBrandAndStyles}
          style={styles.brandAndStyles}>
          <Text style={styles.brandAndStyleTitle}>Brands & Style’s</Text>
          <LinearGradient
            colors={["transparent", Colors.primary + 50, Colors.primary]}
            locations={[0.1, 0.3, 0.7]}
            style={styles.gradient}
          />
        </ImageBackground>
        <ImageBackground source={AppImages.proProducts} style={styles.products}>
          <View style={styles.imageTitleRow}>
            <Text style={styles.imageTitleRowText}>Products</Text>
            <Text style={styles.imageTitleRowText}>24+</Text>
          </View>
          <LinearGradient
            colors={["transparent", Colors.primary + 50, Colors.primary]}
            locations={[0.1, 0.3, 0.7]}
            style={styles.gradient}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default ProHomeOverView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: wp(5),
    justifyContent: "space-between",
  },
  sectionColumn: {
    width: wp(44),
  },
  services: {
    width: "100%",
    height: hp(21),
    borderTopRightRadius: wp(6),
    borderBottomLeftRadius: wp(6),
    overflow: "hidden",
  },
  brandAndStyles: {
    width: "100%",
    height: hp(10),
    borderRadius: wp(6),
    overflow: "hidden",
  },
  products: {
    marginTop: hp(1),
    height: hp(21),
    borderTopRightRadius: wp(6),
    borderBottomLeftRadius: wp(6),
    width: "100%",
    overflow: "hidden",
  },
  imageTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingHorizontal: wp(3),
    paddingBottom: hp(1),
    zIndex: 20,
  },
  imageTitleRowText: {
    fontSize: FontSizes.size22,
    color: Colors.white,
    lineHeight: hp(2.7),
    fontFamily: FontFamily.Poppins.Medium,
  },
  ourClients: {
    backgroundColor: "#A7A7A7CC",
    height: hp(10),
    width: "100%",
    marginTop: hp(1),
    borderRadius: wp(6),
    justifyContent: "center",
    alignItems: "center",
  },
  ourClientsText: {
    color: Colors.white,
    lineHeight: 14,
    fontSize: FontSizes.size14,
    marginTop: hp(1),
    fontFamily: FontFamily.Inter.Bold,
  },
  brandAndStyleTitle: {
    color: Colors.white,
    marginTop: "auto",
    textAlign: "center",
    marginBottom: hp(1),
    lineHeight: hp(2),
    fontSize: FontSizes.size20,
    zIndex: 10,
    fontFamily: FontFamily.Inter.Bold,
  },
  gradient: {
    height: hp(8),
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
  },
});
