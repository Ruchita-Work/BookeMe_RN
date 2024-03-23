import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  AppHeader,
  AppLoader,
  ButtonComponent,
  PayPlanCard,
  SwitchItem,
} from "@components";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily, FontSizes } from "@theme";
import { AppImages } from "@assets";
import { useAppDispatch, useAppNavigation, useAppSelector } from "@hooks";
import { PlanType } from "@types";
import { authActions, onboardingActions } from "@redux/features";
import { OnboardingFeaturesType } from "@redux/features/onboarding/type";
import { showErrorToast } from "@utils/toast";
import {
  APIUploadVerificationDocsPayloadType,
  getCreateBusinessPayload,
  getCreateIndieProPayload,
  getCreateUserPayloadForBusiness,
  getCreateUserPayloadForIndiePro,
  getInviteMemberPayload,
  useAddUser,
  useCreateBusinessAPI,
  useCreateIndiePro,
  useInviteMember,
  useUploadVerificationDocs,
} from "@api";
import { parseApiError } from "@utils/helpers";

const BusinessPaywall = () => {
  const dispatch = useAppDispatch();
  const { bottom } = useSafeAreaInsets();
  const { navigation } = useAppNavigation<"BusinessPaywall">();
  const { mutateAsync: mutateAddUser } = useAddUser();
  const { mutateAsync: mutateCreateBusiness } = useCreateBusinessAPI();
  const { mutateAsync: mutateCreateIndiePro } = useCreateIndiePro();
  const { mutateAsync: mutateUploadVerificationDocs } =
    useUploadVerificationDocs();
  const { mutateAsync: inviteMemberMutation } = useInviteMember();
  const [isLoading, setIsLoading] = useState(false);

  const proOnboarding = useAppSelector(state => state.onboarding.proOnboarding);

  const proType = proOnboarding.proType;
  const selectedPlan = proOnboarding[proType].selectedPlan;
  const featuresData = proOnboarding[proType].features;

  const headerImage =
    proType === "business"
      ? proOnboarding.business?.image?.uri
      : proOnboarding.indiePro?.image?.uri;

  const handleSelectPlan = (plan: PlanType) => {
    dispatch(onboardingActions.setSelectedPlan({ plan, proType }));
  };

  const handleOnToggleFeatures = (
    feature: OnboardingFeaturesType,
    value: boolean,
  ) => {
    dispatch(onboardingActions.setFeatureStatus({ feature, value, proType }));
  };

  const handleOnPressDone = async () => {
    try {
      setIsLoading(true);
      if (proType === "business") {
        // Create User
        const addUserPayload = getCreateUserPayloadForBusiness();
        const addUserResponse = await mutateAddUser(addUserPayload);

        // Create Business User
        const businessFormData = getCreateBusinessPayload();
        const businessResponse = await mutateCreateBusiness(businessFormData);

        // Upload Id Verification Docs
        const payload: APIUploadVerificationDocsPayloadType = {
          id: proOnboarding.business.idDocument,
          certificate: proOnboarding.business.proCertificate,
          selfie: proOnboarding.business.selfie,
        };
        await mutateUploadVerificationDocs(payload);

        // handle invites
        const invitePromisesMap = proOnboarding.business.invitedPeople.map(
          item => {
            const payload = getInviteMemberPayload(
              item,
              businessResponse.data?.data?.business?.id,
            );
            return inviteMemberMutation(payload);
          },
        );
        await Promise.all(invitePromisesMap);

        // * Store user details in redux-persist
        dispatch(authActions.loginUser(addUserResponse.data?.data));
        dispatch(
          authActions.updateAuthBusinessDetails(businessResponse.data?.data),
        );
        navigation.reset({ routes: [{ name: "ProHomeTabs" }], index: 0 });
      }

      if (proType === "indiePro") {
        // Create User
        const addUserPayload = getCreateUserPayloadForIndiePro();
        const addUserResponse = await mutateAddUser(addUserPayload);

        // Create IndiePro User
        const indieProFormData = getCreateIndieProPayload();
        await mutateCreateIndiePro(indieProFormData);

        // Upload Id Verification Docs
        const payload: APIUploadVerificationDocsPayloadType = {
          id: proOnboarding.indiePro.idDocument,
          certificate: proOnboarding.indiePro.proCertificate,
          selfie: proOnboarding.indiePro.selfie,
        };
        await mutateUploadVerificationDocs(payload);

        // * Store user details in redux-persist
        dispatch(authActions.loginUser(addUserResponse.data?.data));
        navigation.reset({ routes: [{ name: "ProHomeTabs" }], index: 0 });
      }
    } catch (error) {
      console.log("🚀 ~ handleOnPressDone ~ error:", error);
      showErrorToast({
        text1: "Failed to register",
        text2:
          parseApiError(error) ||
          "Failed to register! Please try again after sometime",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {!!isLoading && <AppLoader />}
      <AppHeader title={proOnboarding.name} image={{ uri: headerImage }} />
      <View style={styles.body}>
        <Text style={styles.title}>Choose Plan</Text>
        <Text style={styles.subTitle}>
          Unlock all features with Premium Plan
        </Text>
        <View style={styles.planCardsContainer}>
          <PayPlanCard
            selected={selectedPlan === "FREE"}
            title="It’s Free"
            subTitle="For team from 1 - 3"
            onPress={() => handleSelectPlan("FREE")}
          />
          <PayPlanCard
            selected={selectedPlan === "PREMIUM"}
            title="Premium"
            subTitle="$19/mo"
            onPress={() => handleSelectPlan("PREMIUM")}
          />
        </View>
        <Text style={styles.enableFeatures}>Enable Features</Text>
        <Text style={styles.customizeFeatureInfo}>
          You can customize the features in your workspace now. Or you can do it
          later in{" "}
          <Text style={{ color: Colors.white }}>Menu – Workspace.</Text>
        </Text>
        <View style={styles.switchOptionsContainer}>
          <SwitchItem
            image={AppImages.multipleUsers}
            title="Multiple Assignees"
            switchValue={featuresData["multipleAssignees"]}
            onSwitch={val => handleOnToggleFeatures("multipleAssignees", val)}
          />
          <SwitchItem
            image={AppImages.customService}
            title="Custom Services"
            switchValue={featuresData["customServices"]}
            onSwitch={val => handleOnToggleFeatures("customServices", val)}
          />
        </View>

        <View style={[styles.footer, { marginBottom: bottom + hp(2) }]}>
          <ButtonComponent
            text="Back"
            variant="ghost"
            buttonStyle={styles.footerBackButton}
            textStyle={styles.footerBackButtonTitle}
            onPress={navigation.goBack}
          />
          <ButtonComponent
            text="Done"
            buttonStyle={styles.doneButton}
            textStyle={styles.doneButtonTitle}
            onPress={handleOnPressDone}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BusinessPaywall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.dark1,
    borderWidth: 1,
    borderColor: Colors.white + 80,
    borderRadius: wp(6),
    marginTop: hp(3),
    borderBottomWidth: 0,
    paddingHorizontal: wp(6),
    rowGap: hp(0.5),
    paddingTop: hp(3),
  },
  title: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.SemiBold,
    fontSize: FontSizes.size24,
  },
  subTitle: {
    color: Colors.deactivate,
    fontFamily: FontFamily.Inter.Medium,
    fontSize: FontSizes.size13,
    marginVertical: hp(0.5),
  },
  planCardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(2),
  },
  enableFeatures: {
    fontSize: FontSizes.size24,
    color: Colors.white,
    fontFamily: FontFamily.Poppins.SemiBold,
    marginTop: hp(2),
  },
  customizeFeatureInfo: {
    fontFamily: FontFamily.Inter.Medium,
    fontSize: FontSizes.size15,
    color: Colors.deactivate,
    marginVertical: hp(0.5),
  },
  switchOptionsContainer: {
    rowGap: hp(1),
    marginTop: hp(2),
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  footerBackButton: {
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(8),
  },
  footerBackButtonTitle: {
    fontFamily: FontFamily.Inter.Bold,
    color: Colors.deactivate,
  },
  doneButton: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(8),
    marginTop: 0,
  },
  doneButtonTitle: {
    fontFamily: FontFamily.Inter.Bold,
    color: Colors.white,
  },
});
