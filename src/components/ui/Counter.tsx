import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors, FontFamily, FontSizes } from "@theme";
import { wp } from "@utils/responsive";

interface ICounterProps {
  value: number;
  onIncrease: (newValue: number) => void;
  onDecrease: (newValue: number) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const Counter: FC<ICounterProps> = ({
  onDecrease,
  onIncrease,
  value = 0,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.countButton}
        onPress={() => onDecrease?.(value - 1)}>
        <AntDesign name="minus" color={Colors.white} size={wp(3.5)} />
      </TouchableOpacity>
      <Text style={styles.counterText}>{value}</Text>
      <TouchableOpacity
        style={styles.countButton}
        onPress={() => onIncrease?.(value + 1)}>
        <AntDesign name="plus" color={Colors.white} size={wp(3.5)} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
  },
  countButton: {
    height: wp(7),
    width: wp(7),
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(5),
  },
  counterText: {
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
