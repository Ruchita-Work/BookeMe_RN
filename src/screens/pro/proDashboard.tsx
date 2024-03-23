import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp } from "@utils/responsive";
import BackButton from "@components/ui/BackButton";
import ProDashboardProfileTile from "@components/pro/dashboard/ProDashboardProfileTile";
import ProDashboardOverView from "@components/pro/dashboard/ProDashboardOverView";
import ProDashboardAppointments from "@components/pro/dashboard/ProDashboardAppointments";
import ProDashboardOrders from "@components/pro/dashboard/ProDashboardOrders";
import ProDashboardEarningReport from "@components/pro/dashboard/ProDashboardEarningReport";
import { Colors } from "@theme";

const ProDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton containerStyle={{ marginTop: hp(2) }} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <ProDashboardProfileTile />
        <ProDashboardOverView />
        <ProDashboardAppointments />
        <ProDashboardAppointments isUpcomingAppointments />
        <ProDashboardOrders />
        <ProDashboardEarningReport />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  scroll: {
    backgroundColor: Colors.darkBackground,
    paddingVertical: hp(2),
  },
});
