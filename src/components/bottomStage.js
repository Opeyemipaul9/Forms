import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../screen/styles';

const BottomStage = ({stage}) => {
  const progressArray = [1, 2, 3, 4, 5];
  const progressStages = progressArray.map((_, index) => {
    return (
      <View
        key={index}
        style={[
          styles.progressWidth,
          stage > index ? styles.active : styles.inactive,
        ]}></View>
    );
  });
  return <View style={styles.progressFull}>{progressStages}</View>;
};

export default BottomStage;
