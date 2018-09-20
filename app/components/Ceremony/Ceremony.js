import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles'
import { StackNavigator } from 'react-navigation'
export class Ceremony extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    render() {
        return (

            <View style={styles.ceremony}>
                <TouchableOpacity onPress={()=>this.myOnPress()}>
                    <Image source={this.props.imagePath}/>
                </TouchableOpacity>
                <Text style={styles.name}> {this.props.name} </Text>
            </View>
        );
    }

    myOnPress() {

    }
}