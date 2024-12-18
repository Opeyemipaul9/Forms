import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import Header from './Header';
import Close from '../assets/icon/close.svg';
import Info from '../assets/icon/info.svg';
import styles from '../screen/styles';
import Greens from '../assets/icon/ribbon.svg';

const Genesis = () => {
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
              height: 567,
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 150,
                justifyContent: 'center',
              }}>
              <Text>is your business registered? </Text>
            </View>
            <Text style={{width: 313, fontSize: 16, alignItems: 'center'}}>
              This information will be used to personalize your experience on
              Brass
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Genesis;
