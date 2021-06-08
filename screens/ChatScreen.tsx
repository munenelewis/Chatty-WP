import * as React from "react";

import { FlatList, Text, View } from "react-native";

import ChatListItem from "../components/ChatListItem";
import EditScreenInfo from "../components/EditScreenInfo";
import { StyleSheet } from "react-native";
import chatRooms from "../data/ChatRooms";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={chatRooms}
        renderItem={({ item }) => (
          <ChatListItem chatRoom={item} keyExtractor={(item: any) => item.id} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
