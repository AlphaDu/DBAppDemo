/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import './app/common/globalConstants'
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LoginPage from './app/page/Login'
import TabbarView from './app/containers/TabbarView'
AppRegistry.registerComponent('ReactNativeApp', () =>TabbarView);
