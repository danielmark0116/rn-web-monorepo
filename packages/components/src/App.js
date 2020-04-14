/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>hello world</Text>
          <Text>hello world 2.0</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
