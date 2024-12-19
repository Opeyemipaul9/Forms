import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from '../screen/styles';
import Header from './Header';
import Info from './InfoMain';
import Back from '../assets/icon/back.svg';
import Button from './Button';
import Artboard from '../assets/icon/Artboard.svg';
import Box from './bocx';
import Checked from '../assets/icon/check_circle.svg';
import Eclipse from '../assets/icon/Ellipse 37.svg';
import Cancel from '../assets/icon/cancel.svg';
import {useNavigation} from '@react-navigation/native';

const Complete = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
        <Header
          text={'Business Information'}
          leftComponent={<Back onPress={() => navigation.goBack()} />}
          rightComponent={<View />}
        />
        <Info
          textPrimary={'Have you registered your business?'}
          textSec={
            'This information will be used to personalize your experience on Brass'
          }
        />
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Artboard />
        </View>
        <Box
          rightComponent={<Checked />}
          TextPrimary={'Yes, my business is registered'}
          TextSecondary={
            'My business is registered and i have my legal documents ready'
          }
          leftComponent={<Eclipse />}
        />
        <Box
          rightComponent={<Cancel />}
          TextPrimary={'Yes, my business is registered'}
          TextSecondary={
            'My business is registered and i have my legal documents ready'
          }
          leftComponent={<Eclipse />}
        />
        <Button
          text={'Continue'}
          buttonStyle={{backgroundColor: '#7B828E', marginTop: 70}}
          onPress={() => navigation.navigate('Business')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Complete;
