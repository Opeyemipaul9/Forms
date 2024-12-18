import React from 'react';
import {View, Text} from 'react-native';
import styles from '../screen/styles';

const Codes = () => {
  return (
    <View style={styles.codeBoxContainer}>
      <View style={styles.codeBox}>
        <Text style={styles.textBox}>*</Text>
      </View>
      <View style={styles.codeBox}>
        <Text style={styles.textBox}>*</Text>
      </View>
      <View style={styles.codeBox}>
        <Text style={styles.textBox}>*</Text>
      </View>
      <View style={styles.codeBox}>
        <Text style={styles.textBox}>*</Text>
      </View>
      <View style={styles.codeBox}>
        <Text style={styles.textBox}>0</Text>
      </View>
    </View>
  );
};

export default Codes;
