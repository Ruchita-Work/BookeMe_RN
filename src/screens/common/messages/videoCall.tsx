import React, { FC, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { useAppNavigation } from "@hooks";
import { CallActionButton, CallingAvatar } from "@components";
import { AppImages } from "@assets/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const VideoCallingUI: FC = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top + hp(1), alignItems: "center" }}>
      <Text style={styles.callingText}>Calling...</Text>
      <Text style={styles.name}>Harry Gardner</Text>
      <CallingAvatar containerStyle={styles.callingAvatarContainer} />
    </View>
  );
};

const VideoCall: FC = () => {
  const { navigation } = useAppNavigation();
  const { bottom, top } = useSafeAreaInsets();

  const [isCalling, setIsCalling] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsCalling(false);
    }, 5000);
  }, []);

  const onPressEndCall = () => {
    navigation.goBack();
  };

  const onPressMuteCall = () => {
    setIsMuted(prev => !prev);
  };

  const onPressFlipCall = () => {};

  const onPressOffVideoCall = () => {
    setIsVideoOn(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {isCalling ? (
        <VideoCallingUI />
      ) : (
        <View style={styles.fillParent}>
          <ImageBackground
            source={{ uri: AppImages.userTypeBackground }}
            style={styles.fillParent}
          />
          <View style={[styles.previewWindow, { top: top + hp(2) }]}>
            <Image
              style={styles.fillParent}
              source={AppImages.dummyProductImage}
            />
          </View>
        </View>
      )}
      <View style={[styles.footer, { height: hp(18) + bottom }]}>
        <View style={styles.footerHandle} />
        <View style={styles.footerButtonsContainer}>
          <CallActionButton
            title="End"
            buttonStyle={styles.endButton}
            onPress={() => onPressEndCall()}>
            <MaterialCommunityIcons
              name="phone-hangup"
              size={wp(8)}
              color={Colors.white}
            />
          </CallActionButton>

          <CallActionButton
            title="Mute"
            buttonStyle={[
              styles.actionButton,
              isMuted && { backgroundColor: Colors.primary },
            ]}
            onPress={() => onPressMuteCall()}>
            <Feather name="mic-off" size={wp(6)} color={Colors.white} />
          </CallActionButton>

          <CallActionButton
            title="Flip"
            buttonStyle={styles.actionButton}
            onPress={() => onPressFlipCall()}>
            <MaterialIcons
              name="flip-camera-ios"
              size={wp(7)}
              color={Colors.white}
            />
          </CallActionButton>

          <CallActionButton
            title="Video"
            buttonStyle={[
              styles.actionButton,
              !isVideoOn && { backgroundColor: Colors.primary },
            ]}
            onPress={() => onPressOffVideoCall()}>
            <FontAwesome5
              name="video-slash"
              size={wp(5.5)}
              color={Colors.white}
            />
          </CallActionButton>
        </View>
      </View>
    </View>
  );
};

export default VideoCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    alignItems: "center",
  },
  callingText: {
    color: Colors.neutral200,
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Poppins.Regular,
    marginTop: hp(5),
  },
  name: {
    color: Colors.neutral200,
    fontSize: FontSizes.size22,
    fontFamily: FontFamily.Poppins.Medium,
    marginTop: hp(1),
  },
  footer: {
    backgroundColor: "#0E0D0EDB",
    position: "absolute",
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    paddingHorizontal: wp(6),
  },
  footerButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform.select({ ios: "6%", android: "4%" }),
  },
  endButton: {
    backgroundColor: Colors.red400,
  },
  actionButton: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  callingAvatarContainer: {
    marginTop: hp(18),
  },
  footerHandle: {
    height: hp(0.5),
    width: wp(12),
    backgroundColor: Colors.neutral600,
    borderRadius: wp(20),
    marginVertical: hp(1.5),
    alignSelf: "center",
  },
  fillParent: {
    width: "100%",
    height: "100%",
  },
  previewWindow: {
    height: hp(18),
    width: wp(28),
    position: "absolute",
    overflow: "hidden",
    borderRadius: wp(4),
    left: wp(4),
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
