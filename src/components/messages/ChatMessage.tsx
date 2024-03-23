import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BubbleProps, IMessage } from "react-native-gifted-chat";
import { useAppSelector } from "@hooks";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import moment from "moment";

const ChatMessage: FC<Readonly<BubbleProps<IMessage>>> = props => {
  const userData = useAppSelector(state => state.auth.userData);
  const userId = userData?.id;
  const isSameUserMessage = props.currentMessage?.user?._id === userId;

  return (
    <View
      style={
        isSameUserMessage
          ? styles.senderMessageBubble
          : styles.receiverMessageBubble
      }>
      <Text
        style={
          isSameUserMessage
            ? styles.senderMessageText
            : styles.receiverMessageText
        }>
        {props.currentMessage?.text}
      </Text>
      <Text style={styles.dateTimeText}>
        {moment(props.currentMessage?.createdAt).format("hh:mm a")}
      </Text>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  senderMessageBubble: {
    backgroundColor: Colors.ebony75,
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
    borderRadius: wp(2.5),
    marginVertical: hp(0.2),
    maxWidth: wp(70),
  },
  receiverMessageBubble: {
    backgroundColor: Colors.neutral700,
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
    borderRadius: wp(2.5),
    marginVertical: hp(0.2),
    maxWidth: wp(70),
  },
  senderMessageText: {
    fontSize: FontSizes.size15,
    color: Colors.darkBackground,
    fontFamily: FontFamily.Poppins.Regular,
    lineHeight: hp(2.7),
  },
  receiverMessageText: {
    fontSize: FontSizes.size15,
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Regular,
    lineHeight: hp(2.7),
  },
  dateTimeText: {
    fontSize: FontSizes.size11,
    color: Colors.neutral400,
    textAlign: "right",
  },
});
