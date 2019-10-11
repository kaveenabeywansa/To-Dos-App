import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/store';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

export default function App() {
  StatusBar.setHidden(true);
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
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
