import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { hp } from "@utils/responsive";
import {
  ProHomeBusinessSummary,
  ProHomeChipRow,
  ProHomeHeader,
  ProHomeOverView,
} from "@components";
import { Colors } from "@theme";

const ProHome = () => {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <ProHomeHeader />
          <ProHomeChipRow />
          <ProHomeOverView />
          <ProHomeBusinessSummary />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  scroll: {
    backgroundColor: Colors.darkBackground,
    paddingTop: hp(2),
  },
});
