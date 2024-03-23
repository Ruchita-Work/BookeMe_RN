import React, { FC, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader, CustomInput } from "@components";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import debounce from "lodash/debounce";
import { useSearchUsers } from "@api";
import { SearchBusinessDetailsType } from "@api/types/searchApiTypes";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { onboardingActions } from "@redux/features";
import { useAppNavigation } from "@hooks/index";

const FindSalon: FC = () => {
  const dispatch = useAppDispatch();
  const { navigation } = useAppNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const { mutate, isPending, data, error } = useSearchUsers();
  const proType = useAppSelector(
    state => state.onboarding.proOnboarding.proType,
  );

  const salons = data?.data?.data?.businesses || [];

  useEffect(() => {
    mutate({ query: searchTerm, type: ["business"] });
  }, [searchTerm]);

  const onChangeSearchText = (text: string) => {
    setSearchTerm(text);
  };

  const handleOnSelectSalon = (item: SearchBusinessDetailsType) => {
    if (proType === "employee") {
      dispatch(
        onboardingActions.updateEmployeeOnboardingDetails({
          companyDetails: item,
          companyName: item.name,
        }),
      );
    }
    if (proType === "indiePro") {
      dispatch(
        onboardingActions.updateIndieProOnboardingDetails({
          salonDetails: item,
        }),
      );
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <AppHeader title="Beauty Bar" hideAvatar />
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Find your Salon</Text>
        <View style={styles.form}>
          <CustomInput
            label="Salon Name"
            placeholder="Search salon..."
            labelStyle={styles.inputLabel}
            style={styles.input}
            inputContainerStyle={styles.inputContainer}
            renderRightContent={() => (
              <Image source={AppImages.search} style={styles.searchIcon} />
            )}
            onChangeText={debounce(onChangeSearchText, 500)}
          />
          {!!isPending && (
            <ActivityIndicator
              color={Colors.primary}
              size={"large"}
              style={{ alignSelf: "center" }}
            />
          )}
          {!!error && (
            <Text style={styles.errorMessage}>
              Failed to fetch salons! Please try again after sometime
            </Text>
          )}
          {!error && !isPending && !salons?.length && (
            <Text style={styles.errorMessage}>No salons found!</Text>
          )}
          {!!salons?.length && (
            <>
              <Text style={styles.inputLabel}>Company Name</Text>
              <FlatList
                data={salons}
                ItemSeparatorComponent={() => (
                  <View style={styles.listSeprator} />
                )}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.salonItem}
                    onPress={() => handleOnSelectSalon(item)}>
                    <Text style={styles.salonItemTitle}>{item?.name}</Text>
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
              />
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FindSalon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    paddingTop: hp(1),
  },
  body: {
    flex: 1,
    backgroundColor: Colors.dark1,
    borderWidth: 1,
    borderColor: Colors.white + 80,
    borderRadius: wp(6),
    marginTop: hp(3),
    borderBottomWidth: 0,
    paddingHorizontal: wp(4),
    rowGap: hp(0.5),
  },
  form: {
    paddingHorizontal: wp(4),
    marginTop: hp(3),
    marginBottom: hp(2),
  },
  inputLabel: {
    textTransform: "uppercase",
    color: Colors.deactivate,
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size12,
  },
  input: {
    fontFamily: FontFamily.Inter.SemiBold,
    color: Colors.white,
    fontSize: FontSizes.size18,
  },
  searchIcon: {
    height: wp(5),
    width: wp(5),
    marginHorizontal: wp(4),
  },
  inputContainer: {
    paddingTop: hp(1.5),
    paddingBottom: hp(0.5),
  },
  bodyTitle: {
    alignSelf: "center",
    marginTop: hp(4),
    color: Colors.white,
    fontSize: FontSizes.size24,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  listSeprator: {
    height: 1,
    backgroundColor: Colors.primary,
  },
  salonItemTitle: {
    color: Colors.white,
    fontFamily: FontFamily.Inter.SemiBold,
    fontSize: FontSizes.size17,
  },
  salonItem: { paddingVertical: hp(2) },
  listContent: {
    paddingBottom: hp(26),
  },
  errorMessage: {
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.white,
    fontSize: FontSizes.size18,
    textAlign: "center",
  },
});
