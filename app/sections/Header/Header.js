import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.headerView}>
                <Button onPress={this.props.role}
                        icon={ <Icon
                            name='arrow-left'
                            size={15}
                            color='white'/>
                    }
                    title='BUTTON'/>
                <Image style={styles.logoView} source= {require('../../images/logo/Scrumony_36p.png')}/>
                <Text style={styles.headerText}>{this.props.role}</Text>
                <Text style={styles.headerText}>{this.props.team}</Text>
            </View>
        );
    }
}


export default Header;