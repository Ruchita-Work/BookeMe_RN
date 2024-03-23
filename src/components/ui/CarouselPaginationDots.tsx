import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { wp } from "@utils/responsive";
import { Colors } from "@theme";

interface ICarouselPaginationDotsProps {
  activeIndex: number;
  length: number;
  containerStyle?: ViewStyle;
}

const CarouselPaginationDots: FC<ICarouselPaginationDotsProps> = ({
  activeIndex,
  length,
  containerStyle,
}) => {
  const data = new Array(length).fill({});
  return (
    <View style={[styles.pagination, containerStyle]}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            index === activeIndex && styles.activePaginationDot,
          ]}
        />
      ))}
    </View>
  );
};

export default CarouselPaginationDots;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
    alignSelf: "center",
  },
  paginationDot: {
    height: wp(2),
    width: wp(2),
    borderRadius: wp(2),
    backgroundColor: Colors.white,
    opacity: 0.5,
  },
  activePaginationDot: {
    width: wp(6),
    opacity: 1,
  },
});
