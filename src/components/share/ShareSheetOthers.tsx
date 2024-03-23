import React, { FC } from "react";
import { FlatList, View } from "react-native";
import AvatarItem from "@components/ui/AvatarItem";
import shareSheetStyles from "@components/share/shareSheetStyles";
import { AppImages } from "@assets";

const data = [
  { title: "Report", image: AppImages.reportRedAvatar },
  { title: "Duet", image: AppImages.duetRedAvatar },
  { title: "Add to Favourites", image: AppImages.favouriteRedAvatar },
  { title: "Save Video", image: AppImages.saveVideoRedAvatar },
];

const ShareSheetOthers: FC = () => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={4}
        keyExtractor={(_, index) => index.toString()}
        columnWrapperStyle={shareSheetStyles.avatarsColumn}
        renderItem={({ item }) => {
          return (
            <AvatarItem
              image={item.image}
              imageStyle={shareSheetStyles.avatarItemImage}
              title={item.title}
              titleStyle={shareSheetStyles.avatarItemTitle}
              containerStyle={shareSheetStyles.avatarItemContainer}
            />
          );
        }}
        contentContainerStyle={shareSheetStyles.avatarsRow}
      />
    </View>
  );
};

export default ShareSheetOthers;
