import { FlatList, ImageBackground, Text } from "react-native";
import React, { Component } from "react";

import BG from "../assets/images/BG.png";
import ChatMessage from "../components/chatMessage";
import ChatRoomData from "../data/Chats";
import InputBox from "../components/inputBox";
import styles from "../components/ChatListItem/styles";
import { useRoute } from "@react-navigation/native";

const ChatRoomScreen = () => {
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
