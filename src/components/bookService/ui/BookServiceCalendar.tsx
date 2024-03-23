import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";

interface IBookServiceCalendarProps {
  selectedDate: string;
}

const BookServiceCalendar: FC<IBookServiceCalendarProps> = ({
  selectedDate,
}) => {
  return (
    <Calendar
      onDayPress={date => console.log(date)}
      current={selectedDate}
      firstDay={0}
      style={styles.calendar}
      theme={{
        arrowColor: Colors.neutral400,
        monthTextColor: Colors.neutral200,
        calendarBackground: "transparent",
        textDisabledColor: Colors.neutral600,
        dayTextColor: Colors.neutral200,
        selectedDayBackgroundColor: Colors.primary,
        textMonthFontFamily: FontFamily.Poppins.Regular,
        textMonthFontSize: FontSizes.size20,
        textMonthFontWeight: "600",
        todayTextColor: Colors.neutral200,
        textDayHeaderFontFamily: FontFamily.Poppins.Regular,
        todayBackgroundColor: Colors.neutral600,
        weekVerticalMargin: hp(0.3),
      }}
      markedDates={{ [selectedDate]: { selected: true } }}
    />
  );
};

export default BookServiceCalendar;

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "transparent",
    marginHorizontal: wp(1),
  },
});
