import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";
import { Message } from "../../types";
import React from "react";
import moment from "moment";

export type chatMessageProps = {
  message: Message;
};
const ChatMessage = (props: chatMessageProps) => {
  const { message } = props;

  const checkMyMessage = () =>{
    return message.user.id === 'u1'
  }

  

  return (
    <View style={styles.container}>
      <View style={{...styles.messageBox, 
        backgroundColor : checkMyMessage() ? '#DCF8C5' : '#e5e5e5',
        marginRight:  checkMyMessage() ? 0 : 50,
        marginLeft:  checkMyMessage() ? 50 : 0,

      }}>
        {!checkMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    padding:10,
  },
  messageBox: {
    borderRadius:8,
    padding:10,
  },
  name: {
      color : Colors.light.tint,
      fontWeight:'bold',
      marginBottom:5
  },
  message: {
     
  },
  time: {
      alignSelf:'flex-end',
      color:'grey',
  }
  
  
});
