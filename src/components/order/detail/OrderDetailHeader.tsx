import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { useAppNavigation } from "@hooks";

const OrderDetailHeader: FC = () => {
  const { navigation } = useAppNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack}>
        <AntDesign name="arrowleft" color={Colors.white} size={wp(6)} />
      </TouchableOpacity>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Orders Details</Text>
        <Text style={styles.headerOrderStatus}>confirmed</Text>
      </View>
    </View>
  );
};

export default OrderDetailHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(2),
    marginTop: hp(1),
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitleContainer: {
    paddingHorizontal: wp(4),
  },
  headerTitle: {
    color: Colors.neutral200,
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Poppins.Medium,
  },
  headerOrderStatus: {
    color: Colors.orange400,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
