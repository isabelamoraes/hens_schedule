import 'react-native-gesture-handler';

import React from 'react';
import OneSignal from 'react-native-onesignal';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';
import {Routes} from './src/routes';

const oneSignalAppId = process.env.ONE_SIGNAL_APP_ID;

OneSignal.setAppId(oneSignalAppId);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </ThemeProvider>
  );
}
