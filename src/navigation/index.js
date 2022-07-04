import React from 'react';
import MenuList from '../layouts/MenuList';
import StoreList from '../layouts/StoreList';
import colors from '../utils/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackNavigation = createNativeStackNavigator();
export const MainStack = () => {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: colors.NAVCOLOR,
        },
      }}>
      <StackNavigation.Screen name={'Practical Test'} component={StoreList} />
      <StackNavigation.Screen name={'MenuList'} component={MenuList} />
    </StackNavigation.Navigator>
  );
};
