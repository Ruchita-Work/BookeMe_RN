import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { useAppNavigation } from "@hooks";
import { ClientBookingShoppingTabs } from "@components";

const ClientBookingShopping = () => {
  const { navigation } = useAppNavigation();

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign color={Colors.neutral200} size={wp(6)} name="arrowleft" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping</Text>
      </View>
      <ClientBookingShoppingTabs />
    </SafeAreaView>
  );
};

export default ClientBookingShopping;

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
});
