import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from "./redux/store"
import { API_TEST, API_MORE } from "@env";

import Main from './components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Main/>
        <Text>{API_MORE}</Text>
        <Text>{API_TEST}</Text>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
