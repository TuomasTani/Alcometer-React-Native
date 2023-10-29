import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderRadius: 0,
      margin: 0,
      padding: 10,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "flex-start",
      flexWrap: "wrap",
      justifyContent: 'center',
    },
  
    text: {
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black'
    },
  
    texts: {
      color: '#4682b4',
      fontWeight: 'bold',
      fontSize: 25
  
    },
  
    textResult: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  
    },
  
    header: {
      fontSize: 55,
      fontStyle: 'italic',
      padding: 5,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#4682b4',
      textDecorationLine: 'underline'
    },
  
    textInput: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 5
  
},

buttonDark: {
  fontSize: 25,
  fontStyle: 'italic',
  padding: 5,
  margin: 6,
  borderWidth: 2,
  borderRadius: 10,
}


})

export { styles };