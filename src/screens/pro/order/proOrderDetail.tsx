import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "@utils/responsive";
import {
  ButtonComponent,
  OrderDetailHeader,
  OrderDetailProductSection,
  OrderDetailServiceSection,
  OrderDetailSummary,
} from "@components";
import { FontSizes, Colors } from "@theme";

const ProOrderDetail = () => {
  const handleCancelOrder = () => {};

  const handleShipOrder = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <OrderDetailHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <OrderDetailServiceSection />
        <OrderDetailProductSection />
        <OrderDetailSummary />
        <View style={styles.footerButtons}>
          <ButtonComponent
            textStyle={styles.cancelButtonText}
            buttonStyle={styles.cancelButton}
            text="Cancel"
            variant="bordered"
            onPress={handleCancelOrder}
          />
          <ButtonComponent
            buttonStyle={styles.shipOrderButton}
            textStyle={styles.shipOrderButtonText}
            text="Ship Order"
            onPress={handleShipOrder}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProOrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    paddingHorizontal: wp(2),
  },
  footerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: wp(5),
    marginTop: hp(4),
  },
  cancelButtonText: {
    color: Colors.primary,
  },
  cancelButton: {
    paddingVertical: hp(1.5),
    borderColor: Colors.primary,
  },
  shipOrderButton: {
    paddingVertical: hp(1.5),
  },
  shipOrderButtonText: {
    fontSize: FontSizes.size16,
  },
});
