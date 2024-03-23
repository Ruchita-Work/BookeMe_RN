import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { Colors } from "@theme/colors";
import { AppImages, AppSvgs } from "@assets/index";
import { hp, wp } from "@utils/responsive";
import { SvgUri } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontFamily } from "@theme/fonts";
import { AntDesign } from "@expo/vector-icons";
import ProsSheet from "@components/businessStore/ProsSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import PromoSheet from "@components/businessStore/PromoSheet";
import { useAppNavigation } from "@hooks/index";

const AddService = () => {
  const { top } = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheet>(null);
  const promoSheetRef = useRef<BottomSheet>(null);
  const { navigation } = useAppNavigation();

  const closeSheet = () => {
    sheetRef.current?.close();
  };

  const services = [
    {},
    {
      name: "Clothing",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Clothing",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Clothing",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <ImageBackground
        source={AppImages.serviceBg}
        style={styles.serviceBg}
        resizeMode="cover">
        <View style={[styles.headerRow, { marginTop: top + hp(1) }]}>
          <TouchableOpacity style={{ marginRight: wp(3) }}>
            <SvgUri uri={AppSvgs.heart1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgUri uri={AppSvgs.search1} />
          </TouchableOpacity>
        </View>
        <View style={styles.mainTextView}>
          <View style={styles.textRowView}>
            <View>
              <Text style={styles.title}>Beauty Bar</Text>
              <TouchableOpacity style={styles.viewPortfolioBtn}>
                <Text style={styles.portfolioText}>VIEW PORTFOLIO</Text>
                <SvgUri uri={AppSvgs.arrowRight} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.des}>
            Rising Sun Ave, 505, Philadelphia, 19140
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.headerServiceRow}>
        <Text style={styles.servicesText}>Services</Text>
        <TouchableOpacity style={styles.allRowView}>
          <Text style={styles.allText}>All</Text>
          <SvgUri uri={AppSvgs.arrowRight} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={services}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              {index == 0 ? (
                <TouchableOpacity
                  style={styles.addServiceView}
                  onPress={() => navigation.navigate("StoreWelcome")}>
                  <View style={styles.plusBtn}>
                    <AntDesign name="plus" size={wp(4)} color={Colors.white} />
                  </View>
                  <Text style={styles.addServiceText}>Add Service</Text>
                </TouchableOpacity>
              ) : (
                <View>
                  <Image
                    source={{ uri: item?.image }}
                    style={styles.serviceImage}
                  />
                  <Text style={styles.serviceName}>{item?.name}</Text>
                </View>
              )}
            </>
          );
        }}
      />
      <View style={styles.headerServiceRow}>
        <Text style={styles.servicesText}>Our Pros</Text>
        <TouchableOpacity style={styles.allRowView}>
          <Text style={styles.allText}>All</Text>
          <SvgUri uri={AppSvgs.arrowRight} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={services}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              {index == 0 ? (
                <TouchableOpacity
                  style={styles.addProsView}
                  onPress={() => sheetRef.current?.collapse()}>
                  <View style={styles.plusBtn}>
                    <AntDesign name="plus" size={wp(4)} color={Colors.white} />
                  </View>
                  <Text style={styles.addServiceText}>Add Pro</Text>
                </TouchableOpacity>
              ) : (
                <View>
                  <Image
                    source={{ uri: item?.image }}
                    style={styles.prosImage}
                  />
                  <Text style={styles.addProsName}>American armholes</Text>
                  <View style={styles.row}>
                    <TouchableOpacity style={{ marginRight: wp(2) }}>
                      <SvgUri uri={AppSvgs.prosEdit} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <SvgUri uri={AppSvgs.Delete} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </>
          );
        }}
      />
      <TouchableOpacity
        style={styles.addPromoView}
        onPress={() => promoSheetRef.current?.collapse()}>
        <View style={styles.plusBtn}>
          <AntDesign name="plus" size={wp(4)} color={Colors.white} />
        </View>
        <Text style={styles.addServiceText}>Add Promo</Text>
      </TouchableOpacity>
      <ProsSheet ref={sheetRef} closeButtonOption={closeSheet} />
      <PromoSheet ref={promoSheetRef} closeButtonOption={closeSheet} />
    </ScrollView>
  );
};

export default AddService;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark1,
    flex: 1,
  },
  serviceBg: {
    width: wp(100),
    height: hp(60),
  },
  headerRow: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: wp(5),
  },
  title: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Bold,
    fontSize: 30,
  },
  viewPortfolioBtn: {
    flexDirection: "row",
    marginTop: hp(1),
    alignItems: "center",
  },
  portfolioText: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
    marginRight: wp(2),
  },
  des: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
    marginHorizontal: wp(5),
    marginTop: hp(1),
  },
  editBtn: {
    borderWidth: 1.5,
    borderColor: Colors.white,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.8),
    borderRadius: 20,
  },
  editText: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: 15,
  },
  textRowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp(5),
  },
  mainTextView: {
    justifyContent: "flex-end",
    flex: 1,
    bottom: hp(2),
  },
  headerServiceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(5),
    marginVertical: hp(2),
  },
  servicesText: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.Bold,
    fontSize: 22,
  },
  allRowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  allText: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.Bold,
    marginRight: wp(2),
  },
  addServiceView: {
    marginRight: wp(3),
    marginLeft: wp(5),
    width: wp(47),
    height: hp(26),
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 12,
  },
  plusBtn: {
    borderWidth: 0.5,
    borderColor: Colors.white,
    alignSelf: "center",
    padding: wp(3),
    borderRadius: 20,
  },
  addServiceText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 17,
    marginTop: hp(1.5),
    fontFamily: FontFamily.Rubik.Bold,
  },
  serviceImage: {
    width: wp(47),
    height: hp(26),
    borderRadius: 12,
    marginRight: wp(3),
  },
  serviceName: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.SemiBold,
    fontSize: 22,
    position: "absolute",
    bottom: hp(2),
    marginLeft: wp(3),
  },
  addProsView: {
    marginRight: wp(3),
    marginLeft: wp(5),
    width: wp(40),
    height: hp(26),
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 12,
  },
  addProsName: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.SemiBold,
    marginTop: hp(1),
  },
  prosImage: {
    width: wp(40),
    height: hp(23),
    borderRadius: 12,
    marginRight: wp(3),
  },
  row: {
    flexDirection: "row",
    position: "absolute",
    right: wp(5),
    top: hp(1.5),
  },
  addPromoView: {
    marginHorizontal: wp(5),
    marginVertical: hp(3),
    height: hp(26),
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 12,
  },
});
