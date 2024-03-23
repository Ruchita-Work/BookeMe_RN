import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "@gorhom/bottom-sheet";
import { Colors } from "@theme";
import { hp, wp } from "@utils/responsive";
import {
  ExploreSearchInput,
  ExploreSearchTabs,
  ExploreSearchFilterSheet,
  BackButton,
} from "@components";

const ExploreSearch = () => {
  const filterSheetRef = useRef<BottomSheet>(null);

  const handleOnPressFilter = () => {
    filterSheetRef?.current?.snapToIndex(0);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <BackButton />
      <ExploreSearchInput
        onPressFilter={handleOnPressFilter}
        containerStyle={styles.searchInput}
      />
      <ExploreSearchTabs />
      <ExploreSearchFilterSheet
        ref={filterSheetRef}
        onChange={() => {}}
        onClear={() => {}}
        onConfirm={() => {}}
      />
    </SafeAreaView>
  );
};

export default ExploreSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
    paddingHorizontal: wp(5),
  },
  searchInput: {
    marginHorizontal: wp(2),
    marginVertical: hp(2),
  },
  backButtonContainer: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
  backButton: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});
