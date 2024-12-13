import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../screen/styles';

const Info = ({textPrimary, textSec, rightComponent, leftComponent}) => {
  return (
    <View style={{marginBottom: 50}}>
      <View style={styles.miniContainer}>
        {rightComponent ? rightComponent : <View />}
        <View style={{gap: 10}}>
          <Text style={styles.identityText}> {textPrimary}</Text>
          <Text style={styles.about}> {textSec} </Text>
        </View>

        {leftComponent ? (
          <Text style={styles.left}>{leftComponent}</Text>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default Info;
