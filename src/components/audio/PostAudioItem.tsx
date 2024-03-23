import React, { FC, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppImages } from "@assets";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

interface IPostAudioItemProps {
  containerStyle?: ViewStyle;
  showAudioControls?: boolean;
}

const PostAudioItem: FC<IPostAudioItemProps> = ({
  containerStyle,
  showAudioControls = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    // Load Sound
    setIsLoading(true);
    Audio.Sound.createAsync(require("../../assets/dummyAudio.mp3"))
      .then(({ sound }) => {
        soundRef.current = sound;
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      // Remove Audio playing if component is unfocused
      if (soundRef.current?.unloadAsync) {
        soundRef.current?.unloadAsync().then(() => {
          soundRef.current = null;
        });
      }
    };
  }, []);

  const playSound = async () => {
    if (soundRef.current) {
      soundRef.current?.playAsync();
    }
  };

  const pauseSound = async () => {
    if (soundRef.current) {
      soundRef.current?.pauseAsync();
    }
  };

  const onPressAudioPlayPause = () => {
    if (isPlaying) {
      pauseSound();
    } else {
      playSound();
    }
    setIsPlaying(prev => !prev);
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, containerStyle]}
      colors={["#433F4C90", "#222222"]}
      locations={[0.25, 0.6]}>
      <LinearGradient
        colors={["#7A78FF99", "#E478FF99"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.musicIconGradient}>
        <Image source={AppImages.music} style={styles.musicIcon} />
      </LinearGradient>
      <View style={styles.content}>
        <Text style={styles.title}>Show Me The Money</Text>
        <Text style={styles.subTitle}>Original sound</Text>
      </View>
      {isLoading && <ActivityIndicator />}
      {!!showAudioControls && !isLoading && (
        <TouchableOpacity onPress={onPressAudioPlayPause}>
          {isPlaying ? (
            <Ionicons
              name="pause-circle-outline"
              size={wp(10)}
              color={Colors.white}
            />
          ) : (
            <Ionicons
              name="play-circle-outline"
              size={wp(10)}
              color={Colors.white}
            />
          )}
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default PostAudioItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: wp(4),
    backgroundColor: "#433F4C",
    width: wp(90),
    alignSelf: "center",
  },
  musicIconGradient: {
    height: wp(10),
    width: wp(10),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(1.5),
  },
  musicIcon: {
    height: wp(5),
    width: wp(5),
  },
  content: {
    flex: 1,
    marginHorizontal: wp(3),
    rowGap: hp(0.5),
  },
  title: {
    color: Colors.white,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Inter.Regular,
  },
  subTitle: {
    color: Colors.white,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Inter.Regular,
  },
});
