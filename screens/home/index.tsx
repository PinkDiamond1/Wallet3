import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Transaction, { ITransaction } from '../../models/Transaction';

import Actions from './Actions';
import App from '../../viewmodels/App';
import Assets from './Assets';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { IToken } from '../../common/Tokens';
import { Modalize } from 'react-native-modalize';
import Networks from '../../viewmodels/Networks';
import Overview from './Overview';
import { Portal } from 'react-native-portalize';
import { StatusBar } from 'expo-status-bar';
import TokenDetail from './TokenDetail';
import TxDetail from './TxDetail';
import { observer } from 'mobx-react-lite';
import { useModalize } from 'react-native-modalize/lib/utils/use-modalize';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export default observer(({ navigation }: DrawerScreenProps<RootStackParamList, 'Home'>) => {
  const { currentWallet } = App;
  const { current } = Networks;
  const { ref: tokenDetailModalize, open: openTokenDetail, close: closeTokenDetail } = useModalize();
  const { ref: txDetailModalize, open: openTxDetail, close: closeTxDetail } = useModalize();
  const [selectedToken, setSelectedToken] = useState<IToken>();
  const [selectedTx, setSelectedTx] = useState<Transaction>();

  const onTokenPress = (token: IToken) => {
    setSelectedToken(token);
    setTimeout(() => openTokenDetail(), 0);
  };

  const onTxPress = (tx: Transaction) => {
    setSelectedTx(tx);
    setTimeout(() => openTxDetail(), 0);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
      }}
    >
      <Overview
        style={{ marginBottom: 2, backgroundColor: current.color }}
        address={currentWallet?.currentAccount?.address}
        balance={currentWallet?.currentAccount?.balanceUSD}
        network={current.network}
      />

      <Assets
        tokens={currentWallet?.currentAccount?.tokens}
        themeColor={current.color}
        loadingTokens={currentWallet?.currentAccount?.loadingTokens}
        onRefreshRequest={async () => await currentWallet?.refreshAccount()}
        onTokenPress={onTokenPress}
        onTxPress={onTxPress}
      />

      <Actions
        style={{ marginTop: 8 }}
        disabled={currentWallet?.currentAccount?.loadingTokens}
        onSendPress={() => PubSub.publish('openSendModal')}
        onRequestPress={() => PubSub.publish('openRequestModal')}
        themeColor={current.color}
      />

      <StatusBar style="dark" />

      <Portal>
        <Modalize
          adjustToContentHeight
          ref={tokenDetailModalize}
          snapPoint={450}
          modalStyle={{ borderTopStartRadius: 25, borderTopEndRadius: 25 }}
        >
          <TokenDetail
            token={selectedToken}
            themeColor={current.color}
            onSendPress={(token) => {
              PubSub.publish('openSendModal', { token });
              closeTokenDetail();
            }}
          />
        </Modalize>

        <Modalize
          ref={txDetailModalize}
          adjustToContentHeight
          modalStyle={{ borderTopStartRadius: 25, borderTopEndRadius: 25 }}
        >
          <TxDetail tx={selectedTx} />
        </Modalize>
      </Portal>
    </View>
  );
});
