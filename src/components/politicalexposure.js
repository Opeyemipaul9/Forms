import React from 'react';
import {View, Text} from 'react-native';
import styles from '../screen/styles';
import Check from './checkbox';

const Political = () => {
  return (
    <View style={styles.politicalContainer}>
      <Text style={styles.texts}> Political Exposure</Text>
      <Text style={styles.modeText}>
        Have you or anyone associated with you ever had a political office in
        any country
      </Text>
      <View style={styles.checkBox}>
        <Check text="Yes" />
        <Check text="No" />
      </View>
    </View>
  );
};

export default Political;
