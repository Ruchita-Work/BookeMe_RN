import React, { FC, useContext } from "react";
import { StyleSheet } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import BookServiceSheetService from "@components/bookService/ui/BookServiceSheetService";
import { hp } from "@utils/responsive";
import { BookServiceContext } from "@context";

const data = [
  { price: "$50.00+", time: "1h", title: "Men's Haircut", isAdded: true },
  {
    price: "$45.00+",
    time: "30min",
    title: "Men's Haircut with beard",
    isAdded: false,
  },
  {
    price: "$45.00+",
    time: "30min",
    title: "Men's Haircut with beard",
    isAdded: false,
  },
];

const BookServiceSheetServicesList: FC = () => {
  const { handleOpenSelectStaff } = useContext(BookServiceContext);

  const handleOnPressAddService = () => {
    // navigation.navigate("ClientBookingAddService");
    handleOpenSelectStaff();
  };

  return (
    <BottomSheetFlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <BookServiceSheetService {...item} onPress={handleOnPressAddService} />
      )}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.listContent}
    />
  );
};

export default BookServiceSheetServicesList;

const styles = StyleSheet.create({
  listContent: {
    rowGap: hp(4),
    paddingTop: hp(1),
  },
});
