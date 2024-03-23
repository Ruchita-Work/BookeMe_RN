import React, { FC } from "react";
import { FlatList, View } from "react-native";
import AvatarItem from "@components/ui/AvatarItem";
import { AppImages } from "@assets";
import shareSheetStyles from "@components/share/shareSheetStyles";

const ShareSheetUsers: FC<{ data: [] }> = ({ data = [] }) => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={4}
        keyExtractor={(_, index) => index.toString()}
        columnWrapperStyle={shareSheetStyles.avatarsColumn}
        renderItem={({ item }) => {
          const isSearchItem = item === "search";
          return (
            <AvatarItem
              image={
                isSearchItem
                  ? AppImages.searchRedAvatar
                  : AppImages.dummyProfileAvatar
              }
              imageStyle={shareSheetStyles.avatarItemImage}
              titleStyle={shareSheetStyles.avatarItemTitle}
              title={isSearchItem ? "Search" : "andrew"}
              containerStyle={shareSheetStyles.avatarItemContainer}
            />
          );
        }}
        contentContainerStyle={shareSheetStyles.avatarsRow}
      />
    </View>
  );
};

export default ShareSheetUsers;
