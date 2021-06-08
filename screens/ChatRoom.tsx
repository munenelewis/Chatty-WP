import React, { Component } from "react";

import { Text } from "react-native";
import {useRoute} from "@react-navigation/native"

const ChatRoomScreen = () => {
    const route  = useRoute()
    console.log('====================================');
    console.log(route);
    console.log('====================================');
  return <Text>Chat Room</Text>;
};

export default ChatRoomScreen;
