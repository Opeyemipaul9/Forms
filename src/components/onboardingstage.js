import React from 'react';
import {StyleSheet, View} from 'react-native';

const Stages = ({stage}) => {
  const progressArray = [1, 2, 3, 4, 5];
  const progressStages = progressArray.map((_, index) => {
    // if (stage > index) {
    //   return (
    //     <View key={index} style={[styles.progressWidth, styles.active]}></View>
    //   );
    // } else {
    //   return (
    //     <View
    //       key={index}
    //       style={[styles.progressWidth, styles.inactive]}></View>
    //   );
    // }

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

export default Stages;

const styles = StyleSheet.create({
  progressFull: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  progressWidth: {
    width: '18%',
    borderRadius: 7,
    height: 3,
  },
  active: {
    backgroundColor: '#108e43',
  },
  inactive: {
    backgroundColor: '#d9d9d9',
  },
});
