import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { InvitedTeamMember } from "@redux";
import { hp, wp } from "@utils/responsive";
import { Colors } from "@theme/colors";
import { FontFamily, FontSizes } from "@theme/fonts";

interface InvitedMemberItemProps {
  data: InvitedTeamMember;
}

const InvitedMemberItem: FC<InvitedMemberItemProps> = ({ data }) => {
  const { email, firstName, inviteType, lastName, seatRent, phoneNumber } =
    data;
  const name = `${firstName} ${lastName}`;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.email}>{phoneNumber}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.rightText}>{inviteType}</Text>
        <Text style={styles.rightText}>${seatRent}</Text>
      </View>
    </View>
  );
};

export default InvitedMemberItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: wp(4),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: wp(2),
    backgroundColor: Colors.dark2,
  },
  name: {
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Poppins.Regular,
    color: Colors.gray300,
  },
  email: {
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.Regular,
    color: Colors.deactivate,
  },
  rightText: {
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Regular,
    color: Colors.gray300,
  },
  leftContainer: {
    flex: 1,
    rowGap: hp(0.5),
  },
  rightContainer: {
    alignItems: "flex-end",
    rowGap: hp(2),
  },
});
