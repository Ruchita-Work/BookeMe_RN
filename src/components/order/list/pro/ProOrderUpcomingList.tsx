import React, { FC, useContext } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { FontFamily, Colors } from "@theme";
import { hp, wp } from "@utils/responsive";
import AppointmentItem from "@components/appointment/AppointmentItem";
import UpcomingOrderActions from "@components/order/ui/UpcomingOrderActions";
import { OrderContext } from "@context";

const sectionsdata = [
  { data: [1, 2, 3], title: "Today, Sep 28 2021" },
  { data: [1, 2], title: "Saturday, Oct 2 2021" },
];

const ProOrderUpcomingList: FC = () => {
  const { openReAssignSheet } = useContext(OrderContext);

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={sectionsdata}
      renderItem={() => (
        <AppointmentItem
          renderFooter={() => (
            <UpcomingOrderActions onPressReassign={openReAssignSheet} />
          )}
        />
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionTitle}>{section.title}</Text>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.sectionContent}
    />
  );
};

export default ProOrderUpcomingList;

const styles = StyleSheet.create({
  sectionTitle: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
    paddingTop: hp(3),
    paddingBottom: hp(2),
    backgroundColor: Colors.neutral800,
  },
  separator: {
    height: hp(1.5),
  },
  sectionContent: {
    paddingBottom: hp(14),
    paddingHorizontal: wp(5),
  },
});
