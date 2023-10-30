import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{uri: 'https://alumnithrive.com/privacy-policy/'}} />
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
