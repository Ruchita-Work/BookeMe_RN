import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import { AppImages } from "@assets";
import ToggleSwitch from "toggle-switch-react-native";

type IOptionItemProps = {
  title: string;
  image: number;
  onPress?: () => void;
  isSwitch?: boolean;
  switchValue?: boolean;
};

const OptionItem: FC<IOptionItemProps> = props => {
  const { image, title, onPress, isSwitch, switchValue } = props;
  return (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={onPress}
      disabled={isSwitch}>
      <Image source={image} style={styles.optionItemIcon} />
      <Text style={styles.optionItemTitle}>{title}</Text>
      {isSwitch ? (
        <ToggleSwitch
          onToggle={() => {}}
          isOn={false}
          offColor={Colors.dark3}
          onColor={Colors.primaryBlue}
        />
      ) : (
        <AntDesign name="right" size={wp(4)} color={Colors.white} />
      )}
    </TouchableOpacity>
  );
};

const PostDetailsOptions: FC = () => {
  const optionsData: IOptionItemProps[] = [
    { title: "Tag Influencers", image: AppImages.user },
    { title: "Location", image: AppImages.location },
    { title: "Visible to Everyone", image: AppImages.lock },
    { title: "Allow Comments", image: AppImages.chatBubble, isSwitch: true },
    { title: "Allow Reviews", image: AppImages.multiUsers, isSwitch: true },
    { title: "Back Link", image: AppImages.note, isSwitch: true },
    { title: "More Option", image: AppImages.moreCircle },
  ];

  return (
    <View style={styles.container}>
      {optionsData.map((item, index) => {
        return <OptionItem key={`${item.title}-${index}`} {...item} />;
      })}
      <Text style={styles.shareToText}>Automatically share to:</Text>
      <View style={styles.shareItemsRow}>
        <TouchableOpacity style={styles.shareItem}>
          <FontAwesome
            name="whatsapp"
            size={wp(6)}
            color={Colors.primaryBlue}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareItem}>
          <FontAwesome
            name="instagram"
            size={wp(6)}
            color={Colors.primaryBlue}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareItem}>
          <FontAwesome
            name="facebook"
            size={wp(6)}
            color={Colors.primaryBlue}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareItem}>
          <FontAwesome name="twitter" size={wp(6)} color={Colors.primaryBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostDetailsOptions;

const styles = StyleSheet.create({
  container: {
    rowGap: hp(2),
  },
  optionItemIcon: {
    height: wp(7),
    width: wp(7),
    resizeMode: "contain",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4),
  },
  optionItemTitle: {
    flex: 1,
    color: Colors.white,
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Urbanist.SemiBold,
  },
  shareToText: {
    color: Colors.white,
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Urbanist.Bold,
  },
  shareItemsRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
  },
  shareItem: {
    backgroundColor: Colors.primaryBlue + 14,
    height: wp(12),
    width: wp(12),
    borderRadius: wp(7),
    justifyContent: "center",
    alignItems: "center",
  },
});
