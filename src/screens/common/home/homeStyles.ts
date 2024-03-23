import { StyleSheet } from "react-native";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily, FontSizes } from "@theme";

export const homeStyles = StyleSheet.create({
  infoContainer: {
    width: "100%",
    paddingHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: hp(12),
  },
  CTAContainer: {
    gap: hp(1),
    justifyContent: "flex-start",
    flex: 1,
  },
  textTypo: {
    fontFamily: FontFamily.Urbanist.SemiBold,
  },
  rectangleSpaceBlock: {
    marginTop: hp(1.3),
    borderRadius: wp(25),
    alignSelf: "stretch",
  },
  forYou: {
    lineHeight: hp(2.5),
    color: "#eee",
    textAlign: "center",
    fontSize: FontSizes.size18,
    letterSpacing: 0,
  },
  rectangle: {
    height: hp(0.5),
    backgroundColor: Colors.primary,
  },
  rectangle1: {
    backgroundColor: "#eee",
    height: 2,
  },
  topTabs: {
    flexDirection: "row",
    justifyContent: "center",
  },
  autoLayoutHorizontal: {
    width: "100%",
    gap: wp(2.5),
    flexDirection: "row",
  },
  autoLayoutVertical: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  nameFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  typeeditAvatarComponentav: {
    width: wp(15),
    height: wp(15),
  },
  name: {
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Bold,
    lineHeight: 22,
    fontSize: FontSizes.size18,
  },
  hairStylist: {
    fontFamily: FontFamily.Urbanist.Medium,
  },
  information: {
    fontSize: FontSizes.size16,
    letterSpacing: 0,
    lineHeight: 20,
    color: "#e0e0e0",
    marginTop: 4,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  searchIcon: {
    position: "absolute",
    right: wp(6),
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  maintabsContainer: {
    flexDirection: "row",
    columnGap: wp(4),
    marginRight: wp(4),
  },
  userActionsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: hp(1.5),
  },
  userActionItem: {
    alignItems: "center",
    rowGap: hp(0.5),
  },
  bookServiceButton: {
    alignSelf: "flex-start",
    paddingVertical: hp(1.4),
    paddingHorizontal: wp(5),
    marginBottom: hp(1),
  },
  bookServiceButtonText: {
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Urbanist.Bold,
  },
  countText: {
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Medium,
  },
});
