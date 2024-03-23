import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddServiceDetailInput from "@components/input/AddServiceDetailInput";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppImages } from "@assets";
import AvatarItem from "@components/ui/AvatarItem";
import { FontFamily, FontSizes, Colors } from "@theme";

interface IAddServiceDetailsFormProps {
  onContinue: () => void;
  onAddMoreField: () => void;
}

const AddServiceDetailsForm: FC<IAddServiceDetailsFormProps> = ({
  onAddMoreField,
  onContinue,
}) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <>
      <View style={styles.detailsInputContainer}>
        <AddServiceDetailInput placeholder="Name of Product/ Servrice" />
        <AddServiceDetailInput placeholder="Price" />
        <TouchableOpacity style={styles.addMoreButton} onPress={onAddMoreField}>
          <Entypo name="plus" color={Colors.white} size={wp(5)} />
          <Text style={styles.addMoreButtonTitle}>Add More</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.footer, { marginBottom: bottom + hp(1) }]}>
        <AvatarItem
          image={AppImages.shopifyAvatar}
          title="Shopify"
          containerStyle={styles.avatarContainer}
          titleStyle={styles.avatarTitle}
          imageStyle={styles.avatarImage}
        />
        <AvatarItem
          image={AppImages.amazonAvatar}
          title="Amazon"
          containerStyle={styles.avatarContainer}
          titleStyle={styles.avatarTitle}
          imageStyle={styles.avatarImage}
        />
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => onContinue()}>
          <Text style={styles.continueButtonText}>Continue</Text>
          <AntDesign name="arrowright" color={Colors.white} size={wp(6)} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddServiceDetailsForm;

const styles = StyleSheet.create({
  detailsInputContainer: {
    rowGap: hp(2),
    marginTop: hp(1),
    paddingVertical: hp(2),
    paddingHorizontal: wp(2.5),
    borderWidth: 1,
    borderColor: Colors.white + 20,
    borderRadius: wp(3),
  },
  addMoreButton: {
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(1),
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
  },
  addMoreButtonTitle: {
    fontFamily: FontFamily.Urbanist.Medium,
    fontSize: FontSizes.size18,
    color: Colors.white,
  },
  avatarContainer: {
    rowGap: hp(0.7),
  },
  avatarTitle: {
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.neutral200,
    fontSize: FontSizes.size15,
  },
  avatarImage: {
    height: wp(11),
    width: wp(11),
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    columnGap: wp(6),
  },
  continueButton: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: wp(2),
    flex: 1,
    paddingVertical: hp(2),
    borderRadius: wp(15),
  },
  continueButtonText: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: FontSizes.size20,
  },
});
