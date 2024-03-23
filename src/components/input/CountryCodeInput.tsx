import React, { Dispatch, FC, SetStateAction, memo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import CustomInput, { ICustomInputProps } from "@components/input/CustomInput";
import { Entypo } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { CountryItem, CountryPicker } from "react-native-country-codes-picker";
import { FontFamily, FontSizes, Colors } from "@theme";

type TCountryItem = Omit<CountryItem, "name">;

interface ICountryCodeInput extends ICustomInputProps {
  setSelectedCountry: Dispatch<SetStateAction<TCountryItem>>;
  selectedCountry: TCountryItem;
}

const CountryCodeInput: FC<ICountryCodeInput> = ({
  selectedCountry,
  setSelectedCountry,
  ...inputProps
}) => {
  const [showCountryCodePicker, setShowCountryCodePicker] = useState(false);

  const renderCountryCodeInputContent = () => (
    <TouchableOpacity
      style={styles.countryCodeInputContent}
      onPress={() => setShowCountryCodePicker(true)}>
      <Text>{selectedCountry.flag}</Text>
      <Text style={styles.countryCodeInputText}>
        {selectedCountry.dial_code}
      </Text>
      <Entypo name="chevron-down" color={Colors.white} size={wp(4)} />
    </TouchableOpacity>
  );

  const handleCountryPick = (item: CountryItem) => {
    setSelectedCountry(item);
    setShowCountryCodePicker(false);
  };

  return (
    <>
      <CustomInput
        label={"Phone Number"}
        renderLeftContent={renderCountryCodeInputContent}
        placeholder="Enter your phone number"
        keyboardType={"number-pad"}
        {...inputProps}
      />
      <CountryPicker
        show={showCountryCodePicker}
        lang="en"
        pickerButtonOnPress={handleCountryPick}
        onBackdropPress={() => setShowCountryCodePicker(false)}
        style={{ itemsList: { height: hp(60) } }}
      />
    </>
  );
};

export default memo(CountryCodeInput);

const styles = StyleSheet.create({
  countryCodeInputContent: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: wp(2),
    top: -2,
  },
  countryCodeInputText: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
    paddingHorizontal: wp(1),
    top: -1,
    fontSize: FontSizes.size16,
  },
});
