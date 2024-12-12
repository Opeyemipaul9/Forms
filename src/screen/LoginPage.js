import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import Header from '../components/Header';
import Close from '../assets/icon/close.svg';
import Info from '../components/InfoMain';
import Input from '../components/Input';
import Eye from '../assets/icon/eye.svg';
import Button from '../components/Button';
import Biometric from '../assets/icon/biometric.svg';

const Login = () => {
  return (
    <>
      <SafeAreaView style={styles.safe}>
        <View style={styles.main}>
          <Header leftComponent={<Close />} text={'Login to Brass'} />
          <Info
            textPrimary={'Welcome back!'}
            textSec={'Enter your account details to continue'}
          />

          <Input label={'Email Address'} placeholder="jameson,pre@mail.com" />
          <Input
            label={'Password'}
            placeholder="*************"
            rightComponent={<Eye />}
          />

          <Text style={{alignSelf: 'center', color: '#0EA84C'}}>
            {' '}
            Forgot Password?
          </Text>
          <View style={styles.loginView}>
            <Button text={'Login to my account'} buttonStyle={{width: 350}} />
            <Text>
              Don't have an account?{' '}
              <Text style={{color: 'green'}}>Create Account</Text>
            </Text>
          </View>
          <View style={styles.biometricView}>
            <Biometric />
            <Text> Biometric Login</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
