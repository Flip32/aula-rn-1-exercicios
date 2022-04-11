import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

/**
 * Escreve um prototype para esse componente
 * validando se ambas as propriedades sao do tipo string.
 */
const FirstLastName = (props) => (

  <View style={style.row}>
    <Text>{props.firstName}</Text>
    <Text>{props.lastName}</Text>
  </View>
);

FirstLastName.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

const ValidateWithProptype = () => {
  return (
    <View>
      <Text>ValidateWithProptype</Text>
      <FirstLastName firstName="Jose" lastName="Duarte" />
      <FirstLastName firstName="Maria" lastName="Duarte" />
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  row: {flexDirection: 'row'},
});

export default ValidateWithProptype;
