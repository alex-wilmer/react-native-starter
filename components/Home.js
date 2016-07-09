import React from 'react'
import { connect } from 'react-redux'

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

let Home = ({ message, dispatch }) =>
  <View style={styles.main}>
    <Text style={styles.title}>Main Page</Text>
    <Text>You are {message}</Text>
    <TouchableHighlight
      style={styles.loginButton}
      onPress={() => dispatch({ type: 'login' })}
    >
      <Text style={styles.buttonText}>LOGIN!!</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.loginButton}
      onPress={() => console.log('test')}
    >
      <Text style={styles.buttonText}>Entrees</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.loginButton}
      onPress={() => console.log('test')}
    >
      <Text style={styles.buttonText}>Tacos</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.loginButton}
      onPress={() => console.log('test')}
    >
      <Text style={styles.buttonText}>Salad</Text>
    </TouchableHighlight>
  </View>

const styles = StyleSheet.create({
  main: {
    backgroundColor: `rgb(212, 59, 18)`,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: `center`,
  },
  title: {
    color: `white`,
    fontSize: 40,
    fontWeight: `bold`
  },
  container: {
    flex: 1
  },
  buttonText: {
    color: `white`,
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

export default connect(state => ({ message: state }))(Home)
