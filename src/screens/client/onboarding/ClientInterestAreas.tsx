import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "@utils/responsive";
import { AvatarImage, ButtonComponent, SearchInput } from "@components";
import { FontFamily, FontSizes, Colors } from "@theme";
import { AppSvgs } from "@assets";
import { SvgUri } from "react-native-svg";
import { useClientInterestAreas } from "@hooks";
import throttle from "lodash/throttle";
import { AppLoader } from "@components";

const ClientInterestAreas = () => {
  const {
    handleContinue,
    onSelectService,
    selectedInterests,
    isLoading,
    interestData,
    onChangeSearchText,
  } = useClientInterestAreas();

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <AppLoader />}
      <View style={styles.titleSubtitleContainer}>
        <Text style={styles.title}>Select Your Services</Text>
        <Text style={styles.subtitle}>Select 3 or more that interest you</Text>
      </View>
      <SearchInput
        containerStyle={styles.searchInputContainer}
        style={styles.searchInput}
        placeholder="Find your favorite artists"
        placeholderTextColor={Colors.gray400}
        customSearchIcon={() => <SvgUri uri={AppSvgs.search} />}
        onChangeText={onChangeSearchText}
      />
      <FlatList
        data={interestData}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        columnWrapperStyle={styles.listColumn}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelectService(item.title)}
            activeOpacity={0.7}
            style={styles.avatarItem}>
            <AvatarImage
              style={selectedInterests.has(item.title) && styles.selectedAvatar}
              image={{ uri: item.imageUrl }}
              size={wp(24)}
            />
            <Text style={styles.avatarItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.footer}>
        <ButtonComponent
          onPress={throttle(handleContinue, 1500)}
          text="Continue"
          buttonStyle={styles.continueButton}
          disabled={selectedInterests.size < 3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray900,
    paddingHorizontal: wp(6),
  },
  titleSubtitleContainer: {
    width: wp(60),
    alignSelf: "center",
    marginTop: hp(3),
  },
  title: {
    textAlign: "center",
    color: Colors.white,
    fontSize: FontSizes.size32,
    fontFamily: FontFamily.Urbanist.Bold,
  },
  subtitle: {
    marginTop: hp(1),
    textAlign: "center",
    color: Colors.gray500,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Urbanist.Regular,
  },
  searchInputContainer: {
    marginVertical: hp(3),
    borderWidth: 0,
    backgroundColor: Colors.gray800,
    borderRadius: wp(3),
  },
  searchInput: {
    fontFamily: FontFamily.Urbanist.Regular,
    fontSize: FontSizes.size16,
  },
  listColumn: {
    columnGap: wp(7.5),
  },
  avatarItem: {
    alignItems: "center",
  },
  avatarItemTitle: {
    marginTop: hp(1),
    fontSize: FontSizes.size16,
    color: Colors.neutral200,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  listContent: {
    rowGap: hp(3),
    marginTop: hp(2),
    paddingBottom: hp(5),
  },
  footer: { paddingVertical: hp(2) },
  continueButton: { width: "90%" },
  selectedAvatar: {
    borderWidth: wp(0.6),
    borderColor: "white",
  },
});

export default ClientInterestAreas;
