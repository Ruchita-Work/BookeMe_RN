import { StyleSheet } from "react-native";
import { Colors, FontSizes, FontFamily } from "@theme";
import { hp, wp } from "@utils/responsive";

const shareSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark2,
    paddingHorizontal: wp(5),
  },
  title: {
    color: Colors.white,
    fontSize: FontSizes.size24,
    alignSelf: "center",
    marginVertical: hp(1),
    fontFamily: FontFamily.Urbanist.Bold,
  },
  avatarItemImage: {
    height: wp(15),
    width: wp(15),
    borderRadius: wp(8),
  },
  avatarItemTitle: {
    fontSize: FontSizes.size13,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  avatarsRow: {
    paddingHorizontal: wp(4),
    marginTop: hp(1.5),
  },
  avatarsColumn: {
    marginBottom: hp(2),
    columnGap: wp(6.5),
  },
  avatarItemContainer: {
    rowGap: hp(0.5),
    width: wp(15),
  },
});

export default shareSheetStyles;
