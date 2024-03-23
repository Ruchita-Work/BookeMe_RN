import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AppHeader,
  ButtonComponent,
  Checkbox,
  CustomInput,
  KeyboardScrollView,
} from "@components";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { numericKeyboardType } from "@utils/form";

const AddPaymentMethod: FC = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Add Card" hideAvatar />
      <KeyboardScrollView contentContainerStyle={styles.keyboardContent}>
        <View style={{ flex: 1 }}>
          <CustomInput
            inputContainerStyle={styles.inputContainer}
            labelStyle={styles.inputLabel}
            label="Card number"
            placeholder="Enter card number"
            maxLength={20}
          />
          <View style={styles.inputsRow}>
            <CustomInput
              containerStyle={{ flex: 1 }}
              inputContainerStyle={styles.inputContainer}
              labelStyle={styles.inputLabel}
              label="Exp Date"
              placeholder="Select expiry date"
              renderAsTouchable
              onPress={showDatePicker}
            />
            <CustomInput
              containerStyle={{ flex: 1 }}
              inputContainerStyle={styles.inputContainer}
              labelStyle={styles.inputLabel}
              label="CVV"
              placeholder="Enter CVV"
              maxLength={3}
              keyboardType={numericKeyboardType}
            />
          </View>
          <View style={styles.defaultRow}>
            <Checkbox />
            <Text style={styles.defaultText}>
              Set as your default payment method
            </Text>
          </View>
        </View>
        <ButtonComponent
          text="Add Card"
          buttonStyle={{ width: "100%", borderRadius: wp(2) }}
        />
      </KeyboardScrollView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </SafeAreaView>
  );
};

export default AddPaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  keyboardContent: {
    paddingHorizontal: wp(5),
    marginTop: hp(4),
    rowGap: hp(1),
  },
  inputLabel: {
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Urbanist.SemiBold,
    color: Colors.white,
  },
  inputContainer: {
    borderBottomColor: "#9C9C9C",
    paddingTop: hp(0.3),
  },
  inputsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: wp(8),
  },
  defaultRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4),
  },
  defaultText: {
    fontSize: FontSizes.size15,
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
