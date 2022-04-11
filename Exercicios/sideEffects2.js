import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import {Button} from "react-native-paper";

let unmount = false

const SideEffects2 = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false)
  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const [blokFectch, setBlokFectch] = useState(true)

  /**
   * Obtenha a reposta de 'https://jsonplaceholder.typicode.com/todos/1'
   * Pegue a chave `title` do objeto e coloque dentro do estado `name`
   * Utilizem fetch e o conceito de promise.
   * */

  const fetchTodos = async () => {
    setLoading(true);
    try{
      const response = await fetch(url)
      const todos1 = await response.json()
      if(todos1?.title && !unmount)
        setName(todos1.title)
    } catch (e) {
      console.log(e)
    }
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      if(blokFectch) return;
      await fetchTodos()
    })()

    return () => {
      setLoading(false);
      unmount = true
    }
  })

  return (
    <View style={styles.container}>
      <Text children={'Exercício sideEffects2'} />
      {
        (!!name) && <Text>Texto: {loading ? 'Carregando...' : name}</Text>
      }
      {
        loading && <ActivityIndicator animating={loading} size={'large'} color={'blue'}/>
      }
      <Button onPress={() => setBlokFectch(!blokFectch)} mode={"contained"}  children={'SideEffects2'} loading={loading}/>
    </View>
  );
};

export default SideEffects2;

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
