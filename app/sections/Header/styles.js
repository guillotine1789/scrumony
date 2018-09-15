import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';

export default StyleSheet.create({
    headerText: {
        textAlign: 'right',
        color: 'black',
        flex : 2
    },
    headerView: {
        flex : 1,
        flexDirection : 'row',
        alignItems: 'center',
        backgroundColor : 'white'
    },
    logoView: {
        flex : 2
    },
    backButton: {
      flex : 1
    }
});