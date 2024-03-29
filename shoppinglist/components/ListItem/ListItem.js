import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  listItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  listItemText: {
    fontSize: 18
  }
});

export default ListItem;