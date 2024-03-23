import React, { forwardRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "@utils/responsive";
import { AppImages } from "@assets";
import RadioButton from "@components/ui/RadioButton";
import ButtonComponent from "@components/button/Button";
import AppSheet from "@components/ui/AppSheet";
import styles from "@components/explore/searchResults/sheet/styles";
import { FontFamily } from "@theme";

type FiltersType = {
  sortBy: Set<string>;
  others: Set<string>;
};

interface IExploreSearchFilterSheetProps {
  initialFilters?: FiltersType;
  onConfirm: () => void;
  onChange: (type: keyof FiltersType, value: boolean) => void;
  onClear: () => void;
}

const filtersData = {
  sortBy: ["Best Selling", "Top Viewed"],
  others: ["MakeUp", "Massage", "Hair"],
};

const ExploreSearchFilterSheet = forwardRef<
  BottomSheet,
  IExploreSearchFilterSheetProps
>(({ initialFilters, onChange, onClear, onConfirm }, ref) => {
  const [selectedFilters, setSelectedFilters] = useState<FiltersType>({
    others: initialFilters?.others.size
      ? new Set(initialFilters.others)
      : new Set(),
    sortBy: initialFilters?.sortBy.size
      ? new Set(initialFilters.sortBy)
      : new Set(),
  });

  const { bottom } = useSafeAreaInsets();

  const handleSheetClose = () => {
    ref.current?.close();
  };

  const handleOnSelectFilterItem = (
    type: keyof FiltersType,
    newValue: boolean,
    item: string,
  ) => {
    onChange(type, newValue);
    setSelectedFilters(prevValue => {
      const currentSet = prevValue[type];
      if (currentSet.has(item)) {
        currentSet.delete(item);
        return {
          ...prevValue,
          [type]: currentSet,
        };
      } else {
        return {
          ...prevValue,
          [type]: currentSet.add(item),
        };
      }
    });
  };

  const renderFilterItem = (
    item: string,
    index: number,
    type: keyof FiltersType,
  ) => {
    const isSelected = selectedFilters[type].has(item);

    return (
      <View style={styles.filterItem} key={`${item}-${index}`}>
        <Text style={styles.filterItemTitle}>{item}</Text>
        <RadioButton
          value={isSelected}
          onChangeValue={newValue => {
            handleOnSelectFilterItem(type, newValue, item);
          }}
        />
      </View>
    );
  };

  const handleOnPressClear = () => {
    onClear();
    setSelectedFilters({
      others: new Set(),
      sortBy: new Set(),
    });
  };

  const handleOnPressConfirm = () => {
    onConfirm();
    handleSheetClose();
  };

  return (
    <AppSheet ref={ref} onClose={handleSheetClose}>
      <View style={styles.sheetContentContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={handleSheetClose}>
          <Image source={AppImages.close} style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <Text style={styles.sectionTitle}>Sort by</Text>
        {filtersData.sortBy.map((item, index) =>
          renderFilterItem(item, index, "sortBy"),
        )}
        <Text style={styles.sectionTitle}>Others</Text>
        {filtersData.others.map((item, index) =>
          renderFilterItem(item, index, "others"),
        )}
        <View style={[styles.footerRow, { paddingBottom: bottom + hp(2) }]}>
          <ButtonComponent
            text="Clear"
            onPress={handleOnPressClear}
            buttonStyle={styles.clearButton}
            textStyle={styles.clearButtontext}
          />
          <ButtonComponent
            text="Show 45+ Places"
            onPress={handleOnPressConfirm}
          />
        </View>
      </View>
    </AppSheet>
  );
});

export default ExploreSearchFilterSheet;
