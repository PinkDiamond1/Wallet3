// @ts-nocheck

import * as SplashScreen from 'expo-splash-screen';

import AppViewModel, { AppVM } from './viewmodels/App';
import AuthViewModel, { Authentication } from './viewmodels/Authentication';
import Modals, { LockScreen } from './screens/Modalize';
import { TouchableOpacity, UIManager } from 'react-native';

import { About } from './screens/settings/About';
import AddToken from './screens/tokens/AddToken';
import Backup from './screens/settings/Backup';
import ChangePasscode from './screens/settings/ChangePasscode';
import Currencies from './screens/settings/Currencies';
import FlashMessage from 'react-native-flash-message';
import { Host } from 'react-native-portalize';
import { Ionicons } from '@expo/vector-icons';
import LandScreen from './screens/land';
import Languages from './screens/settings/Languages';
import NFTDetails from './screens/nfts/Details';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/profile';
import QRScan from './screens/misc/QRScan';
import React from 'react';
import Root from './screens/Root';
import { StatusBar } from 'expo-status-bar';
import Theme from './viewmodels/settings/Theme';
import Themes from './screens/settings/Themes';
import Tokens from './screens/tokens/SortTokens';
import VerifySecret from './screens/settings/VerifySecret';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import i18n from './i18n';
import { observer } from 'mobx-react-lite';
import { useFonts } from 'expo-font';

SplashScreen.hideAsync();
AppViewModel.init();

UIManager.setLayoutAnimationEnabledExperimental?.(true);

const StackRoot = createNativeStackNavigator();

const App = observer(({ app, appAuth }: { app: AppVM; appAuth: Authentication }) => {
  const { Navigator, Screen } = StackRoot;
  const { t } = i18n;
  const { backgroundColor, foregroundColor, statusBarStyle } = Theme;

  const [loaded] = useFonts({
    Questrial: require('./assets/fonts/Questrial.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Host style={{ backgroundColor: backgroundColor }}>
        {app.initialized ? (
          app.hasWallet ? (
            <Navigator
              initialRouteName="Root"
              screenOptions={({ navigation }) => {
                return {
                  headerTransparent: true,
                  headerTintColor: foregroundColor,
                  contentStyle: { backgroundColor },
                  headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.pop()} style={{ margin: -12, padding: 12, zIndex: 99 }}>
                      <Ionicons name="arrow-back-outline" size={20} color={foregroundColor} />
                    </TouchableOpacity>
                  ),
                };
              }}
            >
              <Screen name="Root" component={Root} options={{ headerShown: false }} />
              <Screen name="Languages" component={Languages} options={{ title: t('settings-languages') }} />
              <Screen name="Currencies" component={Currencies} options={{ title: t('settings-currencies') }} />
              <Screen name="Themes" component={Themes} options={{ title: t('settings-themes') }} />
              <Screen name="ChangePasscode" component={ChangePasscode} options={{ title: t('settings-security-passcode') }} />
              <Screen name="Backup" component={Backup} options={{ title: t('settings-security-backup') }} />
              <Screen name="VerifySecret" component={VerifySecret} options={{ title: t('settings-security-backup-verify') }} />
              <Screen name="AddToken" component={AddToken} options={{ title: t('home-add-token-title') }} />
              <Screen name="About" component={About} options={{ title: t('about-title') }} />
              <Screen
                name="Profile"
                component={ProfileScreen}
                options={({ navigation }) => {
                  return {
                    headerTransparent: true,
                    title: '',
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.pop()} style={{ margin: -12, padding: 12, zIndex: 99 }}>
                        <Ionicons name="arrow-back-outline" size={20} color="#fff" />
                      </TouchableOpacity>
                    ),
                  };
                }}
              />
              <Screen
                name="QRScan"
                component={QRScan}
                options={({ navigation }) => {
                  return {
                    animation: 'slide_from_bottom',
                    headerTintColor: '#ffffff',
                    title: t('qrscan-title'),
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.pop()}>
                        <Ionicons name="arrow-back-outline" size={20} color="#ffffff" />
                      </TouchableOpacity>
                    ),
                  };
                }}
              />
              <Screen
                name="Tokens"
                component={Tokens}
                options={({ navigation }) => {
                  return {
                    title: t('home-tokens-title'),
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.navigate('AddToken')} style={{ margin: -8, padding: 8 }}>
                        <Ionicons name="add-circle-outline" size={25} color={foregroundColor} />
                      </TouchableOpacity>
                    ),
                  };
                }}
              />

              <Screen
                name="NFTDetails"
                component={NFTDetails}
                options={() => {
                  return { headerShown: false };
                }}
              />
            </Navigator>
          ) : (
            <Navigator>
              <Screen name="Land" component={LandScreen} options={{ headerShown: false }} />
            </Navigator>
          )
        ) : undefined}
      </Host>

      {Modals({ app, appAuth })}

      <LockScreen app={app} appAuth={appAuth} />
      <FlashMessage position="top" />
      <StatusBar style={statusBarStyle} />
    </NavigationContainer>
  );
});

export default () => <App app={AppViewModel} appAuth={AuthViewModel} />;
