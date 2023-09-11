import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Hello World</Text>
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
  content:{
    fontSize: 40,
    color: "black",
    fontStyle: "italic",
    fontWeight: "bold",
  }
})