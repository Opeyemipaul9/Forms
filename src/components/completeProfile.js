import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from '../screen/styles';
import Header from './Header';
import Info from './InfoMain';
import Close from '../assets/icon/close.svg';
import Input from './Input';
import Check from './checkbox';
import Button from './Button';
import Dropdown from '../assets/icon/dropdown.svg';
import Calendar from '../assets/icon/calendar.svg';

const Complete = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{flex: 1}}>
        <View style={styles.modalView}>
          <Info
            textPrimary={'Complete Profile'}
            textSec={`Let's get to know you a bit more`}
            leftComponent={'Step 1 of 3'}
            rightComponent={<Close />}
          />
          <Input label={'Nationality'} />
          <Input label={'Gender'} rightComponent={<Dropdown />} />
          <Input label={'Date of birth'} rightComponent={<Calendar />} />
          <Input label={'Enter BVN'} />
          <View style={{gap: 10, marginTop: 30}}>
            <Text> Political Exposure </Text>
            <Text style={{fontSize: 13, color: '#656B76'}}>
              Have you or anyone associated with you ever had a political office
              in any country?
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 50}}>
            <Check text={'Yes'} />
            <Check text={'No'} />
          </View>
        </View>
      </View>
      <Button text={'Next'} buttonStyle={{width: 350, alignSelf: 'center'}} />
    </SafeAreaView>
  );
};

export default Complete;
