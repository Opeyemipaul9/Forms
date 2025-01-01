import React, {FC, ReactElement} from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from '../screen/styles';

const Input = ({label, leftComponent, rightComponent, ...inputProps}) => {
  return (
    <View style={styles.inputView}>
      {leftComponent ? leftComponent : null}
      <View style={styles.inputParent}>
        <Text style={styles.labelInput}>{label}</Text>
        <TextInput style={styles.input} {...inputProps} />
      </View>
      {rightComponent ? rightComponent : null}
    </View>
  );
};

export default Input;
