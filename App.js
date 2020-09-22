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
    <View style={{padding: 50}}>
      {Platform.OS === 'ios' && <ProgressViewIOS progress={progress} />}
      {Platform.OS === 'android' && 
      <ProgressBarAndroid
        progress={progress}
        styleAttr="Horizontal"
        indeterminate={false}
        color="blue"
      />}
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="click me" onPress={onButtonPress} />
      <Text>Height: {height}</Text>
      <Text>Witdh: {width}</Text>
        <Text>OS: {Platform.OS}</Text>
    </View>
  )

}

