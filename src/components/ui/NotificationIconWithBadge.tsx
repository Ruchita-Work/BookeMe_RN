import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import { useAppNavigation } from "@hooks";

type INotificationIconWithBadgeProps = {
  count: string;
};

const NotificationIconWithBadge: FC<INotificationIconWithBadgeProps> = ({
  count,
}) => {
  const { navigation } = useAppNavigation();
  return (
    <TouchableOpacity
      style={styles.notificationIconContainer}
      onPress={() => navigation.navigate("Notification")}>
      <View style={styles.notificationCountBadge}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.notificationBadgetext}>
          {count}
        </Text>
      </View>
      <FontAwesome5 name="bell" size={wp(5)} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default NotificationIconWithBadge;

const styles = StyleSheet.create({
  notificationIconContainer: {
    height: wp(11),
    width: wp(11),
    borderRadius: wp(6),
    borderWidth: 1,
    borderColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationCountBadge: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "red",
    borderRadius: wp(1.5),
    width: wp(5),
    height: hp(2),
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: -wp(1),
  },
  notificationBadgetext: {
    color: Colors.white,
    fontSize: FontSizes.size12,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
