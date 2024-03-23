import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, FontFamily, FontSizes } from "@theme";
import { AppHeader, ButtonComponent } from "@components";
import { hp, wp } from "@utils/responsive";
import { Entypo } from "@expo/vector-icons";
import { AppImages } from "@assets";
import { useAppNavigation } from "@hooks/index";

const ClientPaymentMethods = () => {
  const { navigation } = useAppNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Payment Methods" hideAvatar />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ index }) => (
          <TouchableOpacity style={styles.paymentMethodItem}>
            <Image
              style={styles.paymentMethodItemImage}
              source={AppImages.mastercard}
            />
            <View style={styles.paymentMethodBody}>
              <View style={styles.paymentMethodTitleContainer}>
                <Text style={styles.paymentMethodTitle}>
                  ***** **** **** 4777
                </Text>
                {index === 0 && (
                  <Text style={styles.paymentMethodTitleDefault}>
                    (Default)
                  </Text>
                )}
              </View>
              <Text style={styles.paymentMethodExpire}>Expires 11/13</Text>
            </View>
            <Entypo
              name="chevron-thin-right"
              size={wp(5)}
              color={Colors.white}
            />
          </TouchableOpacity>
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={() => (
          <ButtonComponent
            text="Add Payment method"
            buttonStyle={{ width: wp(90) }}
            onPress={() => navigation.navigate("AddPaymentMethod")}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ClientPaymentMethods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  paymentMethodItem: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    borderColor: "#C3C3C3",
    borderWidth: 1,
    borderRadius: wp(2),
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
  },
  paymentMethodItemImage: {
    height: wp(10),
    width: wp(10),
    resizeMode: "contain",
  },
  paymentMethodBody: { flex: 1 },
  paymentMethodTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
  },
  paymentMethodTitle: {
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.white,
    fontSize: FontSizes.size16,
  },
  paymentMethodTitleDefault: {
    fontFamily: FontFamily.Poppins.Medium,
    color: "#666666",
    fontSize: FontSizes.size13,
  },
  paymentMethodExpire: {
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.white,
    fontSize: FontSizes.size14,
  },
  list: { marginTop: hp(3) },
  listContent: { paddingHorizontal: wp(5), rowGap: hp(2) },
});
