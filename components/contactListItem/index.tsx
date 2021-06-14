import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import React from "react";
import { User } from "../../types";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type ContactListItemPropsProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemPropsProps) => {
  const { user } = props;

  console.log("====================================");
  console.log(user, "fsdfdsfsdf");
  console.log("====================================");
  const navigation = useNavigation();

  const onClick = () => {};

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          {user.imageAvailable ? (
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          ) : (
            <Image
              source={{
                uri: "https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
              }}
              style={styles.avatar}
            />
          )}

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name ? user.name : user.firstName || user.lastName}</Text>
            <Text numberOfLines={2} style={styles.status}>
              {user.status ? user.status : "Hey there am using Chatty"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  lefContainer: {
    flexDirection: "row",
    width: "80%",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    fontWeight: "200",
    fontSize: 16,
  },
});
