import * as React from "react";
import { Text, StyleSheet, View, Pressable, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import { useAppNavigation } from "@hooks";
import { FontSizes, Colors, FontFamily } from "@theme";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import {
  CustomBackgroundImage,
  ButtonComponent,
  ProductCard,
} from "@components";

const ProProfile = () => {
  const { navigation } = useAppNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
      <View style={styles.profileImageContainer}>
        <CustomBackgroundImage
          opacity="rgba(0,0,0,.9)"
          imageSource={Asset.fromModule(AppImages.proProfileBackground).uri}>
          <View style={[styles.profileInfoContainer, { paddingTop: top }]}>
            <View style={styles.header}>
              <Pressable onPress={navigation.goBack}>
                <AntDesign name="left" size={wp(6)} color={Colors.white} />
              </Pressable>
              <View style={styles.headerRightIconContainer}>
                <AntDesign name="setting" size={wp(6)} color={Colors.white} />
                <AntDesign name="search1" size={wp(6)} color={Colors.white} />
              </View>
            </View>
            <View style={styles.profileInfoSection}>
              <View>
                <Text style={styles.profileName}>Ann Winter</Text>
                <View style={styles.profileSubTitleSection}>
                  <Text style={styles.profileSubtitle}>Makeup Artist,</Text>
                  <Text style={styles.profileSubTitle2}> @BeautyBar</Text>
                </View>
              </View>
              <View>
                <ButtonComponent
                  text="PORTFOLIO"
                  variant="bordered"
                  buttonStyle={styles.portfolioButton}
                  textStyle={{
                    fontFamily: FontFamily.Rubik.Medium,
                    fontSize: FontSizes.size14,
                  }}
                />
              </View>
            </View>
          </View>
        </CustomBackgroundImage>
      </View>
      <View>
        <ScrollView horizontal={true} style={styles.serviceRowContainer}>
          <ButtonComponent
            text="SERVICES"
            variant="fill"
            buttonStyle={styles.serviceItemActive}
            textStyle={styles.serviceItemActiveText}
          />
          <ButtonComponent
            text="CALENDAR"
            variant="fill"
            textStyle={styles.serviceItemInActiveText}
            buttonStyle={styles.serviceItemInActive}
          />
          <ButtonComponent
            text="REVIEWS"
            variant="fill"
            textStyle={styles.serviceItemInActiveText}
            buttonStyle={styles.serviceItemInActive}
          />
        </ScrollView>
        <View style={styles.mostBooked}>
          <Pressable
            onPress={() => navigation.navigate("Categories")}
            style={styles.mostBookedHeader}>
            <Text style={styles.mostBookedHeaderTitle}>Most Booked</Text>
            <Text style={styles.mostBookedAllText}>
              All
              <AntDesign name="right" size={18} color="#909090" />
            </Text>
          </Pressable>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: "#0D0F14",
    paddingBottom: hp(14),
  },
  profileImageContainer: {
    height: "40%",
    minHeight: 400,
  },
  profileInfoContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerRightIconContainer: {
    flexDirection: "row",
    gap: wp(6),
  },
  profileInfoSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
  },
  profileName: {
    color: Colors.white,
    fontSize: FontSizes.size32,
    fontFamily: FontFamily.Rubik.Bold,
  },
  profileSubTitleSection: {
    flexDirection: "row",
  },
  profileSubtitle: {
    color: Colors.white,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Rubik.Regular,
  },
  profileSubTitle2: {
    color: Colors.white,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Rubik.Bold,
  },
  portfolioButton: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(2),
    borderWidth: 2,
  },
  serviceRowContainer: {
    flexDirection: "row",
    paddingLeft: wp(2.5),
    paddingVertical: hp(1),
  },
  serviceItemActive: {
    margin: wp(1),
    borderWidth: 0,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(7.5),
  },
  serviceItemInActive: {
    margin: wp(1),
    borderWidth: 0,
    backgroundColor: "#1C1C1C",
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(7.5),
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
  mostBooked: {
    paddingLeft: wp(5),
    paddingRight: wp(5),
    paddingTop: hp(1),
  },
  mostBookedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mostBookedHeaderTitle: {
    color: Colors.white,
    fontSize: FontSizes.size22,
    fontFamily: FontFamily.Rubik.Medium,
  },
  mostBookedAllText: {
    color: "#909090",
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Rubik.Medium,
  },
  productList: {
    marginTop: hp(2),
    paddingBottom: hp(8),
  },
});

export default ProProfile;
