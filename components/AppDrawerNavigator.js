import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import GoodsExchangeScreen from '../screens/GoodsExchangeScreen';
import GoodsRequestScreen from '../screens/GoodsRequestScreen';
import SignupLoginScreen from '../screens/SignupLoginScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {screen:SignupLoginScreen},
    Exchange : {screen:GoodsExchangeScreen},
    Request : {screen:GoodsRequestScreen},
},{
    contentComponent : CustomSideBarMenu
},{
    initialRouteName : 'Home'
}) 