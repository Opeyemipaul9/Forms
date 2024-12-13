import React, {FC, ReactElement} from 'react';
import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native';
// import styles from '../screen/styles';

const Input = ({label, leftComponent, rightComponent, ...inputProps}) => {
  return (
    <View style={styles.container}>
      {leftComponent ? leftComponent : null}
      <View style={styles.inputParent}>
        <Text style={styles.labelInput}>{label}</Text>
        <TextInput style={styles.input} {...inputProps} />
      </View>
      {rightComponent ? rightComponent : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9fafa',
    borderRadius: 8,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputParent: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    color: '#1A1A1A',
    flex: 1,
  },
  labelInput: {
    marginBottom: 10,
    color: '#979797',
  },
});
export default Input;
