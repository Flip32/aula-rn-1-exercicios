import React from "react";
import {Text, ActivityIndicator, View, StyleSheet} from "react-native";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), loading: true };
  }

  /** Utilize o ciclo de vida do React para fazer o relógio Rodar */

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    if (this.state.loading) {
      this.setState({ loading: false });
    }
    this.interval = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.loading) return <ActivityIndicator />;
    else {
      return (
        <View style={styles.container}>
          <Text>Hello, world!</Text>
          <Text>It is {this.state.date.toLocaleTimeString()}.</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: 120,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});
