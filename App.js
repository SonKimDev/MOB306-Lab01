import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.content}>Content</Text>
      <Text style={styles.bottom}>Bottom</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize: 70,
    color: "red",
    fontStyle: "italic",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  content:{
    fontSize: 50,
    color: "green",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  bottom:{
    fontSize: 30,
    color: "blue",
    fontStyle: "italic",
    fontWeight: "bold",
  },
})