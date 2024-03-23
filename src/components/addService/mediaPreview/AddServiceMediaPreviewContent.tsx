import React, { FC, useContext, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ResizeMode, Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { hp, wp } from "@utils/responsive";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Colors } from "@theme";
import { AddServiceContext } from "@context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PostAudioItem from "@components/audio/PostAudioItem";
import SegmentedButtons from "@components/ui/SegmentedButtons";
import AddServiceProductItem from "@components/addService/mediaPreview/AddServiceProductItem";
import { AppImages } from "@assets";
import { useAppNavigation } from "@hooks";

interface ITabItemProps {
  image: number;
  onPress: () => void;
  isActive: boolean;
}

const TabItem: FC<ITabItemProps> = ({ image, onPress, isActive }) => {
  return (
    <TouchableOpacity
      hitSlop={wp(5)}
      style={styles.tabButton}
      onPress={onPress}>
      <Image
        style={[styles.tabImage, isActive && { tintColor: "#7A78FF" }]}
        source={image}
      />
      {!!isActive && <View style={styles.tabActiveDot} />}
    </TouchableOpacity>
  );
};

const AddServiceMediaPreviewContent: FC = () => {
  const {
    selectedMediaTab,
    assetUri,
    cancelMediaSelectionHandler,
    serviceDetailsSheetRef,
  } = useContext(AddServiceContext);
  const { top, bottom } = useSafeAreaInsets();
  const [selectedTab, setselectedTab] = useState<string>("Product");
  const { navigation } = useAppNavigation();

  const handleAddService = () => {
    serviceDetailsSheetRef.current?.snapToIndex(0);
  };

  const handleConfirmMedia = () => {
    navigation.navigate("ProAddServicePostDetails");
  };

  return (
    <View style={styles.container}>
      {selectedMediaTab === "image" ? (
        <Image
          source={{ uri: assetUri }}
          resizeMode="stretch"
          style={styles.mediaPreview}
        />
      ) : (
        <Video
          source={{ uri: assetUri }}
          style={styles.mediaPreview}
          shouldPlay
          isLooping
          resizeMode={ResizeMode.STRETCH}
        />
      )}
      <PostAudioItem containerStyle={styles.postAudio} />
      <LinearGradient
        style={styles.gradient}
        colors={["#00000000", "#00000060", "#000000"]}
        locations={[0.2, 0.4, 0.8]}
      />
      <View style={[styles.confirmAcceptButtonRow, { top: top + hp(2) }]}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={cancelMediaSelectionHandler}>
          <AntDesign size={wp(5)} name="close" color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleConfirmMedia}>
          <Feather size={wp(5)} name="check" color={Colors.white} />
        </TouchableOpacity>
      </View>
      <SegmentedButtons
        buttons={["Product", "Services"]}
        onPressButton={setselectedTab}
        activeButtonTitle={selectedTab}
        containerStyle={styles.segmentButtonContainer}
      />
      <View style={styles.productServiceRow}>
        <TouchableOpacity
          style={styles.addProductServiceButton}
          onPress={handleAddService}>
          <AntDesign name="plus" color={Colors.white} size={wp(4)} />
        </TouchableOpacity>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ index }) => (
            <AddServiceProductItem isSelected={index === 0} />
          )}
          contentContainerStyle={styles.productServiceList}
        />
      </View>
      <View
        style={[
          styles.bottomTab,
          {
            marginBottom:
              bottom + Platform.select({ default: hp(1), android: hp(2) }),
          },
        ]}>
        <TabItem
          image={AppImages.addServiceCamera}
          onPress={() => {}}
          isActive={false}
        />
        <TabItem
          image={AppImages.addServiceCut}
          onPress={() => {}}
          isActive={false}
        />
        <TabItem image={AppImages.music} onPress={() => {}} isActive />
        <TabItem
          image={AppImages.addServiceEdit}
          onPress={() => {}}
          isActive={false}
        />
        <TabItem
          image={AppImages.addServiceFlame}
          onPress={() => {}}
          isActive={false}
        />
      </View>
    </View>
  );
};

export default AddServiceMediaPreviewContent;

const styles = StyleSheet.create({
  actionButton: {
    height: wp(9),
    width: wp(9),
    borderRadius: wp(5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  mediaPreview: {
    width: wp(100),
    height: hp(68),
  },
  confirmAcceptButtonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    right: 0,
    left: 0,
    paddingHorizontal: wp(5),
  },
  gradient: {
    marginTop: hp(52),
    height: hp(16),
    width: wp(100),
    position: "absolute",
  },
  postAudio: {
    zIndex: 999999,
    position: "absolute",
    top: hp(58),
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  segmentButtonContainer: {
    marginTop: hp(1),
    alignSelf: "center",
  },
  addProductServiceButton: {
    padding: wp(2),
    backgroundColor: "#7A78FF",
    borderRadius: wp(10),
    marginLeft: wp(2),
    marginRight: wp(6),
  },
  productServiceList: {
    columnGap: wp(4),
    marginTop: hp(2),
    paddingRight: wp(6),
  },
  productServiceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomTab: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: wp(14),
  },
  tabButton: {
    height: wp(6),
    width: wp(6),
    alignItems: "center",
  },
  tabImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  tabActiveDot: {
    backgroundColor: "#7A78FF",
    height: wp(2),
    width: wp(2),
    borderRadius: wp(1),
    marginTop: hp(1),
  },
});
