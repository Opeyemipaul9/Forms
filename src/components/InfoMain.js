import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../screen/styles';
import Close from '../assets/icon/close.svg';

const Info = ({textPrimary, textSec, rightComponent, leftComponent}) => {
  return (
    <View>
      <View style={styles.miniContainer}>
        {rightComponent ? rightComponent : <View />}
        <View>
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
