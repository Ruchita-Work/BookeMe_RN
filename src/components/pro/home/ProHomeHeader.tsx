import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import SearchInput from "@components/input/SearchInput";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import NotificationIconWithBadge from "@components/ui/NotificationIconWithBadge";

const ProHomeHeader: FC = () => {
  const renderSearchInputRightContent = () => (
    <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
      <Image source={AppImages.filter} style={styles.filter} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.searchRow}>
      <SearchInput
        rightContent={renderSearchInputRightContent}
        containerStyle={styles.searchInputContainer}
        placeholder="Search for Services"
      />
      <NotificationIconWithBadge count="3" />
    </View>
  );
};

export default ProHomeHeader;

const styles = StyleSheet.create({
  filter: {
    height: wp(5),
    width: wp(5),
  },
  searchInputContainer: {
    borderRadius: wp(20),
    paddingVertical: hp(1),
    flex: 1,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4),
    flex: 1,
    paddingHorizontal: wp(5),
  },
});
