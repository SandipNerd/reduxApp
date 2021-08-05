import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignInButton = props => {
  return (
    <TouchableNativeFeedback onPress={props.click}>
      <View
        style={[styles.buttonContainer, {backgroundColor: props.backColor}]}>
        <FontAwesome name={props.iconName} color={props.iconColor} size={20} />
        <Text style={[styles.title, {color: props.iconColor}]}>
          {props.title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    width: 150,
    paddingHorizontal: 30,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
  },
  title: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default SignInButton;
