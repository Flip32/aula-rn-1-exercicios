import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const FlatListBasics = () => {

  /**
   * Obtem o JSON do site https://jsonplaceholder.typicode.com/posts e renderize um lista mostrando o titulo de todos os posts
   */

  const [requestResult, setRequestResult] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setRequestResult(json))
  }, [])

  useEffect(() => {
      console.log('==============================')
      console.log(`requestResult`, requestResult)

  }, [requestResult])

  return (
      <View style={styles.container}>
        {
          requestResult && requestResult.length > 0 &&
          <FlatList
              data={requestResult}
              renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
          />

        }
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'gray',
  },
});

export default FlatListBasics
