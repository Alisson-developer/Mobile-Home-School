import React from 'react';
import { YellowBox, StatusBar } from 'react-native';

import Routes from './src/routes'

export default function App() {
  YellowBox.ignoreWarnings(['Remote debugger'])
  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#b00fff" />
        <Routes />
      </>
  )
}
