import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';

const AuthenticateButton = props => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    backgroundColor: '#ff007f',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 30,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 3,
  },
});

export default AuthenticateButton;
