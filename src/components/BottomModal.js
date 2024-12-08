import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from '../screen/styles';
import Info from './InfoMain';
import Input from './Input';
import Button from './Button';

const BottomModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Button
        text={'Next'}
        style={styles.button}
        onPress={() => {
          setOpenModal(!openModal);
        }}
      />
      <Modal isVisible={openModal} style={styles.modalStyle}>
        <View style={styles.modalView}>
          <Info
            textPrimary={'Add a Director'}
            textSec={`Tell us more about this director`}
            leftComponent={'Step 1 of 3'}
          />
          <View style={styles.inputContainer}>
            <Input label={'Legal First Name'} />
            <Input label={'Legal Last Name'} />
            <Input label={'Email Address'} />
            <Input label={'Phone Number'} />
          </View>
          <Button
            text={'Next'}
            buttonStyle={{
              width: 300,
              justifyContent: 'center',
              alignSelf: 'center',
              marginBotttom: 30,
            }}
            onPress={() => {
              setOpenModal(!openModal);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default BottomModal;
