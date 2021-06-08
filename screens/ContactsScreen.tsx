import * as React from "react";

import { FlatList, Text, View } from "react-native";

import ChatListItem from "../components/ChatListItem";
import ContactListItem from "../components/contactListItem";
import EditScreenInfo from "../components/EditScreenInfo";
import NewMessageButton from "../components/floatingButton";
import { StyleSheet } from "react-native";
import users from "../data/Users";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} keyExtractor={(item: any) => item.id} />}
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
