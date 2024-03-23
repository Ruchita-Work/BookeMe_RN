import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  AppHeader,
  ButtonComponent,
  SearchInput,
  TeamMemberItem,
} from "@components";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import { AppSvgs } from "@assets";
import { SvgUri } from "react-native-svg";
import { useAppNavigation, useAppSelector } from "@hooks";
import { Contact } from "react-native-contacts";
import debounce from "lodash/debounce";

const AddBusinessTeams = () => {
  const { bottom } = useSafeAreaInsets();
  const { navigation } = useAppNavigation();
  const userContacts = useAppSelector(state => state.onboarding.userContacts);
  const [contactsData, setContactsData] = useState<Contact[]>(userContacts);
  const businessImage = useAppSelector(
    state => state.onboarding.proOnboarding.business?.image,
  );

  const [selectedMembers, setSelectedMembers] = useState<Set<string>>(
    new Set(),
  );

  const handleMemberSelection = (id: string) => {
    setSelectedMembers(prev => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(id)) {
        updatedSet.delete(id);
        return updatedSet;
      } else {
        return updatedSet.add(id);
      }
    });
  };

  const onSearchContact = (text: string) => {
    const searchString = text.trim();
    if (searchString) {
      const filteredData = userContacts.filter(contactItem =>
        contactItem.givenName.includes(searchString),
      );
      setContactsData(filteredData);
    } else {
      setContactsData(userContacts);
    }
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <AppHeader title="Add Team" image={{ uri: businessImage?.uri }} />
      <View style={styles.body}>
        <SearchInput
          containerStyle={styles.searchInputContainer}
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={Colors.deactivate}
          customSearchIcon={() => <SvgUri uri={AppSvgs.search} />}
          onChangeText={debounce(onSearchContact, 400)}
        />
        <FlatList
          data={contactsData || []}
          renderItem={({ item }) => (
            <TeamMemberItem
              selected={selectedMembers.has(item.recordID)}
              onPress={() => handleMemberSelection(item.recordID)}
              title={item.givenName}
              subtitle={item.jobTitle || "N/A"}
              image={
                item.thumbnailPath ? { uri: item.thumbnailPath } : undefined
              }
            />
          )}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />

        <View style={[styles.footer, { marginBottom: bottom + hp(1) }]}>
          <ButtonComponent
            text="Not found?"
            variant="ghost"
            buttonStyle={styles.notFoundButton}
            textStyle={styles.notFoundButtonTitle}
            onPress={() => navigation.navigate("InviteTeamMembers")}
          />
          <ButtonComponent
            text="Invite Member"
            buttonStyle={styles.inviteMemberButton}
            textStyle={styles.inviteMemberButtonTitle}
            onPress={() => navigation.navigate("CreateBusiness")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddBusinessTeams;

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
    paddingHorizontal: wp(4),
    rowGap: hp(0.5),
  },
  searchInputContainer: {
    marginVertical: hp(2),
    borderWidth: 0,
    backgroundColor: Colors.background2,
    borderRadius: wp(3),
  },
  searchInput: {
    fontFamily: FontFamily.Inter.SemiBold,
    fontSize: FontSizes.size16,
    color: Colors.white,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(2),
  },
  notFoundButton: {
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(8),
  },
  notFoundButtonTitle: {
    fontFamily: FontFamily.Inter.Bold,
    color: Colors.deactivate,
  },
  inviteMemberButton: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(8),
    marginTop: 0,
  },
  inviteMemberButtonTitle: {
    fontFamily: FontFamily.Inter.Bold,
  },
  listContent: {
    rowGap: hp(1.8),
    paddingBottom: hp(2),
  },
});
