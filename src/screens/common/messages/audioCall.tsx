import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { useAppNavigation } from "@hooks";
import { CallActionButton, CallingAvatar } from "@components";

const AudioCall: FC = () => {
  const { navigation } = useAppNavigation();

  const [isCalling, setIsCalling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsCalling(true);
  }, []);

  const onPressEndCall = () => {
    navigation.goBack();
  };
  const onPressMuteCall = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.callingText}>Calling...</Text>
      <Text style={styles.name}>Harry Gardner</Text>
      <CallingAvatar containerStyle={styles.callingAvatarContainer} />

      <View style={styles.footer}>
        <CallActionButton
          title="End"
          buttonStyle={styles.endButton}
          onPress={() => onPressEndCall()}>
          <MaterialCommunityIcons
            name="phone-hangup"
            size={wp(8)}
            color={Colors.white}
          />
        </CallActionButton>
        <CallActionButton
          title="Mute"
          onPress={() => onPressMuteCall()}
          buttonStyle={[
            styles.muteButton,
            isMuted && { backgroundColor: Colors.primary },
          ]}>
          <Feather name="mic-off" size={wp(6)} color={Colors.white} />
        </CallActionButton>
      </View>
    </SafeAreaView>
  );
};

export default AudioCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    alignItems: "center",
  },
  callingText: {
    color: Colors.neutral200,
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Poppins.Regular,
    marginTop: hp(5),
  },
  name: {
    color: Colors.neutral200,
    fontSize: FontSizes.size22,
    fontFamily: FontFamily.Poppins.Medium,
    marginTop: hp(1),
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(45),
    marginTop: "auto",
    marginBottom: hp(9),
  },
  endButton: {
    backgroundColor: Colors.red400,
  },
  muteButton: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  callingAvatarContainer: {
    marginTop: hp(18),
  },
});
