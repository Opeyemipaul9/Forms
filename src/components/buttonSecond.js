import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from '../screen/styles';

const ButtonSecond = ({text, iconComponent, buttonStyle, onPress}) => {
  return (
    <Pressable style={[styles.buttonSecond, buttonStyle]} onPress={onPress}>
      {iconComponent ? iconComponent : null}
      <Text style={styles.buttonSecondText}>{text}</Text>
    </Pressable>
  );
};

export default ButtonSecond;
