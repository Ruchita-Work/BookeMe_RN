import { StyleSheet } from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

const styles = StyleSheet.create({
  sheetContentContainer: {
    backgroundColor: Colors.dark2,
    flex: 1,
    paddingRight: wp(4),
    paddingLeft: wp(6),
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeIcon: {
    height: wp(6),
    width: wp(6),
  },
  title: {
    color: "#D9D9D9",
    fontSize: FontSizes.size24,
    lineHeight: hp(3),
    fontFamily: FontFamily.Poppins.Medium,
  },
  sectionTitle: {
    marginVertical: hp(2),
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
    lineHeight: hp(2),
    fontFamily: FontFamily.Poppins.Medium,
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(1.5),
  },
  filterItemTitle: {
    color: Colors.neutral200,
    lineHeight: hp(2.5),
    fontFamily: FontFamily.Poppins.Regular,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    alignSelf: "center",
    columnGap: wp(4),
  },
  clearButton: {
    backgroundColor: "transparent",
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  clearButtontext: {
    color: "#CFCFD2CC",
  },
});

export default styles;
