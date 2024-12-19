import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import PdfThumbnail from 'react-native-pdf-thumbnail';

const Information = () => {
  const [file, setFile] = useState(null);
  const [previewUri, setPreviewUri] = useState('');
  const navigation = useNavigation();
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        allowMultiSelection: false,
      });

      setFile({
        uri: doc[0]?.uri,
        name: doc[0]?.name,
      });

      // Generate thumnail preview
      const thumbnail = await PdfThumbnail.generate(doc[0]?.uri, 0);
      setPreviewUri(thumbnail.uri);

      console.log(doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        console.log('user camcelled the upload', err);
      else console.log('error picking document', err);
    }
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.main}>
          <Stages stage={2} />
          <Header
            leftComponent={<Backdrop onPress={() => navigation.goBack()} />}
            rightComponent={<Infoicon />}
            text={'Business Information'}
          />
          <Info
            textPrimary={'Business Address'}
            textSec={'Tell us a bit about your business'}
          />
          <View style={styles.inputContainer}>
            <Input label={'Business Address'} rightComponent={<Map />} />
            <Input label={'Closest Landmark (optional)'} />
            <Input label={'City'} rightComponent={<Dropdown />} />
            <Input label={'State'} rightComponent={<Dropdown />} />
            <Input
              label={'Select Utility Bill)'}
              rightComponent={<Dropdown />}
            />
          </View>
          <View style={styles.upload}>
            <View>
              <Text style={styles.valid}>
                Upload utility bill (not older than 3months)
              </Text>
              <Text style={styles.support}>
                Supported file includes JPEG ,PNG ,PDF and it must be less than
                2mb
              </Text>
            </View>
            {!file ? (
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
                onPress={selectDoc}
              />
            ) : (
              <View
                style={{
                  marginTop: 30,
                  backgroundColor: '#D9D9D9',
                  borderRadius: 8,
                  height: 60,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  {previewUri ? (
                    <Image
                      source={{uri: previewUri}}
                      style={{
                        width: 40,
                        height: 40,
                        resizeMode: 'contain',
                        borderRadius: 10,
                        marginBottom: 10,
                        top: 10,
                      }}></Image>
                  ) : (
                    <Text> generating thumbnail</Text>
                  )}
                  <Text> {file.name}</Text>
                </View>
              </View>
            )}
          </View>
        </View>
        <Button
          text={'Next'}
          buttonStyle={{width: 350, alignSelf: 'center', marginTop: 50}}
          onPress={() => navigation.navigate('Personal')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Information;
