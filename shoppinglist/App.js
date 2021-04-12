import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ backgroundColor: 'pink', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'lightblue', backgroundColor: 'white', fontSize: 40, borderRadius: 100 / 3, paddingTop: 40, paddingRight: 10, paddingBottom: 40, paddingLeft: 10 }}>Unikornis hercegnő</Text>
    </View >
  )
}

export default App;