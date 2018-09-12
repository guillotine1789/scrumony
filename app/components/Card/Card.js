import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {isValueSideFlipped: true};
    }

    render() {
        return (
            <Text style={styles.card}>{this.props.value}</Text>
        );
    }
}


export default Card;