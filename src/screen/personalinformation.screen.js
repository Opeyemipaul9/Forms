import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Input from '../components/Input';
import InfoIcon from '../../src/assets/icon/info.svg';
import Calendar from '../../src/assets/icon/calendar.svg';
import Dropdown from '../../src/assets/icon/dropdown.svg';
import Check from '../components/checkbox';
import Backdrop from '../assets/icon/back.svg';
import Header from '../components/Header';
import styles from './styles';
import Stages from '../components/onboardingstage';
import Info from '../components/InfoMain';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import Political from '../components/politicalexposure';

const PersonalInformation = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({
    nationality: '',
    gender: '',
  });
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.main}>
          <Stages stage={3} />
          <Header
            leftComponent={<Backdrop onPress={() => navigation.goBack()} />}
            text={'Personal Information'}
            rightComponent={<InfoIcon />}
          />
          <Info
            textPrimary={'Your Personal Infromation'}
            textSec={`Let's get to know you a bit more.`}
          />
          <View style={styles.inputContainer}>
            <Input
              label={'Nationality'}
              // onChangeText={text => updateInput('nationality', text)}
              onChangeText={text => {
                setValues(state => ({
                  ...state,
                  nationality: text,
                }));
              }}
            />
            <Input label="Gender" rightComponent={<Dropdown />} />
            <Input label="Date of Birth" rightComponent={<Calendar />} />
            <Input label="Enter BVN" />
          </View>
          <Political />
          <Button text={'Next'} buttonStyle={{marginTop: 100}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInformation;
