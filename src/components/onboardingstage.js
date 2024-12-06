import React from 'react';
import {View, StyleSheet} from 'react-native';
import styles from '../screen/styles';

const Stages = () => {
  return (
    <View style={styles.progressFull}>
      <View style={styles.progressfirst}></View>
      <View style={styles.progressSecond}></View>
      <View style={styles.progressSecond}></View>
      <View style={styles.progressSecond}></View>
      <View style={styles.progressSecond}></View>
    </View>
  );
};

export default Stages;
