import React, { FC } from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { hp, wp } from "@utils/responsive";
import { Feather } from "@expo/vector-icons";
import { FontFamily, FontSizes, Colors } from "@theme";
import { AppImages } from "@assets";

interface IBookServiceFooterProps {
  containerStyle?: StyleProp<ViewStyle>;
  footerButtonTitle?: string;
  hideArrow?: boolean;
  onPressFooterButton: () => void;
}

const BookServiceFooter: FC<IBookServiceFooterProps> = ({
  containerStyle,
  footerButtonTitle = "Checkout",
  hideArrow = false,
  onPressFooterButton,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity style={styles.infoItem}>
        <View style={styles.infoItemIconContainer}>
          <Feather name="calendar" size={wp(5.5)} color={Colors.white} />
          <View style={styles.infoItemBadge}>
            <Text style={styles.infoItemBadgeText}>1</Text>
          </View>
        </View>
        <Text numberOfLines={1} style={styles.infoItemText}>
          $50.00
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.infoItem}>
        <View style={styles.infoItemIconContainer}>
          <Image source={AppImages.shoppingBag} style={styles.infoItemIcon} />
          <View style={styles.infoItemBadge}>
            <Text style={styles.infoItemBadgeText}>1</Text>
          </View>
        </View>
        <Text numberOfLines={1} style={styles.infoItemText}>
          $50.00
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={onPressFooterButton}>
        <Text style={styles.actionButtonText}>{footerButtonTitle}</Text>
        {!hideArrow && (
          <Feather name="arrow-right" color={Colors.white} size={wp(6)} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BookServiceFooter;

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(6),
  },
  infoItem: {
    alignItems: "center",
    rowGap: hp(0.5),
  },
  infoItemIconContainer: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(6),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  infoItemIcon: {
    height: wp(5),
    width: wp(5),
    resizeMode: "contain",
  },
  infoItemText: {
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.neutral200,
    fontSize: FontSizes.size14,
  },
  infoItemBadge: {
    height: wp(4),
    width: wp(4),
    borderRadius: wp(3),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.red400,
    position: "absolute",
    top: 0,
    right: -wp(0.8),
  },
  infoItemBadgeText: {
    fontSize: FontSizes.size11,
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
  },
  actionButton: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    columnGap: wp(3),
    height: hp(6.5),
    flex: 1,
    borderRadius: wp(15),
    flexDirection: "row",
  },
  actionButtonText: {
    fontSize: FontSizes.size22,
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
