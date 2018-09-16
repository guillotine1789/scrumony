import React from 'react';
import {View, StyleSheet, Image} from 'react-native'
import styles from "./styles"

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source= {require('../../images/ceremonies/scrumPoker/scrumPokerHome.png')}/>
                <Image source= {require('../../images/ceremonies/retrospective/feedbackHome.png')}/>
            </View>
        );
    }
}