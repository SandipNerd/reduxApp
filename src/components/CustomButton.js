import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

const CustomButton = props => {
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
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#ff007f',
    marginVertical: 30,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
});

export default CustomButton;
