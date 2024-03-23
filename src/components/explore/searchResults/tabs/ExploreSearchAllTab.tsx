import React, { FC } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "@utils/responsive";
import { Colors, FontSizes, FontFamily } from "@theme";
import { AppImages } from "@assets";
import ProfessionalItem from "@components/explore/searchResults/listitem/ProfessionalItem";
import VideoCard from "@components/explore/searchResults/listitem/VideoCard";

const ExploreSearchAllTab: FC = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: bottom }}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <Text style={styles.sectionTitle}>Professionals</Text>
      <View>
        <FlatList
          data={[1, 2, 3]}
          renderItem={() => <ProfessionalItem />}
          keyExtractor={(_, index) => index.toString()}
          bounces={false}
          scrollEnabled={false}
          contentContainerStyle={styles.professionalsListContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Text style={styles.sectionTitle}>Videos</Text>
      <FlatList
        data={[1, 2, 3]}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={() => <VideoCard image={AppImages.videoThumbnail} />}
        keyExtractor={(_, index) => index.toString()}
        bounces={false}
        contentContainerStyle={styles.videoListContent}
      />
    </ScrollView>
  );
};

export default ExploreSearchAllTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkPrimary,
  },
  sectionTitle: {
    fontSize: FontSizes.size20,
    color: Colors.white,
    lineHeight: hp(2.7),
    marginVertical: hp(2),
    fontFamily: FontFamily.Urbanist.Bold,
  },
  professionalsListContent: {
    rowGap: hp(2),
  },
  videoListContent: {
    columnGap: wp(4),
  },
});
