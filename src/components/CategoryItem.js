import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const CategoryItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.navigateTo}>
      <ImageBackground style={styles.image} source={{uri: props.image}}>
        {/* <Text style={styles.title}>{props.title}</Text> */}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height / 4,
    justifyContent: 'center',
  },
  title: {
    textAlignVertical: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 30,
    color: '#fff',
  },
});

export default CategoryItem;
