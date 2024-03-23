import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, FontFamily, FontSizes } from "@theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { AvatarImage, ButtonComponent, SearchInput } from "@components";
import { SvgUri } from "react-native-svg";
import { AppSvgs } from "@assets";
import { hp, wp } from "@utils/responsive";
import { useAppDispatch, useAppNavigation } from "@hooks";
import { BusinessAreaItemType, useGetBusinessAreas } from "@api";
import { onboardingActions } from "@redux/features";

const AreaOfBusiness = () => {
  const { navigation } = useAppNavigation();
  const [selectedAreas, setSelectedAreas] = useState<Set<string>>(new Set());
  const [services, setServices] = useState<BusinessAreaItemType[]>([]);
  const dispatch = useAppDispatch();

  const { data: businessAreasQueryData } = useGetBusinessAreas();

  useEffect(() => {
    if (businessAreasQueryData?.data?.data) {
      setServices(businessAreasQueryData.data.data);
    }
  }, [businessAreasQueryData]);

  const onSelectService = (title: string) => {
    setSelectedAreas(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
        return newSet;
      } else {
        return newSet.add(title);
      }
    });
  };

  const onChangeSearchText = (searchQuery: string) => {
    const apidata = businessAreasQueryData?.data?.data || [];
    if (searchQuery) {
      setServices(prev =>
        prev.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    } else {
      setServices(apidata);
    }
  };

  const handleContinue = () => {
    dispatch(
      onboardingActions.updateBusinessOnboardingDetails({
        selectedAreaOfServices: [...selectedAreas],
      }),
    );
    navigation.navigate("CreateBusiness");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleSubtitleContainer}>
        <Text style={styles.title}>What Services Do You Provide?</Text>
        <Text style={styles.subtitle}>
          Select areas that apply specifically to your business
        </Text>
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
        data={services}
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
              style={selectedAreas.has(item.title) && styles.selectedAvatar}
              image={{ uri: item.imageUrl, priority: "high" }}
              size={wp(24)}
            />
            <Text style={styles.avatarItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.footer}>
        <ButtonComponent
          disabled={!selectedAreas.size}
          onPress={handleContinue}
          text="Continue"
          buttonStyle={styles.continueButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default AreaOfBusiness;

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
    fontSize: FontSizes.size14,
    color: Colors.neutral200,
    fontFamily: FontFamily.Urbanist.Regular,
  },
  listContent: {
    rowGap: hp(3),
    paddingBottom: hp(5),
  },
  footer: {
    paddingVertical: hp(2),
  },
  continueButton: {
    width: "90%",
  },
  selectedAvatar: {
    borderWidth: wp(0.6),
    borderColor: "white",
  },
});
