import React from 'react';
import {View, Text} from 'react-native';
import styles from '../screen/styles';
import Art from '../assets/icon/Group.svg';
import Button from './Button';

const Successful = () => {
  return (
    <View style={styles.sucessContainer}>
      <Art />
      <View style={styles.sucessView}>
        <Text style={styles.textSuccess}>BVN Verified Successfully</Text>
        <Text>
          BVN verification is complete! You're one step closer to finishing your
          onboarding
        </Text>
      </View>
      <Button text={'Proceed'} buttonStyle={{width: 350}} />
    </View>
  );
};

export default Successful;
