import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from '../screen/styles';
import Stages from './onboardingstage';
import Header from './Header';
import Infoicon from '../assets/icon/info.svg';
import Backdrop from '../assets/icon/back.svg';
import Info from './InfoMain';
import Input from './Input';
import Dropdowns from '../assets/icon/dropdown.svg';
import Button from './Button';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import businessStore from '../store/store';

const data = [
  {label: 'NGO', value: 'NGO', search: 'NGO'},
  {label: 'LLC', value: 'LLC', search: 'LLC'},
  {label: 'PARTNERSHIP', value: 'PARTNERSHIP', search: 'PARTNERSHIP'},
  {
    label: 'SOLE-PROPRIETOR',
    value: 'SOLE-PROPRIETOR',
    search: 'SOLE-PROPRIETOR',
  },
];
const Business = () => {
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const {businessForm, setBusinessForm} = businessStore();

  //  Handling of input change
  const handleChange = (name, value) => {
    setBusinessForm({[name]: value});
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.main}>
          <Stages stage={1} />
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
              label={'Business Name'}
              name={'name'}
              value={businessForm.name}
              onChangeText={value => handleChange('name', value)}
            />
            <Input
              label={'Business Description'}
              name="description"
              value={businessForm.description}
              onChangeText={value => handleChange('description', value)}
            />

            <Input
              label={'Industry (optional)'}
              name={'industry'}
              value={businessForm.industry}
              onChangeText={value => handleChange('industry', value)}
              rightComponent={<Dropdowns />}
            />
            <View style={styles.dropdowncontainer}>
              <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                data={data}
                labelField="label"
                searchField="search"
                valueField="value"
                name="CompanyType"
                placeholder="Company Type"
                placeholderStyle={styles.placeholderstyle}
                inputSearchStyle={styles.inputSearchStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                value={businessForm.companyType}
                maxHeight={300}
                minHeight={100}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={value => handleChange('companyType', value)}
              />
            </View>
          </View>
        </View>
        <Button
          text={'Next'}
          buttonStyle={{width: 350, alignSelf: 'center', marginTop: 200}}
          onPress={() => navigation.navigate('Information')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Business;
