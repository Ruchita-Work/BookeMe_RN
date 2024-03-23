import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "@components/button/Button";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";

const BookServiceAvailabilitySection: FC = () => {
  return (
    <>
      <Text style={styles.contentTitle}>Availability</Text>
      <View style={styles.availabilityRow}>
        <ButtonComponent
          text="14:30"
          textStyle={styles.availabilityItemText}
          buttonStyle={styles.availabilityItem}
        />
        <ButtonComponent
          text="15:00"
          textStyle={[
            styles.availabilityItemText,
            styles.selectedAvailabilityItemText,
          ]}
          buttonStyle={[
            styles.availabilityItem,
            styles.selectedAvailabilityItem,
          ]}
        />
        <ButtonComponent
          text="16:00"
          textStyle={[
            styles.availabilityItemText,
            styles.selectedAvailabilityItemText,
          ]}
          buttonStyle={[
            styles.availabilityItem,
            styles.selectedAvailabilityItem,
          ]}
        />
      </View>
    </>
  );
};

export default BookServiceAvailabilitySection;

const styles = StyleSheet.create({
  contentTitle: {
    color: Colors.neutral200,
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Poppins.Medium,
  },
  availabilityRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2.5),
    marginVertical: hp(1),
  },
  availabilityItem: {
    paddingVertical: hp(1.2),
    width: wp(23),
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  availabilityItemText: {
    fontSize: FontSizes.size15,
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.white,
  },
  selectedAvailabilityItem: {
    backgroundColor: "transparent",
  },
  selectedAvailabilityItemText: {
    color: Colors.primary,
  },
});
