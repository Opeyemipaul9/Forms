import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image, Alert} from 'react-native';
import styles from '../screen/styles';
import Stages from './onboardingstage';
import Header from './Header';
import Infoicon from '../assets/icon/info.svg';
import Backdrop from '../assets/icon/back.svg';
import Info from './InfoMain';
import Map from '../assets/icon/location.svg';
import Input from './Input';
import Dropdowns from '../assets/icon/dropdown.svg';
import Picture from '../assets/icon/picture2.svg';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import PdfThumbnail from 'react-native-pdf-thumbnail';
import DONT from '../assets/icon/dnd.svg';
import {Country, State, City} from 'country-state-city';
import {Dropdown} from 'react-native-element-dropdown';

const Information = () => {
  const [file, setFile] = useState(null);
  const [previewUri, setPreviewUri] = useState('');
  const navigation = useNavigation();
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [form, setForm] = useState({
    address: '',
    landmark: '',
    phone: '',
    email: '',
    state: '',
    city: '',
    bills: '',
  });
  const bills = [
    {label: 'Electric Bill', value: 'Electric Bill', search: 'Electric Bill'},
    {label: 'Cable Bill', value: 'Cable Bill', search: 'Cable Bill'},
  ];

  const handleChange = (field, value) => {
    setForm(prevState => ({...prevState, [field]: value}));
  };

  const handleSubmit = () => {
    const {address, landmark, phone, email, state} = form;
    if (!address || !landmark || !phone || !email || !state) {
      Alert.alert('Error', 'please fill in all the fields');
    } else {
      navigation.navigate('Personal', {phone: form.phone, email: form.email});
    }
  };

  const countryIsoCode = 'NG';

  useEffect(() => {
    const loadState = () => {
      const stateList = State.getStatesOfCountry(countryIsoCode).map(state => ({
        label: state.name,
        value: state.isoCode,
        search: state.name,
      }));
      setState(stateList);
    };
    loadState();
  }, []);

  // Load cities from selected states

  useEffect(() => {
    if (form.state) {
      const loadCities = () => {
        const cityList = City.getCitiesOfState(countryIsoCode, form.state).map(
          city => ({
            label: city.name,
            value: city.isoCode,
            search: city.name,
          }),
        );
        setCity(cityList);
      };
      loadCities();
    }
  }, [form.state]);

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
    } catch (err) {}
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
            <Input
              label={'Business Address'}
              value={form.address}
              onChangeText={value => handleChange('address', value)}
              rightComponent={<Map />}
            />
            <Input
              label={'Closest Landmark (optional)'}
              value={form.landmark}
              onChangeText={value => handleChange('landmark', value)}
            />
            <Input
              label={'Phone Number'}
              value={form.phone}
              onChangeText={value => handleChange('phone', value)}
            />
            <Input
              label={'Email address'}
              value={form.email}
              onChangeText={value => handleChange('email', value)}
            />
            <View style={styles.dropdowncontainer}>
              <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                data={state}
                labelField="label"
                valueField="value"
                searchField="search"
                placeholder="State"
                placeholderStyle={styles.placeholderstyle}
                inputSearchStyle={styles.inputSearchStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                value={form.state}
                maxHeight={300}
                minHeight={100}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  handleChange('state', item.value);
                }}
              />
            </View>
            <View style={styles.dropdowncontainer}>
              <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                data={city}
                labelField="label"
                valueField="value"
                searchField="search"
                placeholder="City"
                placeholderStyle={styles.placeholderstyle}
                inputSearchStyle={styles.inputSearchStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                value={form.city}
                maxHeight={300}
                minHeight={100}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  handleChange('city', item.value);
                }}
              />
            </View>
            <View style={styles.dropdowncontainer}>
              <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                data={bills}
                labelField="label"
                valueField="value"
                searchField="search"
                placeholder="Utility Bill"
                placeholderStyle={styles.placeholderstyle}
                inputSearchStyle={styles.inputSearchStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                value={form.city}
                maxHeight={300}
                minHeight={100}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  handleChange('bills', item.value);
                }}
              />
            </View>
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
              <View style={styles.pdfView}>
                <View style={styles.pdfmini}>
                  {previewUri ? (
                    <Image
                      source={{uri: previewUri}}
                      style={styles.pdfimage}></Image>
                  ) : (
                    <Text> generating thumbnail</Text>
                  )}
                  <Text> {file.name}</Text>
                  <DONT onPress={() => setFile(null)} />
                </View>
              </View>
            )}
          </View>
        </View>
        <Button
          text={'Next'}
          buttonStyle={{width: 350, alignSelf: 'center', marginTop: 50}}
          onPress={handleSubmit}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Information;
