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
          <Text style={{width: 318, fontSize: 14}}> </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
