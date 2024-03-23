import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AvatarItem from "@components/ui/AvatarItem";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";

const favouritesData = [
  { title: "Hair", image: AppImages.dummy_favourite1 },
  { title: "MakeUp", image: AppImages.dummy_favourite2 },
  { title: "Nails", image: AppImages.dummy_favourite3 },
  { title: "Massage", image: AppImages.dummy_favourite4 },
];

const ExploreMyFavourites: FC = () => {
  return (
    <>
      <Text style={styles.title}>My Favorites</Text>
      <View>
        <FlatList
          horizontal
          data={favouritesData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <AvatarItem title={item.title} image={item.image} />
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
};

export default ExploreMyFavourites;

const styles = StyleSheet.create({
  title: {
    fontSize: FontSizes.size33,
    lineHeight: FontSizes.size42,
    color: Colors.white,
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    fontFamily: FontFamily.Rubik.Medium,
  },
  list: {
    columnGap: wp(9),
    marginLeft: wp(4),
  },
});
