import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { useAppNavigation } from "@hooks";
import {
  BookServiceAlbumItem,
  ButtonComponent,
  OrderDetailProduct,
  OrderDetailSummary,
  ServiceDetailItem,
} from "@components";

const ClientBookingConfirmation = () => {
  const { navigation } = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign color={Colors.neutral200} size={wp(6)} name="arrowleft" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirm</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.title}>Booking Schedule</Text>
        <Text style={styles.subTitle}>At 12:30 PM Mon, Sep 16th, 2023</Text>
        <Text style={styles.servicesText}>Services</Text>
        <ServiceDetailItem containerStyle={{ marginTop: hp(2) }} />
        <BookServiceAlbumItem containerStyle={{ marginTop: hp(3) }} />
        <Text style={[styles.servicesText, { marginBottom: hp(2) }]}>
          Products
        </Text>
        <OrderDetailProduct />
        <OrderDetailSummary />
      </ScrollView>
      <View style={[styles.footer, { paddingBottom: insets.bottom + hp(3) }]}>
        <ButtonComponent
          buttonStyle={{ width: wp(90) }}
          text="Total $85 - Book It"
          onPress={() => navigation.navigate('ClientOrders')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ClientBookingConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    paddingTop: hp(1.5),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5),
    columnGap: wp(4),
  },
  headerTitle: {
    color: Colors.neutral200,
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Poppins.Medium,
  },
  content: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
  },
  title: {
    color: Colors.neutral200,
    textAlign: "center",
    marginTop: hp(3),
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Poppins.Medium,
  },
  subTitle: {
    color: Colors.neutral200,
    textAlign: "center",
    marginTop: hp(1),
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.Regular,
  },
  servicesText: {
    color: Colors.neutral200,
    marginTop: hp(3.5),
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Poppins.Medium,
  },
  footer: {
    paddingTop: hp(3),
    backgroundColor: Colors.neutral800,
  },
});
