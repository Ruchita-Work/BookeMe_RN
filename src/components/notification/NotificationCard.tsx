import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { Entypo, Octicons } from "@expo/vector-icons";
import AvatarImage from "@components/ui/AvatarImage";
import { AppImages } from "@assets";

const NotificationCard = () => {
  const cardExpandedHeight = hp(44);
  const cardCollapsedHeight = hp(10);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardExpandCollapse = () => {
    setIsExpanded(prev => !prev);
  };

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      height: isExpanded
        ? withTiming(cardExpandedHeight, { duration: 200 })
        : withTiming(cardCollapsedHeight, { duration: 200 }),
    };
  }, [isExpanded]);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: isExpanded
        ? [{ scaleY: withTiming(1, { duration: 200 }) }]
        : [{ scaleY: 0 }],
      display: isExpanded ? "flex" : "none",
    };
  }, [isExpanded]);

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <View style={styles.rowCenter}>
        <Text numberOfLines={1} style={styles.headerTitle}>
          Rent Payment Due
        </Text>
        <TouchableOpacity onPress={handleCardExpandCollapse}>
          <Entypo
            name={isExpanded ? "chevron-thin-up" : "chevron-thin-down"}
            size={wp(5)}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
      {isExpanded && (
        <>
          <Animated.Image
            source={{ uri: AppImages.userTypeBackground }}
            style={[styles.image, imageAnimatedStyle]}
          />
          <Text numberOfLines={1} style={styles.name}>
            Savanna
          </Text>
        </>
      )}
      <View style={[styles.rowCenter, styles.footer]}>
        <Text style={styles.byText}>by</Text>
        <AvatarImage size={wp(6)} image={AppImages.dummyProfileAvatar} />
        <Text style={styles.footerName}>Arthur Brady</Text>
        <Text style={styles.footerTimeStamp}>14:30 - 15:30(1h)</Text>
      </View>
      {isExpanded && (
        <>
          <View style={[styles.rowCenter, styles.ratingContainer]}>
            <View style={styles.ratingRowContainer}>
              <Octicons
                color={Colors.orange500}
                size={wp(4)}
                name="star-fill"
              />
              <Text style={styles.ratingAverageReview}>4.8</Text>
              <Text style={styles.ratingReviewCount}>(1.2K reviews)</Text>
            </View>
            <Text style={styles.ratingReviewCount}>0.5 mil</Text>
          </View>
          <View style={styles.footerActionsContainer}>
            <TouchableOpacity hitSlop={wp(4)} onPress={() => {}}>
              <Text style={styles.buttonTitle}>Cancel</Text>
            </TouchableOpacity>
            <View style={styles.verticalSeparator} />
            <TouchableOpacity hitSlop={wp(4)} onPress={() => {}}>
              <Text style={styles.buttonTitle}>Reschedule</Text>
            </TouchableOpacity>
            <View style={styles.verticalSeparator} />
            <TouchableOpacity hitSlop={wp(4)} onPress={() => {}}>
              <Text style={styles.buttonTitle}>Navigate</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Animated.View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral800,
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(4),
  },
  headerTitle: {
    fontSize: FontSizes.size17,
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
    flex: 1,
  },
  footer: {
    columnGap: wp(2),
    marginTop: hp(1.5),
  },
  byText: {
    color: Colors.neutral400,
    fontSize: FontSizes.size15,
    fontFamily: FontFamily.Poppins.Regular,
  },
  footerName: {
    color: Colors.neutral200,
    fontSize: FontSizes.size15,
    fontFamily: FontFamily.Poppins.Regular,
  },
  footerTimeStamp: {
    color: Colors.neutral200,
    fontSize: FontSizes.size13,
    fontFamily: FontFamily.Poppins.Regular,
  },
  image: {
    height: hp(18),
    width: "100%",
    marginTop: hp(2),
  },
  name: {
    paddingHorizontal: wp(4),
    marginTop: hp(1.5),
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
  },
  ratingRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(1.5),
  },
  ratingAverageReview: {
    fontSize: FontSizes.size14,
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  ratingReviewCount: {
    fontSize: FontSizes.size14,
    color: Colors.neutral400,
    fontFamily: FontFamily.Poppins.Regular,
  },
  ratingContainer: {
    marginVertical: hp(2),
    justifyContent: "space-between",
  },
  footerActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: wp(6),
    marginTop: hp(1),
  },
  verticalSeparator: {
    height: hp(2),
    width: 0.7,
    backgroundColor: Colors.white,
  },
  buttonTitle: {
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Urbanist.SemiBold,
    color: Colors.white,
  },
});
