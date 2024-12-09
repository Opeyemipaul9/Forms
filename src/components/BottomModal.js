import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from '../screen/styles';
import Info from './InfoMain';
import Input from './Input';
import Button from './Button';
import Close from '../assets/icon/close.svg';

const BottomModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Button
        text={'Next'}
        onPress={() => {
          setOpenModal(!openModal);
        }}
        buttonStyle={{width: 100}}
      />
      <Modal
        isVisible={openModal}
        style={styles.modalStyle}
        collapsable
        onBackdropPress={() => setOpenModal(false)}>
        <View style={styles.modalView}>
          <Info
            textPrimary={'Add a Director'}
            textSec={`Tell us more about this director`}
            leftComponent={'Step 1 of 3'}
            rightComponent={<Close />}
          />
          <View style={styles.inputContainer}>
            <Input label={'Legal First Name'} />
            <Input label={'Legal Last Name'} />
            <Input label={'Email Address'} />
            <Input label={'Phone Number'} />
          </View>
          <View style={{marginTop: 30}}>
            <Button
              text={'Next'}
              buttonStyle={
                {
                  //   width: 300,
                  //   justifyContent: 'center',
                  //   alignSelf: 'center',
                  // marginBotttom: 30,
                }
              }
              onPress={() => {
                setOpenModal(!openModal);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomModal;
