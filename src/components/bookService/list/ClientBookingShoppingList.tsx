import React, { FC } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { AppImages } from "@assets";
import SearchInput from "@components/input/SearchInput";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import BookServiceShoppingItem from "../ui/BookServiceShoppingItem";

const ClientBookingShoppingList: FC = () => {
  return (
    <View>
      <SearchInput
        containerStyle={styles.searchInputContainer}
        style={styles.searchInput}
        placeholder="Search for Services"
        placeholderTextColor={Colors.neutral400}
        customSearchIcon={() => (
          <Image
            source={AppImages.searchShine}
            style={styles.searchInputIcon}
          />
        )}
      />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <BookServiceShoppingItem />}
        contentContainerStyle={{ rowGap: hp(1.5), paddingBottom: hp(12) }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ClientBookingShoppingList;

const styles = StyleSheet.create({
  searchInputIcon: {
    height: wp(6),
    width: wp(6),
    resizeMode: "contain",
    tintColor: Colors.primary,
  },
  searchInputContainer: {
    marginTop: hp(1),
    marginBottom: hp(2),
    borderWidth: 0,
    backgroundColor: Colors.neutral700,
    borderRadius: wp(10),
    paddingVertical: hp(1.2),
  },
  searchInput: {
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size16,
    color: Colors.neutral200,
  },
});
