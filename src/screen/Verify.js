import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import Header from '../components/Header';
import Info from '../components/InfoMain';
import Backdrop from '../assets/icon/back.svg';

const Verify = () => {
  return (
    <>
      <SafeAreaView style={styles.safe}>
        <View style={styles.main}>
          <Header
            text={'Verify your email address'}
            leftComponent={<Backdrop />}
          />
          <Info
            textSec={
              'We sent an email to philip@trybass.com containing a 6-digit code , please enter it below. Note that the code will expire in 10 minutes'
            }
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Verify;
