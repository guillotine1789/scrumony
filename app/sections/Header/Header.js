import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    myOnPress() {

    }

    render() {
        return (
            <View style={styles.headerView}>
                <FontAwesome name = "space-shuttle" size={15} color={'blue'}/>
                <Button onPress= {this.myOnPress} title='BUTTON'/>
                <Image style={styles.logoView} source= {require('../../images/logo/Scrumony_36p.png')}/>
                <Text style={styles.headerText}>{this.props.role}</Text>
                <Text style={styles.headerText}>{this.props.team}</Text>
            </View>
        );
    }
}


export default Header;