import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import InfoIcon from '../../src/assets/icon/info.svg';
import Input from '../components/Input';
import Dropdown from '../../src/assets/icon/dropdown.svg';
import Picture from '../../src/assets/icon/upload.svg';
import styles from './styles';
import Header from '../components/Header';
import Stages from '../components/onboardingstage';
import Info from '../components/InfoMain';
import Button from '../components/Button';

const Identity = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <>
        <View style={styles.main}>
          <Stages stage={1} />
          <Header
            text={'Identity Verification'}
            rightComponent={<InfoIcon />}
          />
          <Info
            textPrimary={'Verify Your Identity'}
            textSec={`Let's get to know you a bit more`}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input label="Select ID type" rightComponent={<Dropdown />} />
          <Input
            label="ID number"
            placeholder="02345689678"
            style={{color: 'black'}}
          />
        </View>
        <View style={styles.upload}>
          <View style={styles.innerUpload}>
            <Text style={styles.valid}>Upload a valid ID</Text>
            <Text style={styles.support}>
              Supported type file includes JPEG ,PNG ,PDF and it must be less
              than 2mb
            </Text>
          </View>
          <View style={styles.file}>
            <Picture />
            <Text style={styles.textFile}> Upload a file</Text>
          </View>
        </View>
        <View style={styles.upload}>
          <View style={{width: 338}}>
            <Text style={styles.valid}>
              Upload a passport photograph (not older than 3months)
            </Text>
            <Text style={styles.support}>
              Supported file includes JPEG ,PNG ,PDF and it must be less than
              2mb
            </Text>
          </View>
          <View style={styles.file}>
            <Picture />
            <Text style={styles.textFile}> Upload a file</Text>
          </View>
        </View>
        <Button
          text={'Next'}
          buttonStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 58,
            borderRadius: 8,
            backgroundColor: 'black',
            marginTop: 70,
            marginLeft: 24,
            marginRight: 24,
          }}
        />
      </>
    </SafeAreaView>
  );
};

export default Identity;
