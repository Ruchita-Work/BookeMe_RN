import { StyleSheet } from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

export const createBusinessStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.dark1,
    borderWidth: 1,
    borderColor: Colors.white + 80,
    borderRadius: wp(6),
    marginTop: hp(3),
    borderBottomWidth: 0,
    paddingHorizontal: wp(4),
    rowGap: hp(0.5),
  },
  imageAvatar: {
    borderWidth: 0,
    marginTop: hp(2),
    marginBottom: hp(1.4),
  },
  avatarTitle: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.SemiBold,
    fontSize: FontSizes.size24,
  },
  avatarSubTitle: {
    color: Colors.deactivate,
    fontFamily: FontFamily.Inter.Medium,
    fontSize: FontSizes.size13,
    marginTop: hp(1),
  },
  inputLabel: {
    color: Colors.deactivate,
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size12,
    textTransform: "uppercase",
  },
  seatsCountRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(2),
    paddingHorizontal: wp(4),
  },
  seatsCountText: {
    fontFamily: FontFamily.Inter.SemiBold,
    color: Colors.white,
    fontSize: FontSizes.size16,
  },
  businessSeatIcon: { width: wp(4), height: wp(4) },
  input: {
    marginVertical: hp(1),
  },
  inputMainContent: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: Colors.background2,
    borderBottomWidth: 1,
    columnGap: wp(4),
  },
  inputMainInput: {
    flex: 1,
    paddingVertical: hp(1.5),
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
  },
  uploadDocRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
    marginTop: hp(1.5),
  },
  uploadDocButton: {
    borderWidth: 1,
    borderColor: Colors.deactivate,
    alignSelf: "flex-start",
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(10),
  },
  uploadDocText: {
    color: Colors.deactivate,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Inter.SemiBold,
  },
  inputLocation: {
    height: wp(6),
    width: wp(6),
    marginRight: wp(3),
  },
  invitePeopleRow: {
    marginVertical: hp(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  invitePeopleValue: {
    color: Colors.blue2,
    fontFamily: FontFamily.Inter.SemiBold,
    fontSize: FontSizes.size14,
  },
  nextButtonContainer: {
    marginTop: hp(3),
    alignItems: "flex-end",
  },
  nextButton: {
    paddingVertical: hp(2),
  },
  nextButtonText: {
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size16,
  },
  formInputContainer: {
    borderBottomColor: Colors.background2,
    paddingTop: hp(0.6),
  },
  error: {
    color: "#cc0000",
    marginTop: hp(0.5),
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.Medium,
    marginBottom: hp(1),
  },
  invitedPeopleSection: { marginTop: hp(1), paddingHorizontal: wp(2) },
});
