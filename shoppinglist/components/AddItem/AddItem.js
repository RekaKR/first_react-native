import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Add Item..." />
      <TouchableOpacity stlye={styles.btn}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />  Add Item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    margin: 5,
    padding: 9
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default AddItem;