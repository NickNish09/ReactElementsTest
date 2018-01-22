import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Contacts from './Contacts.js';
import Home from './Home.js';

export const Tabs = TabNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            tabBarLabel: 'Contatos',
            tabBarIcon: ({ tintColor }) => <Icon name="person" size={26} style={{ color: tintColor }} />,
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={26} style={{ color: tintColor }} />,
        }
    },
},  {
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
        activeTintColor: '#fff',  // Color of tab when pressed
        inactiveTintColor: '#fff', // Color of tab when not pressed
        showIcon: 'true', // Shows an icon for both iOS and Android
        showLabel: false,
        labelStyle: {
            fontSize: 11,
        },
        style: {
            backgroundColor: 'purple', // Makes Android tab bar white instead of standard blue
        }
    },
});