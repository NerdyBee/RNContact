import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACT_DETAIL,
  CONTACT_LST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LST}>
      <HomeStack.Screen
        name={CONTACT_LST}
        component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
