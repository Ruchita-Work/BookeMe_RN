import React, { forwardRef, useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import AppSheet from "@components/ui/AppSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import Separator from "@components/ui/Separator";
import AddServiceDetailsForm from "@components/addService/serviceDetails/AddServiceDetailsForm";
import AddServiceDetailsFieldForm from "@components/addService/serviceDetails/AddServiceDetailsFieldForm";

const AddServiceDetailsSheet = forwardRef<BottomSheet, unknown>(
  (props, ref) => {
    const [isAddFieldShown, setIsAddFieldShown] = useState(false);

    const handleAddMoreField = () => {
      setIsAddFieldShown(true);
    };

    const handleOnConfirmAddField = () => {
      setIsAddFieldShown(false);
    };

    const handleOnContinue = () => {
      ref.current?.close();
    };

    return (
      <AppSheet
        onClose={() => Keyboard.dismiss()}
        ref={ref}
        snapPoints={[hp(50)]}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {isAddFieldShown ? "Add Field " : "Add Product/Service Details"}
          </Text>
          <Separator color={Colors.dark3} />
          {isAddFieldShown ? (
            <AddServiceDetailsFieldForm onSave={handleOnConfirmAddField} />
          ) : (
            <AddServiceDetailsForm
              onAddMoreField={handleAddMoreField}
              onContinue={handleOnContinue}
            />
          )}
        </View>
      </AppSheet>
    );
  },
);

export default AddServiceDetailsSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark2,
    paddingHorizontal: wp(6),
  },
  title: {
    color: Colors.neutral200,
    textAlign: "center",
    fontSize: FontSizes.size24,
    marginVertical: hp(1),
    fontFamily: FontFamily.Urbanist.Bold,
  },
});
