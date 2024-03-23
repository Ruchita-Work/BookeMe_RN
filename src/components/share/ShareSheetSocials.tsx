import React, { FC } from "react";
import { Alert, FlatList, Linking, Platform, View } from "react-native";
import AvatarItem from "@components/ui/AvatarItem";
import { AppImages } from "@assets";
import shareSheetStyles from "@components/share/shareSheetStyles";

const data = [
  {
    title: "WhatsApp",
    image: AppImages.whatsApp,
  },
  {
    title: "Twitter",
    image: AppImages.twitter,
  },
  {
    title: "Facebook",
    image: AppImages.facebook,
  },
  {
    title: "Instagram",
    image: AppImages.instagram,
  },
  {
    title: "Yahoo",
    image: AppImages.yahoo,
  },
  {
    title: "Chat",
    image: AppImages.messageApp,
  },
  {
    title: "WeChat",
    image: AppImages.wechat,
  },
  {
    title: "Slack",
    image: AppImages.slack,
  },
];

const handleShareLink = async (itemTitle: string) => {
  let link = "";
  const message = encodeURIComponent("Hello! Welcome to BookMe");

  switch (itemTitle) {
    case "WhatsApp":
      link = `https://wa.me?text=${message}`;
      break;
    case "Twitter":
      link = `https://twitter.com/intent/tweet?text=${message}`;
      break;
    case "Facebook":
      link = ``;
      break;
    case "Chat":
      const operator = Platform.select({ ios: "&", android: "?" });
      link = `sms:${operator}body=${message}`;
      break;
    case "Slack":
      link = `slack://&body=hello world`;
      break;

    default:
      break;
  }

  const isURLValid = await Linking.canOpenURL(link);

  if (isURLValid) {
    Linking.openURL(link);
  } else {
    Alert.alert(
      "App not installed",
      `Please make sure ${itemTitle} is installed to share from the app`,
    );
  }
};

const ShareSheetSocials: FC = () => {
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
              onPress={() => handleShareLink(item.title)}
            />
          );
        }}
        contentContainerStyle={shareSheetStyles.avatarsRow}
      />
    </View>
  );
};

export default ShareSheetSocials;
