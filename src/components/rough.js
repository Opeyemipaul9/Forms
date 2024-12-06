import {useState} from 'react';
import InfoIcon from './src/assets/icon/info.svg';
import CloseIcon from './src/assets/icon/Icon.svg';
import {Input} from './src/components/Input';
import DropDownIcon from './src/assets/icon/dropdown.svg';

const App = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [values, setValues] = useState({
    nationality: '',
    gender: '',
  });

  const updateInput = (labelKey: string, value: string) => {
    setValues(state => {
      return {...state, [labelKey]: value};
    });
  };

  console.log(values);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CloseIcon />
        <Text style={styles.title}> Personal Information</Text>
        <InfoIcon />
      </View>

      <View style={{top: 30, alignItems: 'center', marginBottom: 60}}>
        <Text style={{fontSize: 18, color: '#1a1c1f', fontWeight: 'bold'}}>
          Your Personal Information
        </Text>
        <Text style={{top: 10, color: '#50555E'}}>
          Lets get to know you a bit more
        </Text>
      </View>

      <View style={{margin: 20}}>
        <Input
          label={'Nationality'}
          // onChangeText={text => updateInput('nationality', text)}
          onChangeText={text => {
            setValues(state => ({
              ...state,
              nationality: text,
            }));
          }}
          value={values.nationality}
        />
        <Input
          label={'Gender'}
          onChangeText={text => updateInput('gender', text)}
          rightComponent={<DropDownIcon />}
          value={values.gender}
          placeholder="Nigeria"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
  },
  title: {
    alignItems: 'center',
    fontSize: 15,
    color: '#1A1C1F',
    fontWeight: 'bold',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default App;
