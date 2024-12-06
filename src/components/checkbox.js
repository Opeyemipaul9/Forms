import React, {useState} from 'react';
import Uncheck from '../../src/assets/icon/On.svg';
import Checked from '../../src/assets/icon/Checkbox.svg';
import styles from '../screen/styles';

import {View, Text, TouchableOpacity} from 'react-native';

const Check = ({text}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <TouchableOpacity onPress={() => setIsClicked(!isClicked)}>
      <View style={styles.checkContianer}>
        {isClicked ? (
          <Checked style={styles.checkStyle} />
        ) : (
          <Uncheck style={styles.checkStyle} />
        )}

        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Check;
