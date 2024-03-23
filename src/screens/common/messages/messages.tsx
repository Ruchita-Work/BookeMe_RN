import React, { FC, useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, FontFamily, FontSizes } from "@theme";
import {
  AvatarImage,
  BackBox,
  ChatItem,
  MessagesChatsRow,
  SearchInput,
} from "@components";
import { hp, wp } from "@utils/responsive";
import { AppContext } from "@context/AppContextProvider";
import { useAppSelector } from "@hooks/redux";

const Messages: FC = () => {
  const { isUserPro } = useContext(AppContext);
  const userData = useAppSelector(state => state.auth.userData);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        {!!isUserPro && <BackBox style={styles.back} />}
        <SearchInput
          placeholder="Search Chats"
          containerStyle={styles.searchContainer}
        />
        <AvatarImage
          size={wp(12)}
          image={{ uri: userData?.photo?.streamUrl }}
        />
      </View>
      <Text style={styles.pageTitle}>Messages</Text>
      <View style={styles.body}>
        <MessagesChatsRow />
        <FlatList
          data={[1, 2, 3]}
          renderItem={() => <ChatItem />}
          contentContainerStyle={styles.chatsListContent}
        />
      </View>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  back: {
    marginLeft: 0,
    alignSelf: "center",
    height: "90%",
    width: wp(11),
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    marginTop: hp(1),
    columnGap: wp(4),
  },
  searchContainer: {
    flex: 1,
    borderRadius: wp(2.5),
    paddingVertical: hp(1),
  },
  pageTitle: {
    color: Colors.white,
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    fontFamily: FontFamily.Urbanist.Bold,
    fontSize: FontSizes.size32,
  },
  body: {
    backgroundColor: "#262525",
    flex: 1,
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },
  chatsListContent: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(13),
  },
});
