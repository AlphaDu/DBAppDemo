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
import Tabbar from './app/containers/TabbarView'
import App from './app/common/Navigation'
(function forbiddenConsole () {
    [
        'assert',
        'clear',
        'count',
        'debug',
        'dir',
        'dirxml',
        'error',
        'exception',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'profile',
        'profileEnd',
        'table',
        'time',
        'timeEnd',
        'timeStamp',
        'trace',
        'warn',
    ].forEach(methodName => {
        console[methodName] = () => {
            /* noop */
        };
    });
})();
AppRegistry.registerComponent('ReactNativeApp', () =>App);

