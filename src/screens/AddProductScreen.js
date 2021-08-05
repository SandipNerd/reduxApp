import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

import CustomButton from '../components/CustomButton';

const AddProductScreen = props => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formInput}>
          <Text style={styles.formIdentifier}>Product Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.formIdentifier}>Product Description</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.formIdentifier}>Image Url</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.formIdentifier}>Category</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.formIdentifier}>Price</Text>
          <TextInput style={styles.input} />
        </View>
        <CustomButton title="Add Product" />
      </ScrollView>
    </View>
  );
};

export const screenOptions = () => {
  return {
    headerTitle: 'Add New Product',
    headerShown: true,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  formInput: {
    marginTop: 10,
  },
  formIdentifier: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ff007f',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default AddProductScreen;
