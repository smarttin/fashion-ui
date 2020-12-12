import 'react-native-gesture-handler';
import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';
import { LoadAssets, theme } from './src/components';
import { Onboarding, Welcome } from './src/Authentication';
import { Routes } from './src/components/Navigation';
import { authAssets } from './src/data';

const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
  'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
  'SFProDisplay-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
};

const assets = [...authAssets];

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
