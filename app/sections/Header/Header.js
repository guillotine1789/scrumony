import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.header.text}>{this.props.role}</Text>
                <Text style={styles.header.text}>{this.props.team}</Text>
            </View>
        );
    }
}


export default Header;