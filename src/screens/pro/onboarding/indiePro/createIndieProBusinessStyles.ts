import { StyleSheet } from "react-native";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";

export const createIndieProBusinessStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    paddingTop: hp(1),
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
  avatarSection: {
    alignItems: "center",
  },
  image: {
    width: wp(28),
    height: wp(28),
    alignSelf: "center",
    borderRadius: wp(18),
    marginTop: hp(1),
  },
  avatarTitle: {
    textAlign: "center",
    color: Colors.white,
    fontFamily: FontFamily.Poppins.SemiBold,
    fontSize: FontSizes.size24,
  },
  avatarSubTitle: {
    textAlign: "center",
    color: Colors.deactivate,
    fontFamily: FontFamily.Inter.Medium,
    fontSize: FontSizes.size12,
    marginTop: hp(0.5),
    marginBottom: hp(2),
  },
  form: {
    paddingHorizontal: wp(4),
    marginBottom: hp(2),
    rowGap: hp(1),
  },
  formInputContainer: {
    borderBottomColor: Colors.background2,
    paddingVertical: hp(0.6),
  },
  formInputLabel: {
    color: Colors.deactivate,
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size13,
    textTransform: "uppercase",
  },
  formInput: {
    fontFamily: FontFamily.Inter.SemiBold,
    fontSize: FontSizes.size16,
  },
  inputLocation: {
    height: wp(6),
    width: wp(6),
    marginHorizontal: wp(2),
  },
  uploadDocButton: {
    borderWidth: 1,
    borderColor: Colors.deactivate,
    alignSelf: "flex-start",
    marginTop: hp(0.5),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(10),
  },
  uploadDocText: {
    color: Colors.deactivate,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Inter.SemiBold,
  },
  nextButtonContainer: { alignSelf: "flex-end" },
  nextButton: { marginTop: 0, paddingVertical: hp(1.5) },
  nextButtonText: { fontFamily: FontFamily.Inter.Bold },
  error: {
    color: "#cc0000",
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.Medium,
    alignSelf: "center",
    marginBottom: hp(0.5),
  },
  uploadDocRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
    marginTop: hp(1.5),
  },
});
