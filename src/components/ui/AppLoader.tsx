import React, { FC } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "@theme";

const AppLoader: FC = () => {
  return (
    <ActivityIndicator
      color={Colors.primary}
      size={"large"}
      style={styles.loaderStyle}
    />
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  loaderStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#00000095",
    zIndex: 999999,
  },
});
