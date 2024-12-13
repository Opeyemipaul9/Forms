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
import Map from '../assets/icon/location.svg';

const BusinessInfo2 = () => {
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
            <Input label={'Business Name'} rightComponent={<Map />} />
            <Input
              label={'Closest Landmark(optional)'}
              rightComponent={<Dropdown />}
            />
            <Input label={'City'} rightComponent={<Dropdown />} />
            <Input label={'State'} rightComponent={<Dropdown />} />
            <Input
              label={'Select Utility Bill'}
              rightComponent={<Dropdown />}
            />
            <Text style={{fontSize: 14, color: '#656B76'}}>
              Upload utility bill (not older than 3 months){' '}
            </Text>
            {/* <View
              style={{
                width: 382,
                height: 95,
                backgroundColor: '#F5F5F5',
                borderWidth: 1,
                // borderColor: '#F5F5F5',
                borderStyle: 'dashed',
              }}></View> */}
          </View>
        </View>
        <View>
          <BottomStage stage={2} />
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
            <Button text={'Next'} buttonStyle={{width: 96, height: 48}} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default BusinessInfo2;
