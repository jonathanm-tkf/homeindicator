/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  StatusBar,
  Modal,
} from 'react-native';

import {HomeIndicator} from 'react-native-home-indicator';

const App: () => React$Node = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeIndicator autoHidden={true} />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Button title="Open Modal" onPress={() => setIsVisible(true)} />
        </View>
      </SafeAreaView>
      <Modal visible={isVisible}>
        <SafeAreaView style={styles.safeAreaView}>
          <HomeIndicator autoHidden={true} />
          <View style={[styles.container, styles.containerModal]}>
            <Button title="Close Modal" onPress={() => setIsVisible(false)} />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  containerModal: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
