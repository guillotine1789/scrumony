import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import Home from "./app/views/Home/Home";
import { Font } from 'expo';
import {FontAwesome} from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
  }

    componentDidMount() {
        Font.loadAsync({
            'EvilIcons': require('./android/app/src/main/assets/fonts/EvilIcons.ttf'),
        });
        Font.loadAsync({
            'Ionicons': require('./android/app/src/main/assets/fonts/Ionicons.ttf'),
        });
        Font.loadAsync({
            'FontAwesome': require('./android/app/src/main/assets/fonts/FontAwesome.ttf'),
        });
    }
}

export const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: 'white'
    },
});