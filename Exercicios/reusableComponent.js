import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * Escreva aqui componente que receba duas propriedades (FirstName and LastName)
 * O componente deve apresentar um nome ao lado do outro
 * Mantenha a estrutura do componente abaixo (View com dois Texts)
 */
const Name = ({firstName, lastName}) => {
    return (
        <View style={styles.content}>
            <Text style={styles.row}>nome: {firstName}</Text>
            <Text style={styles.row}>sobrenome: {lastName}</Text>
        </View>
    );
};

const ReusableExercise = () => {
    const people = [
        {
            firstName: 'José',
            lastName: 'Urbano'
        },
        {
            firstName: 'Maria',
            lastName: 'Souza'
        },
    ]
  return (
    <View style={styles.container}>
        <Text children={'Exercício ReusableExercise'} />
        { people.map(person => <Name key={person.firstName} {...person} />) }
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
    content: {  borderWidth: 1, borderColor: '#000', width: '90%' },
  row: {flexDirection: 'row', marginTop: 2,}
});

export default ReusableExercise;
