import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

export default function EventHandlers() {
  const [counter, setCounter] = useState(0);

    return (
      <View style={{ padding: 20, width: '100%', alignSelf: "center", borderBottomWidth: 1, borderBottomColor: '#000' }}>
        <Text>{counter}</Text>
        <Button onPress={() => setCounter(prevState => prevState + 1) } title="Press me" />
      </View>
    )
}
