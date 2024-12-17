import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import styles from './styles';
import Header from '../components/Header';
import Close from '../assets/icon/close.svg';
import InfoIcon from '../assets/icon/info.svg';
import Info from '../components/InfoMain';
import Input from '../components/Input';
import BottomStage from '../components/bottomStage';
import Button from '../components/Button';
import Dropdown from '../assets/icon/dropdown.svg';
import {useNavigation} from '@react-navigation/native';

const BusinessInfo = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.safe}>
        <View style={{flex: 1}}>
          <View style={styles.main}>
            <Header
              text={'Business Information'}
              rightComponent={<Close />}
              leftComponent={<InfoIcon />}
            />
            <Info
              textPrimary={'About Your Business'}
              textSec={'Tell us about your main business'}
            />
            <Input label={'Business Name'} />
            <Input label={'Business Description'} />
            <Input label={'Company Type'} rightComponent={<Dropdown />} />
            <Input
              label={'Industry (optional)'}
              rightComponent={<Dropdown />}
            />
          </View>
        </View>
        <View>
          <BottomStage stage={1} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 120,
              paddingLeft: 24,
              paddingRight: 24,
            }}>
            <Text style={{color: '#7B828E', fontSize: 17}}> Step 2 of 5 </Text>
            <Button
              text={'Next'}
              buttonStyle={{width: 96, height: 48}}
              onPress={() => navigation.navigate('Information')}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default BusinessInfo;
