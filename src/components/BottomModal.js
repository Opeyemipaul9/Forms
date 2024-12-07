import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const BottomModal = () => {
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <View>
        <Text>I am the modal content!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BottomModal;
