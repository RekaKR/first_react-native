import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header/Header'
import ListItem from './components/ListItem/ListItem'
import AddItem from './components/AddItem/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Milk' },
    { id: uuid.v4(), text: 'Eggs' },
    { id: uuid.v4(), text: 'Bread' },
    { id: uuid.v4(), text: 'Juice' }
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1
  }
});

export default App;