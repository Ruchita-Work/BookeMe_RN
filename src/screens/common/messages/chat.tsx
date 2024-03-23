import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@theme";
import { ChatHeader, ChatMessage } from "@components";
import { hp, wp } from "@utils/responsive";
import {
  BubbleProps,
  GiftedChat,
  IMessage,
  InputToolbarProps,
  MessageImage,
} from "react-native-gifted-chat";
import { useAppSelector } from "@hooks/redux";
import ChatInput from "@components/messages/ChatInput";
import { ImagePickerAsset } from "expo-image-picker";

const Chat = () => {
  const { top, bottom } = useSafeAreaInsets();
  const [messages, setMessages] = useState<IMessage[]>([
    {
      text: "Awesome, thank you!",
      _id: "1",
      createdAt: new Date(),
      user: { _id: 1 },
    },
    {
      text: "I can fit you in at 3:30!",
      _id: "3",
      createdAt: new Date(),
      user: { _id: "65ca43b82dba400fca5a2c96" },
    },
    {
      text: "Hi Harry I was wondering if you had any availability this Friday at 3:30 pm?",
      _id: "2",
      createdAt: new Date(),
      user: { _id: 1 },
    },
  ]);
  const userData = useAppSelector(state => state.auth.userData);

  const loginUserInfo = { _id: userData?.id };

  const renderBubble = useCallback((props: Readonly<BubbleProps<IMessage>>) => {
    if (props.currentMessage.image) {
      return (
        <MessageImage
          {...props}
          imageStyle={{ height: hp(16), aspectRatio: 1.5 }}
        />
      );
    }

    return <ChatMessage {...props} />;
  }, []);

  const onSend = (newMessages: IMessage[]) => {
    setMessages(messages => GiftedChat.append(messages, newMessages));
  };

  const onSelectImage = useCallback((images: ImagePickerAsset[]) => {
    setMessages(messages =>
      GiftedChat.append(messages, [
        {
          _id: Date.now().toString(),
          createdAt: new Date(),
          image: images[0].uri,
          text: "",
          user: { _id: userData.id },
        },
      ]),
    );
  }, []);

  const renderInputToolbar = useCallback(
    (props: InputToolbarProps<IMessage>) => (
      <ChatInput {...props} onSelectImage={onSelectImage} />
    ),
    [],
  );

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <ChatHeader />
      <View style={[styles.scroll, { paddingBottom: bottom }]}>
        <GiftedChat
          listViewProps={{
            showsVerticalScrollIndicator: false,
            horizontal: false,
            contentContainerStyle: { marginRight: wp(3) },
          }}
          messagesContainerStyle={{ paddingBottom: hp(2) }}
          messages={messages}
          renderBubble={renderBubble}
          showAvatarForEveryMessage={true}
          showUserAvatar={false}
          renderAvatar={() => null}
          renderInputToolbar={renderInputToolbar}
          onSend={_messages => onSend(_messages)}
          alwaysShowSend
          user={loginUserInfo}
          maxComposerHeight={hp(6)}
          bottomOffset={bottom}
          placeholder="Type a message"
        />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  scroll: {
    flex: 1,
    backgroundColor: Colors.neutral800,
    marginTop: hp(1),
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
  },
});
