import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';

const {width, height} = Dimensions.get('window');

const ProfileScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <View style={styles.userDetail}>
          <Text style={styles.userName}>Sandip Singha</Text>
        </View>
      </View>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'My profile',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="menuunfold"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    tabBarIcon: props => (
      <MaterialIcons name="person-outline" size={30} color={props.color} />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
  },
  image: {
    width: width / 3,
    height: 150,
    borderRadius: 10,
  },
  userDetail: {
    paddingHorizontal: 20,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ProfileScreen;
