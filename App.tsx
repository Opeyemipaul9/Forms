import React from 'react-native';
import Complete from './src/components/completeProfile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Business from './src/components/businessInformation';
import Information from './src/components/information';
import PersonalInformation from './src/screen/personalinformation.screen';
import Verify from './src/components/Verify';
import Successful from './src/components/BvnVerified';
import Genesis from './src/components/Genesis';
import Homepage from './src/components/walkthrough';
import Login from './src/screen/LoginPage';
import Create from './src/screen/createAccount';

// import Information from './src/screen/information';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Complete"
          component={Complete}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Business"
          component={Business}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Information"
          component={Information}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Personal"
          component={PersonalInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Successful"
          component={Successful}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
