import React, { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

interface IProDashboardOverViewItemProps {
  data: {
    title: string;
    icon: ImageSourcePropType;
    count: string;
    percentage?: string;
  };
}

const ProDashboardOverViewItem: FC<IProDashboardOverViewItemProps> = ({
  data,
}) => {
  const isProfit = data.percentage?.startsWith("+");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.infoRow}>
        <Image resizeMode="contain" style={styles.icon} source={data.icon} />
        <Text style={styles.count}>{data.count}</Text>
        {!!data.percentage && (
          <Text
            style={[
              styles.percentage,
              { color: isProfit ? "#7FC09C" : "#F7555B" },
            ]}>
            {data.percentage}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ProDashboardOverViewItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark2,
    width: wp(42),
    borderRadius: wp(4),
    paddingHorizontal: wp(4),
    height: hp(9),
    justifyContent: "center",
    rowGap: hp(1.5),
  },
  title: {
    color: Colors.white,
    lineHeight: hp(1.8),
    fontFamily: FontFamily.Urbanist.Regular,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: wp(5),
    width: wp(5),
  },
  count: {
    marginLeft: wp(2),
    color: Colors.white,
    lineHeight: hp(2.5),
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Urbanist.Bold,
  },
  percentage: {
    marginLeft: "auto",
    fontSize: FontSizes.size12,
    lineHeight: hp(1.5),
    fontFamily: FontFamily.Urbanist.Medium,
  },
});
