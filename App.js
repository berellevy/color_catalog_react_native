import React, { useState } from 'react';

import { 
  Text,
  View, 
  ActivityIndicator, 
  ProgressViewIOS, 
  ProgressBarAndroid,
  Button, 
  Alert,
  Dimensions,
  Platform,
  StyleSheet 
} from 'react-native';

import picBiscuit from './assets/biscuit.jpg'

const { height, width } = Dimensions.get('window')

export default function App() {
  const [progress, setProgress] = useState(0.0)

  const bumpProgress = () => {
    if (progress >= 1) {
      setProgress(0)
    } else {
      setProgress(progress + 0.1)
    }
  }

  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} boop!`);
    bumpProgress()
  }
  return (
    <View style={styles.page}>
     <Text style={styles.text}>red</Text>
     <Text style={[styles.text, styles.selectedText]}>green</Text>
     <Text style={styles.text}>blue</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 40,
    backgroundColor: "#DDD",
  },
  text: {
    textAlign: "center",
    fontSize: 22 ,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5, 
  },
  selectedText: {
    alignSelf: "flex-end",
    backgroundColor: "red",
    color: "yellow",
  },
})