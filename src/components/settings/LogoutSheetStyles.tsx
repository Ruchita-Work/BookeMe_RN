import { StyleSheet } from "react-native";
import { Colors, FontSizes, FontFamily } from "@theme";
import { hp, wp } from "@utils/responsive";

const logoutSheetStyles = StyleSheet.create({
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
  subtitle: {
    color: Colors.white,
    fontSize: FontSizes.size16,
    alignSelf: "center",
    marginVertical: hp(2),
    fontFamily: FontFamily.Urbanist.Bold,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    columnGap: wp(7),
  },
});

export default logoutSheetStyles;
