import { ColorSchemeName, StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width:'100%',
    justifyContent:'space-around',
    padding:10

  },
  leftContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    // marginRight:,
    borderRadius:50
  },
  midContainer:{
    justifyContent:'space-evenly',
  },
  username:{
      fontWeight: "bold",
      fontSize:16
  },
  lastMessage:{
      fontSize:16,
      color: "grey"
  },
  time:{
    fontSize:16,
    color: "grey"
  }
})

export default styles
