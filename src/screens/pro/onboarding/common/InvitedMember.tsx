import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppImages } from "@assets";
import {
  AppLoader,
  AvatarImage,
  ButtonComponent,
  CustomBackgroundImage,
  CustomInput,
} from "@components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily, FontSizes } from "@theme";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { onboardingActions } from "@redux/features";
import { useAcceptInvite } from "@api";
import { showErrorToast } from "@utils/toast";
import { useAppNavigation } from "@hooks";

const InvitedMember = () => {
  const dispatch = useAppDispatch();
  const { top } = useSafeAreaInsets();
  const { navigation } = useAppNavigation();
  const onboardingInvite = useAppSelector(state => state.onboarding.invite);

  const { id: inviteId, details: inviteDetails } = onboardingInvite;

  const { mutateAsync, isPending } = useAcceptInvite();

  const handleOnPressDecline = () => {
    dispatch(onboardingActions.updateInviteDetails(null));
    navigation.reset({ routes: [{ name: "SignIn" }] });
  };

  const handleOnPressAccept = async () => {
    try {
      await mutateAsync({ id: inviteId });
      navigation.reset({ routes: [{ name: "SignIn" }] });
    } catch (error) {
      showErrorToast({
        text1: "Failed to accept invite! Please try again after sometime",
      });
    }
  };

  return (
    <CustomBackgroundImage
      childrenContainerStyle={{ alignItems: "stretch" }}
      imageSource={AppImages.onboardingBackground}>
      {!!isPending && <AppLoader />}
      <View style={[styles.container, { marginTop: hp(4) + top }]}>
        <Text style={styles.title}>You’re being invited!</Text>
        <AvatarImage
          size={wp(28)}
          image={{
            uri: inviteDetails?.businessPhoto?.streamUrl,
            priority: "high",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{inviteDetails?.businessName}</Text>
        <Text style={styles.askJoinText}>
          {inviteDetails?.businessName} has invited you to join as a seated
          member of this salon. Will join them?
        </Text>
        <View style={styles.inputsRow}>
          <CustomInput
            value={inviteDetails.inviteType}
            editable={false}
            label="Pro or Employee"
            labelStyle={styles.inputLabel}
            inputContainerStyle={styles.inputContainer}
            style={styles.input}
          />
          <CustomInput
            value={`$${inviteDetails.seatRent}`}
            editable={false}
            label="Seat Rent"
            inputContainerStyle={styles.inputContainer}
            labelStyle={styles.inputLabel}
            style={styles.input}
          />
        </View>

        <View style={styles.inputsRow}>
          <ButtonComponent
            text="Decline"
            variant="ghost"
            buttonStyle={styles.footerButton}
            onPress={handleOnPressDecline}
          />
          <ButtonComponent
            text="Accept"
            buttonStyle={styles.footerButton}
            onPress={handleOnPressAccept}
          />
        </View>
      </View>
    </CustomBackgroundImage>
  );
};

export default InvitedMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    color: Colors.white,
    fontSize: FontSizes.size30,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  avatar: {
    alignSelf: "center",
    marginTop: hp(5),
  },
  name: {
    textAlign: "center",
    marginVertical: hp(2),
    color: Colors.white,
    fontSize: FontSizes.size26,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  askJoinText: {
    textAlign: "center",
    lineHeight: hp(3.5),
    paddingHorizontal: wp(10),
    fontWeight: "500",
    fontStyle: "italic",
    color: Colors.white,
  },
  inputLabel: {
    color: Colors.deactivate,
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size12,
    textTransform: "uppercase",
  },
  inputsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp(8),
    marginTop: hp(4),
  },
  inputContainer: {
    width: wp(35),
    borderBottomWidth: 0,
    paddingVertical: hp(1),
  },
  input: {
    color: Colors.white,
    fontFamily: FontFamily.Inter.SemiBold,
  },
  footerButton: {
    marginTop: 0,
    width: wp(35),
  },
});
