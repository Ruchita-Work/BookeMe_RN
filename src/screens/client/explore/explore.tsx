import React, { useRef } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@theme";
import { hp, wp } from "@utils/responsive";
import {
  SearchInput,
  ExploreCarousel,
  ExploreMyFavourites,
  ExploreTopBookings,
} from "@components";
import { useAppNavigation } from "@hooks";

const carouselData = [1, 2, 3, 4];

const Explore = () => {
  const searchInputRef = useRef<TextInput | null>(null);
  const {
    navigation: { navigate },
  } = useAppNavigation();

  const handleSearchInputFocus = () => {
    navigate("ExploreSearch");
    searchInputRef?.current?.blur();
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <SearchInput
          placeholder="Search for Services"
          containerStyle={styles.searchInput}
          ref={searchInputRef}
          onFocus={handleSearchInputFocus}
        />
        <ExploreCarousel data={carouselData} />
        <ExploreMyFavourites />
        <ExploreTopBookings />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
  },
  container: {
    backgroundColor: Colors.darkPrimary,
    paddingBottom: hp(10),
  },
  searchInput: {
    marginVertical: hp(3),
    marginHorizontal: wp(4),
  },
});
