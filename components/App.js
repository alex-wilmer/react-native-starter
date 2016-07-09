import React, { Component } from 'react'

import {
  Dimensions,
  Navigator,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import Splash from './Splash'
import Home from './Home'
import CameraView from './CameraView'

let App = () =>
  <Navigator
    initialRoute={{ index: 0 }}
    renderScene={
      (route, navigator) => {
        switch (route.index) {
          case 1:
            return <Home />
          default:
            return (
              <Splash
                onForward={() => navigator.push({ index: route.index + 1 })}
              />
            )
        }
      }
    }
  />

export default App
