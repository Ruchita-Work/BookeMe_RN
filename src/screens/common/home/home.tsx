import React, { useContext, useEffect, useRef } from "react";
import { Text, Image, View, Pressable, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgUri } from "react-native-svg";
import BottomSheet from "@gorhom/bottom-sheet";
import { hp, wp } from "@utils/responsive";
import { AppImages, AppSvgs } from "@assets";
import { Colors } from "@theme";
import { useAppNavigation } from "@hooks";
import {
  CustomBackgroundImage,
  ButtonComponent,
  ShareSheet,
  CommentSheet,
  SelectStaffSheet,
} from "@components";
import { homeStyles as styles } from "./homeStyles";
import ClientBookServiceSheet from "@screens/client/bookService/ClientBookServiceSheet";
import { BookServiceContext } from "@context";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const shareSheetRef = useRef<BottomSheet>(null);
  const commentSheetRef = useRef<BottomSheet>(null);

  const { bookServiceSheetRef, handleOnPressBookService, selectStaffSheetRef } =
    useContext(BookServiceContext);

  const { navigation } = useAppNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      bookServiceSheetRef.current?.close();
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleOnPressShare = () => {
    shareSheetRef.current?.snapToIndex(0);
  };

  const handleOnPressComment = () => {
    commentSheetRef.current?.snapToIndex(0);
  };

  return (
    <CustomBackgroundImage
      opacity="rgba(0,0,0,1)"
      imageSource={AppImages.homeBackground}>
      <View style={[styles.container, { paddingTop: top + hp(1.5) }]}>
        <View style={styles.topTabs}>
          <View style={styles.maintabsContainer}>
            <View>
              <Text style={[styles.forYou, styles.textTypo]}>For You</Text>
              <View style={[styles.rectangle, styles.rectangleSpaceBlock]} />
            </View>
            <View>
              <Text style={[styles.forYou, styles.textTypo]}>Products</Text>
              <View style={[styles.rectangle1, styles.rectangleSpaceBlock]} />
            </View>
            <View>
              <Text style={[styles.forYou, styles.textTypo]}>Services</Text>
              <View style={[styles.rectangle1, styles.rectangleSpaceBlock]} />
            </View>
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <SvgUri uri={AppSvgs.search} />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Pressable
            onPress={() => navigation.navigate("ProProfile")}
            style={styles.CTAContainer}>
            <ButtonComponent
              text="Book Service"
              buttonStyle={styles.bookServiceButton}
              textStyle={styles.bookServiceButtonText}
              onPress={handleOnPressBookService}
            />

            <View style={styles.autoLayoutHorizontal}>
              <Image
                style={styles.typeeditAvatarComponentav}
                source={AppImages.dummyProfileAvatar}
              />
              <View style={styles.autoLayoutVertical}>
                <Text style={[styles.name, styles.nameFlexBox]}>
                  Ann Winter
                </Text>
                <Text style={[styles.information, styles.nameFlexBox]}>
                  <Text style={styles.hairStylist}>Hair Stylist @</Text>
                  <Text style={styles.textTypo}>BeautyBar</Text>
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles.information,
                styles.nameFlexBox,
                { paddingRight: wp(5), color: Colors.white },
              ]}>
              Nike Mecurial Vapor Elite just dropped. #soccer #futbol #mbappe
              #nike
            </Text>
            <Text
              style={[
                styles.information,
                styles.nameFlexBox,
                { color: Colors.white },
              ]}>
              Skeletons by Easy Life
            </Text>
          </Pressable>
          <View style={styles.userActionsContainer}>
            <TouchableOpacity style={styles.userActionItem}>
              <SvgUri width={wp(8)} height={wp(8)} uri={AppSvgs.heart} />
              <Text style={styles.countText}>225.6k</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.userActionItem}
              onPress={handleOnPressComment}>
              <SvgUri width={wp(8)} height={wp(8)} uri={AppSvgs.chat} />
              <Text style={styles.countText}>24.6k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userActionItem}>
              <SvgUri width={wp(8)} height={wp(8)} uri={AppSvgs.bookmark} />
              <Text style={styles.countText}>15.6k</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleOnPressShare}
              style={styles.userActionItem}>
              <SvgUri width={wp(8)} height={wp(8)} uri={AppSvgs.share} />
              <Text style={styles.countText}>20.7k</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ShareSheet ref={shareSheetRef} />
      <CommentSheet ref={commentSheetRef} />
      <ClientBookServiceSheet ref={bookServiceSheetRef} />
      <SelectStaffSheet
        ref={selectStaffSheetRef}
        onPressFooterButton={() =>
          navigation.navigate("ClientBookingAddService")
        }
      />
    </CustomBackgroundImage>
  );
};

export default Home;
