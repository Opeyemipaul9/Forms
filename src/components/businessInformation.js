import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from '../screen/styles';
import Stages from './onboardingstage';
import Header from './Header';
import Infoicon from '../assets/icon/info.svg';
import Backdrop from '../assets/icon/back.svg';
import Info from './InfoMain';
import Map from '../assets/icon/location.svg';
import Input from './Input';
import Dropdown from '../assets/icon/dropdown.svg';
import Picture from '../assets/icon/picture2.svg';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const Business = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.main}>
          <Stages stage={1} />
          <Header
            leftComponent={<Backdrop onPress={() => navigation.goBack()} />}
            rightComponent={<Infoicon />}
            text={'Business Information'}
          />
          <Info
            textPrimary={'Business Address'}
            textSec={'Tell us a bit about your business'}
          />
          <View style={styles.inputContainer}>
            <Input label={'Business Name'} />
            <Input label={'Business Description'} />
            <Input label={'Company Type'} rightComponent={<Dropdown />} />
            <Input
              label={'Industry (optional)'}
              rightComponent={<Dropdown />}
            />
          </View>
        </View>
        <Button
          text={'Next'}
          buttonStyle={{width: 350, alignSelf: 'center', marginTop: 200}}
          onPress={() => navigation.navigate('Information')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Business;
