import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CategoryCard } from "@components";
import { hp, wp } from "@utils/responsive";
import { useAppNavigation } from "@hooks";
import { Colors } from "@theme";

const Categories = () => {
  const { navigation } = useAppNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView style={styles.scroll}>
      <View style={[styles.header, { paddingTop: top }]}>
        <Pressable onPress={navigation.goBack}>
          <AntDesign name="left" size={24} color={Colors.white} />
        </Pressable>
        <View style={styles.headerRightIconsContainer}>
          <AntDesign name="setting" size={24} color={Colors.white} />
          <AntDesign name="search1" size={24} color={Colors.white} />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#0D0F14",
  },
  header: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardContainer: {
    paddingHorizontal: wp(5),
    paddingTop: hp(1),
    marginTop: hp(2.5),
    gap: wp(5),
  },
  headerRightIconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: wp(6),
  },
});

export default Categories;
