import React, { useState } from 'react';

import { 
  View, 
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window')

import picBiscuit from './assets/biscuit.jpg'
import picJungle from './assets/jungle.jpg'

export default function App() {

  return (
    <View style={styles.page}>
      <Image style={styles.image} source={picBiscuit} />
      <Image style={styles.image} source={picJungle} />
    </View>
  )

}

const styles = StyleSheet.create({
  page: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    borderRadius: 50,
    margin: 10,
    width: width - 10,
  },
})