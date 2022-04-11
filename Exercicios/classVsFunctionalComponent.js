import React, { Component, useState } from 'react';
import { View, Text, Button } from 'react-native';

export class Exemplo extends Component {
  constructor(props) {
    super(props);
    this.state = {contador: 0, contador2: 100};
  }

  handleButton() {
    this.setState({
      contador: this.state.contador + 1,
      contador2: this.state.contador2 + 1,
    });
  }

  render() {
    return (
      <View>
        <Text>
          You clicked {this.state.contador} times e o contador2 esta em
          {this.state.contador2}
        </Text>
        <Button title="Click me" onPress={() => this.handleButton()} />
      </View>
    );
  }
}

export const FunctionalComponent = () => {
  const [contador, setContador] = useState(() => 0)
  const [contador2, setContador2] = useState(100)

  function handleButton() {
    setContador(prevState => prevState + 1)
    setContador2(prevState => prevState + 1)
  }

  return (
      <View style={{ padding: 20, width: '100%', alignSelf: "center", borderBottomWidth: 1, borderBottomColor: '#000' }}>
        <Text children={`You clicked ${contador} times e o contador 2 esta em ${contador2}`} />
        <Button title="Click me" onPress={handleButton} />
      </View>
  );
};
