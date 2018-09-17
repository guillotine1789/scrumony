import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles'

export class Ceremony extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {styles.ceremony}>
                <TouchableOpacity onPress={this._onPressButton} >
                    <Image source={this.props.imagePath}/>
                </TouchableOpacity>
                <Text style = {styles.name}> {this.props.name} </Text>
            </View>
        );
    }

    _onPressButton() {

    }

}