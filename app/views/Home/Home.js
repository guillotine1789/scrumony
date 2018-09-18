import React from 'react';
import {View} from 'react-native'
import styles from "./styles"
import {Ceremony} from "../../components/Ceremony/Ceremony";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.stack}>
                    <Ceremony name = 'Daily Stand-up' imagePath = {require('../../images/ceremonies/daily/checklist.png')} />
                    <Ceremony name = 'Scrum Poker' imagePath = {require('../../images/ceremonies/scrumPoker/scrumPokerHome.png')} />
                </View>
                <View style={styles.stack}>
                    <Ceremony name = 'Retrospective' imagePath = {require('../../images/ceremonies/retrospective/feedbackHome.png')}/>
                    <Ceremony name = 'Grooming' imagePath = {require('../../images/ceremonies/grooming/shirtsHome.png')}/>
                </View>
            </View>
        );
    }
}
