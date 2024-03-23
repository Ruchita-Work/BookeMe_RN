import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

interface IUpcomingOrderActionsProps {
  onPressCancel?: () => void;
  onPressReschedule?: () => void;
  onPressReassign?: () => void;
}

const UpcomingOrderActions: FC<IUpcomingOrderActionsProps> = ({
  onPressCancel,
  onPressReassign,
  onPressReschedule,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity hitSlop={wp(4)} onPress={onPressCancel}>
        <Text style={styles.buttonTitle}>Cancel</Text>
      </TouchableOpacity>
      <View style={styles.verticalSeparator} />
      <TouchableOpacity hitSlop={wp(4)} onPress={onPressReschedule}>
        <Text style={styles.buttonTitle}>Reschedule</Text>
      </TouchableOpacity>
      <View style={styles.verticalSeparator} />
      <TouchableOpacity hitSlop={wp(4)} onPress={onPressReassign}>
        <Text style={styles.buttonTitle}>Reassign</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpcomingOrderActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: wp(6),
    marginTop: hp(2.5),
  },
  verticalSeparator: {
    height: hp(2),
    width: 0.7,
    backgroundColor: Colors.white,
  },
  buttonTitle: {
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Urbanist.SemiBold,
    color: Colors.white,
  },
});
