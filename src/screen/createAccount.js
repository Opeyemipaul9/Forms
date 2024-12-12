import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import Header from '../components/Header';
import Close from '../assets/icon/close.svg';
import Info from '../components/InfoMain';
import Input from '../components/Input';
import Nigeria from '../assets/icon/Nigeria (NG).svg';
import Button from '../components/Button';

const Create = () => {
  return (
    <>
      <SafeAreaView style={styles.safe}>
        <View style={styles.main}>
          <Header
            leftComponent={<Close />}
            text={'Create your Brass account'}
          />
          <Info
            textPrimary={'Welcome!'}
            textSec={'Enter your account details to get started'}
          />
          <Input label={'First Name'} />
          <Input label={'Last Name'} />
          <Input label={'Email Address'} />
          <Input
            leftComponent={<Nigeria style={{marginRight: 15}} />}
            label={'Phone Number'}
          />
          <Input label={'Create Your Password'} />
          <Input label={'Enter referral code (optional'} />
          <View style={styles.loginView}>
            <Text
              style={{
                fontSize: 12,
                width: 350,
                color: '#7B828E',
                alignItems: 'center',
              }}>
              {' '}
              By clicking on the{' '}
              <Text style={{color: 'black'}}> 'Create my Account' </Text> button
              , you agree to the
              <Text style={{color: 'black'}}> Terms of Use </Text>
              and <Text style={{color: 'black'}}>Privacy Policy</Text> of{' '}
              <Text style={{color: 'black'}}>Brass Starter</Text>{' '}
            </Text>
            <Button text={'Create my account'} buttonStyle={{width: 350}} />
            <Text>
              Already have an account?{' '}
              <Text style={{color: 'green'}}>Login</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Create;
