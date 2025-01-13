import styles from '../screen/styles';
import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import Header from './Header';
import Close from '../assets/icon/close.svg';
import Infor from '../assets/icon/info.svg';
import Info from './InfoMain';
import Button from './Button';
import Person from '../assets/icon/person.svg';
import ButtonSecond from './buttonSecond';
import Mail from '../assets/icon/mail.svg';
import Sparkles from '../assets/icon/sparkles.svg';
import BottomStage from './bottomStage';

const Partner = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{flex: 1}}>
        <View style={styles.main}>
          <Header
            leftComponent={<Close />}
            text={'Partnership'}
            rightComponent={<Infor />}
          />
          <Info
            textPrimary={'Add Partners'}
            textSec={
              'Tell us about the founders of Craft Studio. You can either add their information directly, or send them an email invite so they fill it in themselves'
            }
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              text={'Add a Partner'}
              iconComponent={<Person />}
              buttonStyle={{flexDirection: 'row', width: 150, gap: 5}}
            />
            <ButtonSecond
              text={'Invite via email'}
              iconComponent={<Mail />}
              buttonStyle={{flexDirection: 'row', width: 150, gap: 5}}
            />
          </View>
          <View
            style={{
              padding: 25,
              gap: 10,
              height: 130,

              borderRadius: 10,
              marginTop: 30,
            }}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Sparkles />
              <View style={{gap: 5, marginBottom: 15}}>
                <Text style={{fontSize: 15, fontWeight: '600'}}>
                  Are you one of the partners?
                </Text>
                <Text style={{color: '#656b76'}}>
                  {' '}
                  Review and complete your profile{' '}
                </Text>
              </View>
            </View>
            <Text style={{alignSelf: 'center', fontSize: 15, color: '#1FAD64'}}>
              {' '}
              Complete Profile
            </Text>
          </View>
        </View>
      </View>
      <View>
        <BottomStage stage={4} />
        <View style={styles.bottomStage}>
          <Text style={{color: '#7B828E', fontSize: 17}}> Step 4 of 5 </Text>
          <Button text={'Next'} buttonStyle={{width: 96, height: 48}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Partner;
