import React, { FC } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import OrderItem from "@components/order/ui/OrderItem";

const ProDashboardOrders: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1]}
        renderItem={() => <OrderItem />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ProDashboardOrders;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    marginTop: hp(1),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: FontSizes.size20,
    lineHeight: hp(2.5),
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
  },
  seeAllText: {
    color: Colors.white,
    lineHeight: hp(1.5),
    fontSize: FontSizes.size13,
    fontFamily: FontFamily.Poppins.Medium,
  },
  listContent: {
    rowGap: hp(1),
    marginVertical: hp(2),
  },
});
