import React, { FC } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@theme";
import { AppHeader, NotificationCard } from "@components";
import { hp, wp } from "@utils/responsive";

const Notification: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Notifications" hideAvatar />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <NotificationCard />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  listContent: {
    marginTop: hp(3),
    paddingHorizontal: wp(5),
    rowGap: hp(2),
    paddingBottom: hp(6),
  },
});
