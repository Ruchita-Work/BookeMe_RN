import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import AvatarImage from "@components/ui/AvatarImage";
import { AppImages } from "@assets";
import { useAppNavigation } from "@hooks";

const ChatHeader: FC = () => {
  const { navigation } = useAppNavigation();

  const handleOnPressVideoCall = () => {
    navigation.navigate("VideoCall");
  };

  const handleOnPressAudioCall = () => {
    navigation.navigate("AudioCall");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity hitSlop={wp(4)} onPress={navigation.goBack}>
        <AntDesign name="arrowleft" size={wp(7)} color={Colors.white} />
      </TouchableOpacity>
      <View style={styles.avatarTitleContainer}>
        <AvatarImage
          isOnline
          image={AppImages.dummyProfileAvatar}
          onlineIndicatorScale={1.2}
        />
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.name}>
            Harry Gardner
          </Text>
          <Text style={styles.statusText} numberOfLines={1}>
            Active now
          </Text>
        </View>
      </View>
      <View style={styles.rightContentContainer}>
        <TouchableOpacity onPress={handleOnPressVideoCall}>
          <Image source={AppImages.video} style={styles.videoIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOnPressAudioCall}>
          <Image source={AppImages.call} style={styles.callIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
    columnGap: wp(4),
  },
  avatarTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    columnGap: wp(3),
  },
  titleContainer: {
    flex: 1,
    rowGap: hp(0.3),
  },
  name: {
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
  },
  statusText: {
    color: Colors.neutral400,
    fontSize: FontSizes.size13,
    fontFamily: FontFamily.Poppins.Regular,
  },
  rightContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(6),
    marginRight: wp(2),
  },
  videoIcon: {
    height: wp(6),
    width: wp(6),
    resizeMode: "contain",
  },
  callIcon: {
    height: wp(5),
    width: wp(5),
    resizeMode: "contain",
  },
});
