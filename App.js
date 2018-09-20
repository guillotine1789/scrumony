import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import Home from './app/views/Home/Home';
import {Font} from 'expo';
import HeaderScrumony from './app/sections/Header/Header';
import { HomeStack } from './app/config/routes';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Font.loadAsync({
            'Member': require('./android/app/src/main/assets/fonts/Member.otf'),
            'Kamikaze': require('./android/app/src/main/assets/fonts/Kamikaze.ttf'),
            'Kamikaze3D': require('./android/app/src/main/assets/fonts/Kamikaze3DGradient.ttf'),
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderScrumony role='Developer' team='Team 4'/>
                <HomeStack/>
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: 'white'
    },
});