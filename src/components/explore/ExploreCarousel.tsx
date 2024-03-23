import React, { FC, memo, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { hp, wp } from "@utils/responsive";
import CarouselPaginationDots from "@components/ui/CarouselPaginationDots";
import { AppImages } from "@assets";
import { Colors, FontSizes, FontFamily } from "@theme";

interface IExploreCarouselProps {
  data: any[];
}

const renderCarouselItem = () => (
  <ImageBackground
    style={styles.carouselImageBackground}
    source={AppImages.dummy_HairWash}>
    <Text style={styles.carouselItemTitle}>20%</Text>
    <Text style={styles.carouselItemSubTitle}>
      discount on your first order
    </Text>
  </ImageBackground>
);

const ExploreCarousel: FC<IExploreCarouselProps> = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View>
      <Carousel
        data={data}
        width={wp(100)}
        height={hp(36)}
        onSnapToItem={setActiveIndex}
        autoPlay
        autoPlayInterval={5000}
        renderItem={renderCarouselItem}
      />
      <CarouselPaginationDots
        activeIndex={activeIndex}
        length={data.length}
        containerStyle={styles.paginationDots}
      />
    </View>
  );
};

export default memo(ExploreCarousel);

const styles = StyleSheet.create({
  carouselImageBackground: {
    width: wp(94),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: hp(36),
  },
  carouselItemTitle: {
    fontSize: FontSizes.size45,
    color: Colors.white,
    lineHeight: 45,
    fontFamily: FontFamily.Rubik.Medium,
  },
  carouselItemSubTitle: {
    color: Colors.white,
    lineHeight: 22,
    fontFamily: FontFamily.Rubik.Regular,
  },
  paginationDots: {
    position: "absolute",
    bottom: hp(3),
  },
});
