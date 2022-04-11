import React from 'react';
import { View, Button, Text } from 'react-native';

/**
 * Criar componente de fallback que ao receber um erro do clique no botao,
 * vai exibir na tela uma mensagem de "Ops Falhei"
 */

class Children extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({hasError: true})
  };

  render() {
    if (this.state.hasError) {
      console.log('Boom ?')
      throw new Error('Boom');
    }

    return (
      <Button
        title="Botao"
        onPress={() => {
          console.log('clicou')
          this.handleClick()
        }}
      />
    );
  }
}

const Error = (msg) => {
  return (
      <View>
        <Text>Ops, falhei {msg}</Text>
      </View>
  )
}


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false};
  }

  /*componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }*/

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  render() {
    if(this.state.error){
     return <Error msg={'Deu ruim'} />
    }
    return (
        <View style={{ padding: 20, width: '100%', alignSelf: "center", borderBottomWidth: 1, borderBottomColor: '#000' }}>
          <Children />
        </View>
    );
  }
}

export default ErrorBoundary;
