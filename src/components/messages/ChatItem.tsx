import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "@utils/responsive";
import AvatarImage from "@components/ui/AvatarImage";
import { AppImages } from "@assets";
import { Colors, FontFamily, FontSizes } from "@theme";
import { useAppNavigation } from "@hooks";

const ChatItem: FC = () => {
  const { navigation } = useAppNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Chat")}
      style={styles.container}>
      <AvatarImage
        size={wp(14)}
        image={AppImages.dummyProfileAvatar}
        isOnline
      />
      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={1}>
          Harry Gardner
        </Text>
        <View style={styles.bottomRow}>
          <Text numberOfLines={1} style={styles.message}>
            Hi, I was wondering if you had a moment lorem ipsum
          </Text>
          <View style={styles.messageDotSeparator} />
          <Text style={styles.time}>2m</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1.5),
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#A8A8A8",
  },
  body: {
    marginHorizontal: wp(3),
    flex: 1,
  },
  name: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: FontSizes.size18,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
    flex: 1,
  },
  message: {
    color: Colors.neutral400,
    flex: 1,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Regular,
  },
  messageDotSeparator: {
    height: wp(1),
    width: wp(1),
    borderRadius: wp(1),
    backgroundColor: Colors.neutral400,
  },
  time: {
    color: Colors.neutral400,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Regular,
  },
});
