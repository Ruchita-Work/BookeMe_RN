import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@theme";
import ProductItem from "@components/explore/searchResults/listitem/ProductItem";
import { AppImages } from "@assets";
import { hp } from "@utils/responsive";

const data = new Array(16).fill({});

const ExploreSearchServiceTab: FC = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={() => <ProductItem image={AppImages.dummyProductImage} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={[styles.listContent, { paddingBottom: bottom }]}
        numColumns={2}
        columnWrapperStyle={styles.listColumnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExploreSearchServiceTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
  },
  listContent: {
    paddingTop: hp(3),
  },
  listColumnWrapper: {
    justifyContent: "space-between",
    marginBottom: hp(1),
  },
});
