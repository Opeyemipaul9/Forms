import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import styles from '../screen/styles';

const BottomStage = ({stage}) => {
  const progressArray = [1, 2, 3, 4, 5];
  const progressStages = progressArray.map((_, index) => {
    return (
      <View
        key={index}
        style={[
          styles.bottomProgressWidth,

          stage > index ? styles.activeBottom : styles.inactiveBottom,
        ]}></View>
    );
  });
  return <View style={styles.bottomProgressFull}>{progressStages}</View>;
};

export default BottomStage;
