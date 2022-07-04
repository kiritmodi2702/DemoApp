/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const RootNav = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootNav.Navigator>
        <RootNav.Screen
          name={'Root'}
          component={MainStack}
          options={{headerShown: false}}
        />
      </RootNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
