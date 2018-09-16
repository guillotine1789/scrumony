import React from 'react';
import {Image, View, TouchableHighlight, Text} from 'react-native';
import styles from './styles'

export class Ceremony extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {styles.ceremony}>
                <TouchableHighlight onPress={this._onPressButton} >
                    <Image source={this.props.imagePath}/>
                </TouchableHighlight>
                <Text style = {styles.name}> {this.props.name} </Text>
            </View>
        );
    }

    _onPressButton() {

    }

}