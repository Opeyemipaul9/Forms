import React from 'react';
import {View, Text, ScrollView, SafeAreaView, Pressable} from 'react-native';
import Header from './Header';
import Close from '../assets/icon/close.svg';
import Info from '../assets/icon/info.svg';
import styles from '../screen/styles';
import Greens from '../assets/icon/ribbon.svg';
import Checked from '../assets/icon/check_circle.svg';
import Variant from '../assets/icon/Variant5.svg';
import Cancel from '../assets/icon/cancel.svg';
import {useNavigation} from '@react-navigation/native';

const Genesis = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.main}>
          <Header
            leftComponent={<Close />}
            text={'Business Information'}
            rightComponent={<Info />}
          />

          <View
            style={{
              borderColor: '#D9D9D9',
              borderRadius: 8,
              borderWidth: 1,
              marginTop: 30,
              padding: 30,

              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 210,
                justifyContent: 'center',
                gap: 5,
              }}>
              <Text style={{fontSize: 24, color: '#1A1C1F', fontWeight: '500'}}>
                is your business registered?{' '}
              </Text>
              <Text style={{width: 313, fontSize: 16, alignItems: 'center'}}>
                This information will be used to personalize
              </Text>
              <Text style={{fontSize: 16, alignItems: 'center'}}>
                your experience on Brass{' '}
              </Text>
            </View>
            <Pressable onPress={() => navigation.navigate('Complete')}>
              <View style={{flexDirection: 'row', marginTop: 40, gap: 10}}>
                <Checked />
                <View style={{width: 261, gap: 5}}>
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    Yes, i have a registered business
                  </Text>
                  <Text style={{fontSize: 14, color: '#50555E'}}>
                    My business is registered and i have my legal documents
                    ready.
                  </Text>
                </View>
                <Variant style={{top: 30}} />
              </View>
            </Pressable>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D9D9D9',
                width: 320,
                marginTop: 40,
                marginBottom: 40,
              }}></View>
            <Pressable onPress={() => navigation.navigate('Complete')}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Cancel />
                <View style={{width: 261, gap: 5}}>
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    No, my business is not registered
                  </Text>
                  <Text style={{fontSize: 14, color: '#50555E'}}>
                    My business isn't registered yet but i want to proceed.
                  </Text>
                </View>
                <Variant style={{top: 30}} />
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Genesis;
