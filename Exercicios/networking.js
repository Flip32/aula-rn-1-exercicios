import React, {useState, useEffect} from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';

let unmounted = false;

const NetWorking = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const path = 'https://jsonplaceholder.typicode.com/posts/1'

  /**
   *  Obtenha seu JSON de 'https://jsonplaceholder.typicode.com/posts/1'.
   *   Enquanto carregue seu JSON, lembre que setar o estado isLoading para true.
   *   Caso você recebe um erro, se o estado isError para True
   *   Caso sua tela já tenha sido desmontada, não `set` o estado em uma tela desmontada
   */

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(path);
        const json = await response.json();
        if (json && !unmounted) {
          setData(json);
        }
      } catch (error) {
        if(!unmounted) {
          setIsError(true);
        }
      }
      if(!unmounted) {
        setIsLoading(false);
      }
    })()

    return () => { unmounted = true }
  }, [])

  return (
    <View style={styles.container}>
      {isError && <Text>Something went wrong ...</Text>}
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : (
        <ScrollView>
          <Text key={data.id}> Title: {data.title}</Text>
        </ScrollView>
      )}
    </View>
  );
};

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

export default NetWorking;
