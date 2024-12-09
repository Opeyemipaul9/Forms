import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Input from '../components/Input';
import InfoIcon from '../../src/assets/icon/info.svg';
import CloseIcon from '../../src/assets/icon/close.svg';
import Calendar from '../../src/assets/icon/calendar.svg';
import Dropdown from '../../src/assets/icon/dropdown.svg';
import Check from '../components/checkbox';

const PersonalInformation = () => {
  const [values, setValues] = useState({
    nationality: '',
    gender: '',
  });
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <CloseIcon />
        <Text style={styles.text}> Personal Information</Text>
        <InfoIcon />
      </View>
      <View style={styles.miniHeader}>
        <Text style={styles.personal}> Your Personal Information</Text>
        <Text style={styles.minitext}> Let's get to know you a bit more</Text>
      </View>
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
      <View style={styles.textContainer}>
        <Text style={styles.texts}> Political Exposure</Text>
        <Text style={styles.paragraph}>
          Have you or anyone associated with you ever had a political office in
          any country
        </Text>
        <View style={styles.checkBox}>
          <Check text="Yes" />
          <Check text="No" />
        </View>
      </View>

      <View style={styles.progressFull}>
        <View style={styles.progressHalf}></View>
        <View style={styles.bottomContainer}>
          <Text style={styles.textBottom}>Step 3 of 5</Text>
          <View style></View>
          <View style={styles.buttonContainer}>
            <Text style={{fontSize: 13, color: '#f9fafa', alignSelf: 'center'}}>
              Next
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
  },
  miniHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  personal: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1C1F',
  },
  minitext: {
    fontSize: 14,
    color: '#50555E',
  },
  textContainer: {
    margin: 20,
  },
  texts: {
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: -0.12,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 13,
    color: '#656b76',
    lineHeight: 20,
    letterSpacing: -0.12,
  },
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  bottomContainer: {
    height: 120,

    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    borderColor: '#EBEDEF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBottom: {
    fontSize: 17,
    color: '#7b828e',
    lineHeight: 22,
    letterSpacing: -0.12,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: 96,
    height: 48,
    backgroundColor: 'black',
    borderRadius: 7,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  progressFull: {
    width: '100%',
    borderColor: '#EBEDEF',
    borderTopWidth: 2,
    justifyContent: 'center',
    marginTop: 30,
  },
  progressHalf: {
    width: '65%',
    borderColor: '#108E43',
    borderTopWidth: 2.5,
  },
});
export default PersonalInformation;
