import React, { FC } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackBox, ButtonComponent, ProductCard } from "@components";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { useAppNavigation } from "@hooks";

const ClientSettingsProfile: FC = () => {
  const { top } = useSafeAreaInsets();
  const { navigation } = useAppNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={AppImages.proProfileBackground}
        style={styles.headerImage}>
        <BackBox style={{ marginTop: top + hp(1) }} />
        <View style={styles.headerInfoRow}>
          <View style={{ rowGap: hp(0.5) }}>
            <Text style={styles.headerInfoTitle}>Erika Maissa</Text>
            <Text style={styles.headerInfoSubtitle}>Seattle, WA</Text>
          </View>
          <ButtonComponent
            text="Edit"
            variant="bordered"
            buttonStyle={{ borderWidth: 2, paddingVertical: hp(1.5) }}
            textStyle={{ fontFamily: FontFamily.Rubik.Regular }}
            onPress={() => navigation.navigate("ProEditProfile")}
          />
        </View>
      </ImageBackground>
      <View style={styles.tabsRow}>
        <ButtonComponent
          text="BOOKINGS"
          variant="fill"
          buttonStyle={styles.serviceItemActive}
          textStyle={styles.serviceItemActiveText}
        />
        <ButtonComponent
          text="UPCOMING"
          variant="fill"
          textStyle={styles.serviceItemInActiveText}
          buttonStyle={styles.serviceItemInActive}
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <ProductCard />}
        numColumns={2}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: hp(2),
        }}
      />
    </View>
  );
};

export default ClientSettingsProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  headerImage: {
    width: wp(100),
    aspectRatio: 1,
  },
  headerInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    paddingHorizontal: wp(5),
    paddingBottom: hp(2.5),
    justifyContent: "space-between",
  },
  headerInfoTitle: {
    fontFamily: FontFamily.Rubik.Bold,
    fontSize: FontSizes.size30,
    color: Colors.white,
  },
  headerInfoSubtitle: {
    fontFamily: FontFamily.Rubik.Regular,
    fontSize: FontSizes.size16,
    color: Colors.white,
  },
  serviceItemActive: {
    margin: wp(1),
    borderWidth: 0,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(7.5),
    width: wp(45),
  },
  serviceItemInActive: {
    margin: wp(1),
    borderWidth: 0,
    backgroundColor: "#1C1C1C",
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(7.5),
    width: wp(45),
  },
  serviceItemActiveText: {
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  serviceItemInActiveText: {
    color: Colors.primary,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  tabsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(1.5),
    alignSelf: "center",
    columnGap: wp(1),
  },
  productList: {
    marginTop: hp(2),
    paddingBottom: hp(8),
    paddingHorizontal: wp(4),
  },
});
