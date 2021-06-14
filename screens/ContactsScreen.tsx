import * as Contacts from "expo-contacts";
import * as React from "react";

import { FlatList, Text, View } from "react-native";

import ChatListItem from "../components/ChatListItem";
import ContactListItem from "../components/contactListItem";
import EditScreenInfo from "../components/EditScreenInfo";
import NewMessageButton from "../components/floatingButton";
import { StyleSheet } from "react-native";
import users from "../data/Users";

export default function () {
  const [contacts, setContacts] = React.useState({});

  React.useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data;
          // console.log('====================================');
          // console.log(contact);
          // console.log('====================================');
          const contactList = contact.map((element) => {
            return {
              contactType: element.contactType,
              firstName: element.firstName,
              id: element.id,
              imageAvailable: element.imageAvailable,
              lastName: element.lastName,
              lookupKey: element.socialProfiles,
              name: element.name,
            };
          });

          setContacts(contact);
        }
      }
    })();
  }, []);

  React.useEffect(() => {
    const data = Object.values(contacts);

  }, [contacts]);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={Object.values(contacts)}
        renderItem={({ item }) => (
          <ContactListItem user={item} keyExtractor={(item: any) => item.id} />
        )}
      />

      {/* {Object.keys(contacts).map((item, i) => (
          <ContactListItem user={item} keyExtractor={(item: any) => item.id} />
      ))} */}
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
