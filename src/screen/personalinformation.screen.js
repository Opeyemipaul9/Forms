import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Input from '../components/Input';
import InfoIcon from '../../src/assets/icon/info.svg';
import Calendar from '../../src/assets/icon/calendar.svg';
import Dropdowns from '../../src/assets/icon/dropdown.svg';
import Check from '../components/checkbox';
import Backdrop from '../assets/icon/back.svg';
import Header from '../components/Header';
import styles from './styles';
import Stages from '../components/onboardingstage';
import Info from '../components/InfoMain';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import Political from '../components/politicalexposure';
import Rounded from '../assets/icon/rounded.svg';
import Heat from '../assets/icon/mode_heat.svg';
import {Dropdown} from 'react-native-element-dropdown';

const PersonalInformation = ({route}) => {
  const {phone, email} = route.params;

  const numbers = () => {
    return phone.slice(0, 5) + '****' + phone.slice(9);
  };

  const emailSlip = () => {
    return email.slice(0, 2) + '******' + email.slice(-12);
  };

  const data = [
    {
      label: 'Male',
      value: 'Male',
      search: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
      search: 'Female',
    },
  ];
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

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

            <View style={styles.dropdowncontainer}>
              <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                data={data}
                labelField="label"
                searchField="search"
                valueField="value"
                placeholder="Gender"
                placeholderStyle={styles.placeholderstyle}
                inputSearchStyle={styles.inputSearchStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                value={value}
                maxHeight={300}
                minHeight={100}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
            <Input label="Date of Birth" rightComponent={<Calendar />} />
            <Input label="Enter BVN" />
          </View>
          <View style={{gap: 10, marginTop: 30}}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              Verification Methods
            </Text>
            <Text style={{fontSize: 12, color: '#656b76'}}>
              Where would you like to receive your BVN verification code?
            </Text>
            <View style={{gap: 10, marginTop: 20}}>
              <View style={{flexDirection: 'row', gap: 5}}>
                <Rounded />
                <Text style={{fontSize: 13}}>
                  Send a verification code to {numbers()}
                </Text>
              </View>
              <Text
                style={{
                  left: 20,
                  textDecorationLine: 'underline',
                  fontWeight: '500',
                }}>
                Send to an alternative phone number{' '}
              </Text>
            </View>

            <View style={{gap: 10, marginTop: 20}}>
              <View style={{flexDirection: 'row', gap: 5}}>
                <Rounded />
                <Text style={{fontSize: 13}}>
                  Send a verification code to {emailSlip()}
                </Text>
              </View>
              <Text
                style={{
                  left: 20,
                  textDecorationLine: 'underline',
                  fontWeight: '500',
                }}>
                Send to an alternative email address
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#E2EDE2',
                borderRadius: 8,
                padding: 15,
                height: 64,
                marginTop: 20,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: 320,
                  gap: 5,
                  justifyContent: 'space-between',
                }}>
                <Heat />
                <Text style={{fontSize: 13}}>
                  Use the {''}
                  <Text style={{fontWeight: '600'}}>
                    'skip automatic verification'{' '}
                  </Text>
                  if you do not have access to the number or email provided.
                </Text>
              </View>
            </View>
            <View style={{gap: 10, marginTop: 20}}>
              <View style={{flexDirection: 'row', gap: 5}}>
                <Rounded />
                <Text style={{fontSize: 13}}>Skip automatic verification</Text>
              </View>
              <Text
                style={{
                  left: 20,
                  textDecorationLine: 'underline',
                  fontWeight: '500',
                }}>
                if the above options are unavailable
              </Text>
            </View>
          </View>

          <Political />

          <Button
            text={'Next'}
            buttonStyle={{marginTop: 100}}
            onPress={() => navigation.navigate('Verify')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInformation;
