import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddServiceDetailInput from "@components/input/AddServiceDetailInput";
import { Entypo } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import ButtonComponent from "@components/button/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IAddServiceDetailsFieldFormProps {
  onSave: (data: {
    name: string;
    placeholder: string;
    fieldType: string;
  }) => void;
}

const AddServiceDetailsFieldForm: FC<IAddServiceDetailsFieldFormProps> = ({
  onSave,
}) => {
  const { bottom } = useSafeAreaInsets();
  const [name, setName] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");

  return (
    <View style={[styles.container, { marginBottom: bottom + hp(1) }]}>
      <View style={styles.detailsInputContainer}>
        <AddServiceDetailInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <AddServiceDetailInput
          value={placeholderText}
          onChangeText={setPlaceholderText}
          placeholder="Placeholder"
        />
        <TouchableOpacity style={styles.addMoreButton} onPress={() => {}}>
          <Text style={styles.addMoreButtonTitle}>Field Type</Text>
          <Entypo name="chevron-down" color={Colors.white} size={wp(5)} />
        </TouchableOpacity>
      </View>
      <ButtonComponent
        text="Save"
        buttonStyle={styles.saveButton}
        onPress={() =>
          onSave({ name, placeholder: placeholderText, fieldType: "text" })
        }
      />
    </View>
  );
};

export default AddServiceDetailsFieldForm;

const styles = StyleSheet.create({
  detailsInputContainer: {
    rowGap: hp(2),
    marginTop: hp(1),
    paddingVertical: hp(2),
    paddingHorizontal: wp(2.5),
    borderWidth: 1,
    borderColor: Colors.white + 20,
    borderRadius: wp(3),
  },
  addMoreButton: {
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    justifyContent: "space-between",
  },
  addMoreButtonTitle: {
    fontFamily: FontFamily.Urbanist.Medium,
    fontSize: FontSizes.size18,
    color: Colors.white,
  },
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  saveButton: {
    width: "100%",
  },
});
