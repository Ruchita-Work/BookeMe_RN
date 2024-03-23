import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "@theme";
import {
  AddServiceQuickVideoImageContent,
  AddServiceMediaPreviewContent,
  AddServiceDetailsSheet,
} from "@components";
import { AddServiceContext } from "@context";
import { useAppNavigation } from "@hooks";

const ProAddService = () => {
  const { assetUri, cancelMediaSelectionHandler, serviceDetailsSheetRef } =
    useContext(AddServiceContext);
  const { navigation } = useAppNavigation();

  useEffect(() => {
    navigation.addListener("beforeRemove", () => {
      cancelMediaSelectionHandler();
    });
  }, []);

  let content = null;

  if (assetUri) {
    content = <AddServiceMediaPreviewContent />;
  } else {
    content = <AddServiceQuickVideoImageContent />;
  }

  return (
    <View style={styles.container}>
      {content}
      <AddServiceDetailsSheet ref={serviceDetailsSheetRef} />
    </View>
  );
};

export default ProAddService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark1,
  },
});
