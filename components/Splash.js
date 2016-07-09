import React from 'react'

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

let Splash = ({ onForward }) =>
  <View style={styles.main}>
    <Text style={styles.title}>Food Fight!</Text>

    <TextInput style={styles.input} />
    <TextInput style={styles.input} />
    
    <TouchableHighlight
      style={styles.loginButton}
      onPress={onForward}
    >
      <Text style={styles.buttonText}>LOGIN</Text>
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
  loginButton: {
    marginTop: 80,
    padding: 15,
    // borderRadius: 0,
    // borderTopWidth: 3,
    // borderBottomWidth: 3,
    // borderTopColor: `white`,
    // borderBottomColor: `white`,
    // borderLeftWidth: 3,
    // borderRightWidth: 3,
    // borderLeftColor: `white`,
    // borderRightColor: `white`,
  },
  buttonText: {
    color: `white`,
  },
  input: {
    width: 300
  }
})

export default Splash
