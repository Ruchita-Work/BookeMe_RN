import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { hp, wp } from "@utils/responsive";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { FontFamily, FontSizes, Colors } from "@theme";
import { useAppNavigation } from "@hooks";
import {
  ButtonWithIcon,
  PostDetailsCoverHeader,
  PostDetailsOptions,
  Separator,
} from "@components";
import { AppImages } from "@assets";

const ProAddServicePostDetails = () => {
  const { navigation } = useAppNavigation();
  const { bottom } = useSafeAreaInsets();

  const handlePublish = () => {
    navigation.reset({
      routes: [{ name: "ProHomeTabs", params: { screen: "ProHome" } }],
      index: 0,
    });
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity hitSlop={wp(4)} onPress={navigation.goBack}>
            <AntDesign name="arrowleft" color={Colors.white} size={wp(6)} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Post</Text>
        </View>
        <PostDetailsCoverHeader />
        <Separator style={styles.separator} color={Colors.dark3} />
        <PostDetailsOptions />
      </View>
      <View style={[styles.footerButtonsSection, { height: hp(10) + bottom }]}>
        <ButtonWithIcon
          text="Drafts"
          style={[styles.footerButton, { backgroundColor: Colors.dark3 }]}
          textStyle={styles.footerButtonTitle}
          icon={<Entypo name="box" size={wp(5)} color={Colors.white} />}
        />
        <ButtonWithIcon
          text="Published"
          style={styles.footerButton}
          textStyle={styles.footerButtonTitle}
          icon={<Image source={AppImages.send} style={styles.sendIcon} />}
          onPress={handlePublish}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProAddServicePostDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark1,
  },
  body: {
    paddingHorizontal: wp(5),
    marginTop: hp(1),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
  },
  headerTitle: {
    color: Colors.white,
    fontSize: FontSizes.size24,
    fontFamily: FontFamily.Urbanist.Bold,
  },
  footerButtonsSection: {
    width: "102%",
    marginTop: "auto",
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    columnGap: wp(4),
    paddingTop: hp(2),
    borderColor: Colors.dark3,
    borderWidth: 1,
    alignSelf: "center",
  },
  separator: {
    marginVertical: hp(2.5),
  },
  footerButton: {
    width: wp(45),
    paddingVertical: hp(2),
    paddingHorizontal: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  footerButtonTitle: {
    fontSize: FontSizes.size18,
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Bold,
  },
  sendIcon: {
    height: wp(5),
    width: wp(5),
  },
});
