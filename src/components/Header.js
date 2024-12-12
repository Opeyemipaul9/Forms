import React from 'react';
import {View, Text} from 'react-native';
import styles from '../screen/styles';
import Backdrop from '../assets/icon/back.svg';

const Header = ({text, leftComponent, rightComponent}) => {
  return (
    <View style={styles.container}>
      {leftComponent ? leftComponent : <View />}
      <Text style={styles.firstText}>{text}</Text>
      {rightComponent ? rightComponent : <View />}
    </View>
  );
};

export default Header;
