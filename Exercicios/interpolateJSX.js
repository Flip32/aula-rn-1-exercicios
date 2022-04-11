import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Reescreva a componente abaixo alterando XXXX pelo nome e X pelo número de letras no nome.
const Texto = ({firstName, lastName}) => {
    const fullName = `${firstName} ${lastName}`;
    return (
        <View style={styles.row}>
            <Text>{`O nome completo é ${fullName} e tem ${fullName.length} letras`}</Text>
        </View>
    );
}

const InterpolateJSX = () => {
  return (
    <View style={styles.container}>
      <Texto firstName="Jose" lastName="Urbano" />
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
    row: {flexDirection: 'row'},
});

export default InterpolateJSX;
