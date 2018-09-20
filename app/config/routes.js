import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Home from '../views/Home/Home'
import Retrospective from '../views/Retrospective/Retrospective'
import ScrumPoker from '../views/ScrumPoker/ScrumPoker'
import DailyMeeting from '../views/DailyMeeting/DailyMeeting'
import Grooming from '../views/Grooming/Grooming'

export const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Retrospective: {
        screen: Retrospective,
        navigationOptions: {
            headerTitle: 'Retrospective',
        },
    },
    ScrumPoker: {
        screen: ScrumPoker,
        navigationOptions: {
            headerTitle: 'ScrumPoker',
        },
    },
    DailyMeeting: {
        screen: DailyMeeting,
        navigationOptions: {
            headerTitle: 'DailyMeeting',
        },
    },
    Grooming: {
        screen: Grooming,
        navigationOptions: {
            headerTitle: 'Grooming',
        },
    },
});
