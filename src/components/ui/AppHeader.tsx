import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import BackBox from "@components/ui/BackBox";
import AvatarImage from "@components/ui/AvatarImage";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { FontFamily, FontSizes, Colors } from "@theme";
import { Source } from "react-native-fast-image";

interface IAppHeaderProps {
  title: string;
  hideAvatar?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  image?: number | Source;
}

const AppHeader: FC<IAppHeaderProps> = ({
  hideAvatar = false,
  title = "",
  containerStyle,
  titleStyle,
  image,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <BackBox style={{ alignSelf: "center" }} />
      <Text
        numberOfLines={1}
        style={[styles.title, hideAvatar && styles.offsetTitle, titleStyle]}>
        {title}
      </Text>
      {!hideAvatar && (
        <AvatarImage
          size={wp(12)}
          image={image || AppImages.dummyProfileAvatar}
        />
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(1),
    paddingRight: wp(6),
  },
  title: {
    fontFamily: FontFamily.Poppins.Bold,
    color: Colors.white,
    fontSize: FontSizes.size18,
    flex: 1,
    marginLeft: wp(4),
    textAlign: "center",
  },
  offsetTitle: {
    marginRight: wp(12),
  },
});
