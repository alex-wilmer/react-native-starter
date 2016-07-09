import React from 'react'

import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Camera from 'react-native-camera'

let camera

let CameraView = () =>
  <View style={styles.container}>
    <Camera
      ref={cam => camera = cam}
      style={styles.preview}
      aspect={Camera.constants.Aspect.fill}
    >
      <Text style={styles.capture} onPress={() => takePicture()}>
        [CAPTURE]
      </Text>
    </Camera>
  </View>

let takePicture = () =>
  camera.capture()
    .then(data => console.log(data))
    .catch(err => console.error(err))

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})

export default CameraView
