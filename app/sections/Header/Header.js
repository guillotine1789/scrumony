import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {Feather} from '@expo/vector-icons';
import { Header } from 'react-native-elements';

class HeaderScrumony extends React.Component {
    constructor(props) {
        super(props);
    }
    myOnPress() {

    }

    render() {
        return (
            <View>
                <Header style={styles.headerView} backgroundColor={'#65AAAB'}
                    leftComponent={<Feather name="menu" size={30} color="#073030" />}
                    centerComponent={<Image style={styles.logoView} source= {require('../../images/logo/Scrumony_36p.png')}/>}
                    rightComponent={<Feather name="home" size={30} color="#073030" />}
                />
            </View>
        );
    }
}


export default HeaderScrumony;