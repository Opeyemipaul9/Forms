import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from '../screen/styles';
import Header from './Header';
import Backdrop from '../assets/icon/back.svg';
import Info from './InfoMain';
import Codes from './codeBVN';
import {useNavigation} from '@react-navigation/native';
import Button from './Button';
import {OtpInput} from 'react-native-otp-entry';

const Verify = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.main}>
        <Header
          leftComponent={<Backdrop onPress={() => navigation.goBack()} />}
          text={'Verify your BVN'}
          rightComponent={<View />}
        />
        <Info
          textSec={
            'We sent an email to philip@trybass.com containing a 6-digit code , please enter it below, Note that the code will expire in 10 minutes'
          }
        />
        *
        <OtpInput
          numberOfDigits={6}
          focusColor="black"
          autoFocus={false}
          hideStick={true}
          placeholder="******"
          blurOnFilled={true}
          disabled={false}
          type="numeric"
          secureTextEntry={false}
          focusStickBlinkingDuration={500}
          onFocus={() => console.log('Focused')}
          onBlur={() => console.log('Blurred')}
          onTextChange={text => console.log(text)}
          onFilled={text => console.log(`OTP is ${text}`)}
          textInputProps={{
            accessibilityLabel: 'One-Time Password',
          }}
        />
        <View style={styles.verifyContainer}>
          <Text style={{fontSize: 12, color: '#50555E'}}>
            Don't see a code?
            <Text style={{color: '#1FAD64'}}> Resend code </Text>{' '}
          </Text>
          <Text style={{color: '#D9D9D9', fontSize: 12}}> 0:00</Text>
        </View>
        <Button
          text={'Verify'}
          buttonStyle={{marginTop: 60}}
          onPress={() => navigation.navigate('Successful')}
        />
      </View>
    </SafeAreaView>
  );
};
9;

export default Verify;
