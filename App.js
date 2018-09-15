import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./app/views/Home";
import { Font } from 'expo';
import {FontAwesome} from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
          <FontAwesome name = "space-shuttle" size={15} color={'orange'}/>
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

const styles = StyleSheet.create({
    container: {
        flex : 1
    }
});