import React from 'react';
import {View, StyleSheet} from 'react-native'
import Header from "../sections/Header/Header";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header role='Developer' team='Team 4'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1
    }
});