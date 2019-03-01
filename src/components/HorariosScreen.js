import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import globalStyles from '../assets/styles/globalStyles'

export default class HorariosScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        tabBarLabel: 'Horários',
        tabBarIcon: ({focused, tintColor}) => {
            let img = focused ? require('../assets/images/horario_azul.png') : require('../assets/images/horario_preto.png')
            
            return <Image source={img} style={globalStyles.icone} />
        }
    }

    render() {
        return (
            <View>
                <Text> HorariosScreen </Text>
            </View>
        );
    }
}
