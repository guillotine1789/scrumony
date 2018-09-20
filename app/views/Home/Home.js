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
                    <Ceremony navigate = {navigate} name='Daily Stand-up' imagePath={require('../../images/ceremonies/daily/checklist.png')}/>
                    <Ceremony navigate = {navigate} name='Scrum Poker'
                              imagePath={require('../../images/ceremonies/scrumPoker/scrumPokerHome.png')}/>
                </View>
                <View style={styles.stack}>
                    <Ceremony navigate = {navigate} name='Retrospective'
                              imagePath={require('../../images/ceremonies/retrospective/feedbackHome.png')}/>
                    <Ceremony navigate = {navigate} name='Grooming' imagePath={require('../../images/ceremonies/grooming/shirtsHome.png')}/>
                </View>
            </View>
        );
    }
}
