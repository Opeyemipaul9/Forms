import React from 'react-native';
import Complete from './src/components/completeProfile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Business from './src/components/businessInformation';
import Information from './src/components/information';
import PersonalInformation from './src/screen/personalinformation.screen';

// import Information from './src/screen/information';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
