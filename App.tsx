import React, {TextInput} from 'react-native';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}> Personal Information</Text>
      </View>
      <View style={{top: 60, alignItems: 'center'}}>
        <Text style={{fontSize: 18, color: '#1a1c1f'}}>
          Your Personal Information
        </Text>
        <Text style={{top: 10, color: '#50555E'}}>
          Lets get to know you a bit more
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  title: {
    alignItems: 'center',
    fontSize: 15,
    color: '#1A1C1F',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default App;
