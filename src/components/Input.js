import React, {FC, ReactElement} from 'react';
import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native';

const Input = ({label, rightComponent, ...inputProps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputParent}>
        <Text style={styles.title}>{label}</Text>
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
  title: {
    marginBottom: 10,
    color: '#979797',
  },
});
export default Input;
