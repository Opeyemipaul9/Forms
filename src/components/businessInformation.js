import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
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

const Business = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <>
        <View style={styles.main}>
          <Stages stage={1} />
          <Header
            leftComponent={<Backdrop />}
            rightComponent={<Infoicon />}
            text={'Business Information'}
          />
          <Info
            textPrimary={'Business Address'}
            textSec={'Tell us a bit about your business'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input label={'Business Address'} rightComponent={<Map />} />
          <Input label={'Closest Landmark (optional)'} />
          <Input label={'City'} rightComponent={<Dropdown />} />
          <Input label={'State'} rightComponent={<Dropdown />} />
          <Input label={'Select Utility Bill'} rightComponent={<Dropdown />} />
        </View>
        <View style={styles.upload}>
          <View style={{width: 338}}>
            <Text style={styles.valid}>
              Upload a utitility bill (not older than 3months)
            </Text>
            <Text style={styles.support}>
              Supported file includes JPEG ,PNG ,PDF and it must be less than
              2mb
            </Text>
          </View>
          <Button
            iconComponent={<Picture />}
            text={'Upload a file'}
            buttonStyle={{
              width: 150,
              backgroundColor: 'black',
              flexDirection: 'row',
              gap: 5,
              marginTop: 10,
            }}
          />
        </View>
        <Button
          text={'Next'}
          buttonStyle={{width: 350, alignSelf: 'center', marginTop: 30}}
        />
      </>
    </SafeAreaView>
  );
};

export default Business;
