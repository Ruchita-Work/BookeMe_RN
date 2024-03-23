import React, { FC, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import { Easing } from "react-native-reanimated";
import { MotiView } from "moti";
import { AppImages } from "@assets";
import { Colors } from "@theme";
import { wp } from "@utils/responsive";

interface CallingAvatarProps {
  containerStyle?: ViewStyle;
}

const CallingAvatar: FC<CallingAvatarProps> = props => {
  const { containerStyle } = props;
  return (
    <View style={[styles.avatar, containerStyle]}>
      {[1, 2, 3, 4].map((_, index) => (
        <MotiView
          from={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 3.4 }}
          transition={{
            type: "timing",
            duration: 2000,
            easing: Easing.out(Easing.ease),
            loop: true,
            delay: index * 400,
            repeatReverse: false,
          }}
          key={index}
          style={[StyleSheet.absoluteFillObject, styles.animatedWaveCircle]}
        />
      ))}
      <FastImage
        source={AppImages.dummyProfileImage}
        defaultSource={AppImages.dummyProfileImage}
        style={styles.image}
      />
    </View>
  );
};

export default memo(CallingAvatar);

const styles = StyleSheet.create({
  avatar: {
    height: wp(30),
    width: wp(30),
    borderRadius: wp(16),
    borderWidth: wp(0.8),
    borderColor: Colors.white,
  },
  animatedWaveCircle: {
    height: wp(30),
    width: wp(30),
    borderRadius: wp(16),
    backgroundColor: Colors.primary,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
