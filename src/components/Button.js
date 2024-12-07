import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import styles from '../screen/styles';

const Button = ({text, iconComponent, buttonStyle}) => {
  return (
    <Pressable style={[styles.button, buttonStyle]}>
      {iconComponent ? iconComponent : null}
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
