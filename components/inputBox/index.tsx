import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Colors from "../../constants/Colors";

const InputBox = () => {
  const [message, setMessage] = useState("");
  const onMicrophone = () => {
      console.warn(message,'Microphone');
  }

  const onSendPress = () =>{
    console.warn(message,'Onpress');
  }
  const onPress = () => {
      if(!message){
          onMicrophone();
      }else{
          onSendPress();
      }
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="gray" />
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="Type a message"
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={22} color="gray" style={styles.icons} />
        {!message && (
          <Fontisto name="camera" ize={28} color="gray" style={styles.icons} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons
              name="microphone"
              size={28}
              color="white"
              style={styles.icons}
            />
          ) : (
            <MaterialIcons name="send" size={28} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icons: {
    marginHorizontal: 5,
  },
});

export default InputBox;
