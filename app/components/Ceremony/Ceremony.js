import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles'

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
                <TouchableOpacity onPress={()=>this.props.navigate(this.props.navigateTo)}>
                    <Image source={this.props.imagePath}/>
                </TouchableOpacity>
                <Text style={styles.name}> {this.props.name} </Text>
            </View>
        );
    }
}