import { Image, Text, View } from "react-native";

import { ChatRoom } from "../../types";
import React from "react";
import styles from "./styles";

export type chatListItemProps = {
  chatRoom: ChatRoom;
};
const ChatListItem = (props: chatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.username} > {user.name} </Text>
        <Text style={styles.lastMessage} > {chatRoom.lastMessage.content}</Text>
      </View>

      {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
      <Text style={styles.time} >yesterday</Text>
    </View>
  );
};

export default ChatListItem;
