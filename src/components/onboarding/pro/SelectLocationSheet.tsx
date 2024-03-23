import React, { forwardRef, useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { hp, wp } from "@utils/responsive";
import AppSheet from "@components/ui/AppSheet";
import { Colors, FontFamily, FontSizes } from "@theme";
import Separator from "@components/ui/Separator";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { AppImages } from "@assets";

interface ISelectLocationSheetProps {
  onSelectLocation: (data: GooglePlaceData, details: GooglePlaceDetail) => void;
}

const SelectLocationSheet = forwardRef<BottomSheet, ISelectLocationSheetProps>(
  (props, ref) => {
    const snapPoints = useMemo(() => [hp(60)], []);

    return (
      <AppSheet ref={ref} snapPoints={snapPoints}>
        <View style={styles.container}>
          <Text style={styles.title}>Select Business Address</Text>
          <Separator color={Colors.dark3} />
          <GooglePlacesAutocomplete
            renderLeftButton={() => (
              <Image source={AppImages.search} style={styles.searchIcon} />
            )}
            styles={{
              container: styles.autoCompleteContainer,
              textInput: styles.searchInput,
              description: styles.description,
              textInputContainer: styles.searchInputContainer,
              row: styles.resultRow,
            }}
            enablePoweredByContainer={false}
            textInputProps={{
              placeholderTextColor: Colors.neutral400,
              clearButtonMode: "never",
              InputComp: BottomSheetTextInput,
            }}
            placeholder="Search Address..."
            fetchDetails={true}
            onPress={(data, detail) => {
              props.onSelectLocation(data, detail);
            }}
            query={{
              key: "AIzaSyD7_xFub7aZNysOmazideo804WlJG9IeYc",
              language: "en",
            }}
            debounce={500}
          />
        </View>
      </AppSheet>
    );
  },
);

export default SelectLocationSheet;

const styles = StyleSheet.create({
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
    paddingHorizontal: wp(5),
    fontFamily: FontFamily.Urbanist.Bold,
  },
  autoCompleteContainer: {
    marginTop: hp(2),
  },
  searchInputContainer: {
    paddingHorizontal: wp(4),
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: wp(3.5),
    columnGap: wp(1),
    marginBottom: hp(0.5),
  },
  searchInput: {
    marginBottom: 0,
    backgroundColor: Colors.dark2,
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Regular,
  },
  description: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Regular,
  },
  searchIcon: {
    height: wp(4),
    width: wp(4),
  },
  resultRow: { backgroundColor: Colors.dark2 },
});
