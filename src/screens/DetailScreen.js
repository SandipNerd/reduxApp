import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

const DetailScreen = props => {
  const {item} = props.route.params;
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.image}
        source={{uri: item.image}}
        resizeMode="cover">
        <View style={styles.imageHeader}>
          <Entypo
            name="cross"
            size={30}
            color="#fff"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <View style={styles.icon}>
            <Entypo name="heart-outlined" size={30} color="#000" />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageHeader: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff007f',
  },
  icon: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;
