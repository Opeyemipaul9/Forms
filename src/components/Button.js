import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import styles from '../screen/styles';

const Button = ({text, iconComponent, buttonStyle, onPress}) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      {iconComponent ? iconComponent : null}
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
