import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../screen/styles';

const Info = ({textPrimary, textSec}) => {
  return (
    <View style={styles.miniContainer}>
      <Text style={styles.identityText}> {textPrimary}</Text>
      <Text style={styles.about}> {textSec} </Text>
    </View>
  );
};

export default Info;
