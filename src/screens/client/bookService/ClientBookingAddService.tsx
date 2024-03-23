import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { useAppNavigation } from "@hooks";
import {
  BookServiceAvailabilitySection,
  BookServiceCalendar,
  BookServiceFooter,
  ButtonWithIcon,
  ServiceDetailItem,
} from "@components";

const ClientBookingAddService = () => {
  const selectedDate = "2024-01-16";
  const { navigation } = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={navigation.goBack}>
        <AntDesign color={Colors.neutral200} size={wp(6)} name="arrowleft" />
      </TouchableOpacity>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <BookServiceCalendar selectedDate={selectedDate} />
        <View
          style={[styles.content, { paddingBottom: insets.bottom + hp(1) }]}>
          <BookServiceAvailabilitySection />
          <ServiceDetailItem />
          <ButtonWithIcon
            text="Add Product or Service"
            icon={<AntDesign name="plus" color={Colors.white} size={wp(4)} />}
            style={styles.addProductServiceButton}
            textStyle={styles.addProductServiceButtonText}
            onPress={() => navigation.navigate("ClientBookingShopping")}
          />
          <BookServiceFooter
            onPressFooterButton={() =>
              navigation.navigate("ClientBookingConfirmation")
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClientBookingAddService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    paddingTop: hp(1.5),
  },
  back: {
    paddingHorizontal: wp(5),
  },
  headerTitle: {
    color: Colors.neutral200,
    fontSize: FontSizes.size20,
  },
  content: {
    backgroundColor: Colors.neutral800,
    flex: 1,
    marginTop: hp(1),
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  addProductServiceButton: {
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(3),
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.primary,
    marginVertical: hp(2),
  },
  addProductServiceButtonText: {
    fontSize: FontSizes.size16,
    color: Colors.primary,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
});
