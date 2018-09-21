import React from 'react';
import {View} from 'react-native'
import styles from "./styles"
import {Ceremony} from "../../components/Ceremony/Ceremony";

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.stack}>
                    <Ceremony  name='Daily Stand-up' imagePath={require('../../images/ceremonies/daily/checklist.png')} navigateTo = 'DailyMeeting' navigate = {navigate}/>
                    <Ceremony name='Scrum Poker' imagePath={require('../../images/ceremonies/scrumPoker/scrumPokerHome.png')} navigateTo = 'ScrumPoker' navigate = {navigate}/>
                </View>
                <View style={styles.stack}>
                    <Ceremony name='Retrospective' imagePath={require('../../images/ceremonies/retrospective/feedbackHome.png')} navigateTo = 'Retrospective' navigate = {navigate}/>
                    <Ceremony name='Grooming' imagePath={require('../../images/ceremonies/grooming/shirtsHome.png')} navigateTo = 'Grooming' navigate = {navigate}/>
                </View>
            </View>
        );
    }
}
