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
import { Colors, FontFamily, FontSizes } from "@theme";
import { AppImages } from "@assets";
import { AntDesign } from "@expo/vector-icons";

interface IBookServiceAlbumItemProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const BookServiceAlbumItem: FC<IBookServiceAlbumItemProps> = ({
  containerStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <Image style={styles.image} source={AppImages.augustCreative} />
      <View style={styles.content}>
        <Text style={styles.title}>August Creative</Text>
        <View style={styles.buttonsRow}>
          <View style={styles.buttonWithIcon}>
            <AntDesign name="heart" size={wp(4)} color={Colors.neutral200} />
            <Text style={styles.buttonIconTitle}>124</Text>
          </View>
          <View style={styles.buttonWithIcon}>
            <AntDesign name="heart" size={wp(4)} color={Colors.neutral200} />
            <Text style={styles.buttonIconTitle}>24</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookServiceAlbumItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: wp(6),
    overflow: "hidden",
    backgroundColor: Colors.neutral700,
  },
  image: { height: hp(16), width: "100%" },
  content: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.6),
  },
  title: {
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(6),
    marginTop: hp(1.5),
  },
  buttonWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(1.5),
  },
  buttonIconTitle: {
    fontSize: FontSizes.size15,
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Regular,
  },
});
