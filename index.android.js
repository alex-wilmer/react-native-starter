import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let reducer = (state = 'logged out', action) => {
  switch (action.type) {
    case 'login':
      return 'logged in'
    default:
      return state

  }
}

let store = createStore(reducer)

import { AppRegistry } from 'react-native'
import App from './components/App'

let StatefulApp = () =>
  <Provider store={store}>
    <App />
  </Provider>

AppRegistry.registerComponent('FoodFight', () => StatefulApp)
