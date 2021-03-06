import React, { useState } from 'react';

import { 
  View, 
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window')

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState("blue")

  return (
    <View style={styles.container, {backgroundColor}}>
      <Text 
        style={styles.button}
        onPress={()=> setBackgroundColor("green")}
      >green</Text>
      <Text 
        style={styles.button}
        onPress={()=> setBackgroundColor("red")}
      >red</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 30,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center",
    margin: 10,
    padding: 10,
  },
})