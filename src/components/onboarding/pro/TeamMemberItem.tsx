import React, { FC } from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppImages } from "@assets";
import AvatarImage from "@components/ui/AvatarImage";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { FontAwesome } from "@expo/vector-icons";

interface ITeamMemberItemProps {
  selected: boolean;
  onPress: () => void;
  image?: ImageSourcePropType;
  title: string;
  subtitle?: string;
}

const TeamMemberItem: FC<ITeamMemberItemProps> = props => {
  const { onPress, selected, title, image, subtitle } = props;

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.container, selected && styles.selectedBorder]}>
      <AvatarImage image={image} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.position}>
          {subtitle}
        </Text>
      </View>
      {!!selected && (
        <View style={styles.selectCheckContainer}>
          <FontAwesome name="check" color={Colors.white} size={wp(4)} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TeamMemberItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background2,
    padding: wp(4),
    borderRadius: wp(4),
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectedBorder: {
    borderWidth: 1,
    borderColor: "#C393FF",
    backgroundColor: Colors.primaryBackground,
  },
  content: {
    flex: 1,
    paddingRight: wp(4),
    rowGap: hp(0.5),
  },
  name: {
    color: Colors.white,
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size16,
  },
  position: {
    color: Colors.deactivate,
    fontFamily: FontFamily.Inter.Medium,
    fontSize: FontSizes.size13,
  },
  selectCheckContainer: {
    height: wp(6),
    width: wp(6),
    borderRadius: wp(6),
    backgroundColor: "#6EA95C",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
});
