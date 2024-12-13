import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import Header from '../components/Header';
import Info from '../components/InfoMain';
import InfoIcon from '../assets/icon/info.svg';
import Close from '../assets/icon/close.svg';
import Button from '../components/Button';
import Person from '../assets/icon/personadd.svg';
import Mail from '../assets/icon/mail.svg';
import Sparkles from '../assets/icon/sparkles.svg';
import ButtonSecond from '../components/buttonSecond';

const Director = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.main}>
        <Header
          leftComponent={<Close />}
          text={'Directors'}
          rightComponent={<InfoIcon />}
        />
        <Info
          textPrimary={'Add Directors'}
          textSec={`Tell us about the founders of ${'Craft Studio'} You can either add their information directly , or send them an email invite so they fill it in themselves`}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            text={'Add a Director'}
            buttonStyle={{
              width: 172,
              gap: 5,
              flexDirection: 'row',
              height: 58,
            }}
            iconComponent={<Person />}
          />
          <ButtonSecond
            text={'Invite via email'}
            buttonStyle={{gap: 5, flexDirection: 'row', width: 172, height: 58}}
            iconComponent={<Mail />}
          />
        </View>
        <View
          style={{
            width: 360,
            height: 135,
            borderRadius: 7,
            backgroundColor: '#F9FAFA',
            marginTop: 30,
          }}>
          <View style={{flexDirection: 'row', padding: 25, gap: 10}}>
            <Sparkles />
            <View style={{gap: 3, marginBottom: 15}}>
              <Text style={{fontSize: 15, fontWeight: '600'}}>
                Are you one of the directors
              </Text>
              <Text> Review and complete your profile </Text>
            </View>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              color: '#1FAD64',
              fontSize: 15,
              paddingBottom: 20,
            }}>
            Complete profile
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Director;
