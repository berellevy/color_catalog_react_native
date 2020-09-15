import React, { useState } from 'react';

import { 
  View, 
  ActivityIndicator, 
  ProgressViewIOS, 
  Button 
} from 'react-native';

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
    console.log(`${new Date().toLocaleTimeString()} boop!`);
    bumpProgress()
  }
  return (
    <View style={{padding: 50}}>
      <ProgressViewIOS progress={progress} />
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="click me" onPress={onButtonPress} />
    </View>
  )

}