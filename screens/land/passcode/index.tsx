import * as Animatable from 'react-native-animatable';

import { Button, Numpad, NumpadChar } from '../../../components';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { secondaryFontColor } from '../../../constants/styles';
import styles from '../styles';

export default () => {
  const passcodeLength = 6;
  const [passcode, setPasscode] = useState('');
  const [confirm, setConfirm] = useState('');
  const passcodeView = useRef<Animatable.View>(null);

  const onNumpadPress = (value: NumpadChar) => {
    if (value === 'del') {
      setPasscode(passcode.slice(0, -1));
      return;
    }

    if (value === 'clear') {
      setPasscode('');
      return;
    }

    if (passcode.length >= passcodeLength) return;

    setPasscode((pre) => pre + value);
  };

  useEffect(() => {
    if (passcode.length < passcodeLength) return;
    if (confirm) {
      if (passcode === confirm) {
      } else {
        passcodeView.current?.shake?.();
        setTimeout(() => setPasscode(''), 500);
      }
      return;
    }

    setConfirm(passcode);
    setPasscode('');
  }, [passcode]);

  const renderEmptyCircle = (index: number) => (
    <View key={index} style={{ borderRadius: 10, width: 20, height: 20, borderWidth: 2, marginHorizontal: 6 }} />
  );

  const renderFilledCircle = (index: number) => (
    <View
      key={index}
      style={{ borderRadius: 10, backgroundColor: 'black', width: 20, height: 20, borderWidth: 2, marginHorizontal: 6 }}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.rootContainer}>
        <View style={{ flex: 1 }} />

        <Text style={{ textAlign: 'center', marginBottom: 16, color: secondaryFontColor }}>
          {confirm ? 'Please enter again' : ''}
        </Text>

        <Animatable.View ref={passcodeView as any} style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {new Array(passcode.length).fill(0).map((_, index) => renderFilledCircle(index))}
          {new Array(passcodeLength - passcode.length).fill(0).map((_, index) => renderEmptyCircle(index))}
        </Animatable.View>

        <View style={{ flex: 1 }} />

        <Numpad onPress={onNumpadPress} disableDot />
        <Button title="Done" />
      </View>
    </SafeAreaView>
  );
};
