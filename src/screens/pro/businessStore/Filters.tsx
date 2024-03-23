import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppNavigation } from "@hooks/index";
import { FontFamily } from "@theme/fonts";
import { Slider } from "@miblanchard/react-native-slider";

const Filters = () => {
  const { top } = useSafeAreaInsets();
  const { navigation } = useAppNavigation();
  const [lowAmount, setLowAmount] = useState(0);
  const [highAmount, setHighAmount] = useState(30);
  const [selectColor, setSelectColor] = useState();
  const [selectSize, setSelectSize] = useState();
  const [selectBrand, setSelectBand] = useState();

  const colorCode = [
    { color: "#E4B486" },
    { color: "#EB7398" },
    { color: "#DF3E3E" },
    { color: "#4679C5" },
    { color: "#FFFFFF" },
    { color: "#060606" },
  ];

  const sizes = [{ size: "S" }, { size: "M" }, { size: "L" }, { size: "XX" }];

  const brands = [
    { name: "Adidas" },
    { name: "Bershka" },
    { name: "Converse" },
    { name: "Diesel" },
  ];

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn}>
          <AntDesign name="arrowleft" size={wp(6)} color={Colors.white} />
          <Text style={styles.cartText}>CART</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cleanBtn}>
          <Text style={styles.clean}>Clean</Text>
          <AntDesign name="close" size={wp(5)} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <Text style={styles.title}>Price</Text>
      <View style={styles.silderView}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          step={1}
          startFromZero={false}
          value={[lowAmount, highAmount]}
          thumbTintColor={Colors.white}
          renderThumbComponent={() => <View style={styles.thumb} />}
          renderBelowThumbComponent={index =>
            index == 0 ? (
              <Text style={styles.amount}>${lowAmount}</Text>
            ) : (
              <Text style={styles.amount}>${highAmount}</Text>
            )
          }
          minimumTrackTintColor={Colors.dark5}
          maximumTrackTintColor={Colors.gray800}
          onValueChange={([low, high]) => {
            setLowAmount(low);
            setHighAmount(high);
          }}
        />
      </View>
      <Text style={styles.title}>Colors</Text>
      <View style={styles.colorRow}>
        {colorCode.map((item, index) => (
          <TouchableOpacity
            onPress={() => setSelectColor(index)}
            style={[styles.colorView, { backgroundColor: item?.color }]}>
            {index == selectColor && (
              <AntDesign
                name="check"
                size={wp(4)}
                color={Colors.darkBackground}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.title}>Colors</Text>
      <View>
        <FlatList
          data={sizes}
          horizontal
          style={{ marginTop: hp(3) }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectSize(index)}
              style={[
                styles.sizeBtn,
                {
                  backgroundColor:
                    index == selectSize ? Colors.dark5 : "transparent",
                  borderColor:
                    index == selectSize ? Colors.dark5 : Colors.gray600,
                },
              ]}>
              <Text style={styles.size}>{item?.size}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Text style={styles.title}>Brands</Text>
      <FlatList
        data={brands}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.line1} />}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={styles.brandBtn}
              onPress={() => setSelectBand(index)}>
              <Text
                style={[
                  styles.brandName,
                  {
                    color: index == selectBrand ? Colors.white : Colors.gray600,
                  },
                ]}>
                {item?.name}
              </Text>
              {index == selectBrand && (
                <AntDesign name="check" size={wp(4)} color={Colors.white} />
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark1,
    flex: 1,
  },
  cartText: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.SemiBold,
    fontSize: 18,
    marginLeft: wp(5),
  },
  backBtn: {
    flexDirection: "row",
  },
  clean: {
    fontFamily: FontFamily.Rubik.SemiBold,
    color: Colors.white,
    marginRight: wp(1),
  },
  cleanBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.dark5,
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.8),
    borderRadius: 25,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(5),
    alignItems: "center",
  },
  line: {
    borderWidth: 0.3,
    borderColor: Colors.gray600,
    marginTop: hp(3),
  },
  title: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.SemiBold,
    fontSize: 22,
    marginHorizontal: wp(5),
    marginTop: hp(4),
  },
  amount: {
    fontFamily: FontFamily.Rubik.Medium,
    color: Colors.gray500,
    right: wp(2),
  },
  silderView: {
    marginHorizontal: wp(5),
    marginTop: hp(2),
    marginBottom: hp(4),
  },
  thumb: {
    width: wp(5),
    height: wp(5),
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: Colors.dark5,
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(55),
    marginHorizontal: wp(5),
    marginTop: hp(2),
  },
  colorView: {
    width: wp(7),
    height: wp(7),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  sizeBtn: {
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "flex-start",
    paddingVertical: hp(1),
    marginRight: wp(2),
    paddingHorizontal: wp(11),
  },
  size: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.SemiBold,
    fontSize: 16,
  },
  brandName: {
    fontFamily: FontFamily.Rubik.Medium,
    fontSize: 15,
  },
  line1: {
    width: wp(90),
    height: hp(0.06),
    alignSelf: "center",
    backgroundColor: Colors.gray700,
  },
  brandBtn: {
    marginVertical: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(5),
  },
});
