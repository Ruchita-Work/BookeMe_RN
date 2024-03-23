import React, { FC } from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { AppImages } from "@assets";
import { hp, wp } from "@utils/responsive";
import AvatarImage from "@components/ui/AvatarImage";
import { FontFamily, FontSizes, Colors } from "@theme";

const MessagesChatsRow: FC = () => {
  const renderChatHeaderRowItem: ListRenderItem<number> = () => {
    return (
      <View style={styles.rowAvatarItem}>
        <AvatarImage
          image={AppImages.dummyProfileAvatar}
          size={wp(16)}
          isOnline
        />
        <Text style={styles.rowAvatarItemTitle}>Hannah Benson</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={[1, 2, 3]}
        renderItem={renderChatHeaderRowItem}
        horizontal
        contentContainerStyle={styles.chatAvatarRow}
      />
    </View>
  );
};

export default MessagesChatsRow;

const styles = StyleSheet.create({
  chatAvatarRow: {
    paddingLeft: wp(7),
    marginVertical: hp(2),
    columnGap: wp(6),
  },
  rowAvatarItem: {
    width: wp(16),
    alignItems: "center",
    rowGap: hp(0.8),
  },
  rowAvatarItemTitle: {
    textAlign: "center",
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: FontSizes.size14,
  },
});
