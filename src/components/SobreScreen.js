import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import globalStyles from '../assets/styles/globalStyles'

export default class SobreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        tabBarLabel: 'Sobre',
        tabBarIcon: ({focused, tintColor}) => {
            let img = focused ? require('../assets/images/sobre_azul.png') : require('../assets/images/sobre_preto.png')
            
            return <Image source={img} style={globalStyles.icone} />
        }
    }

    render() {
        return (
            <View>
                <Text> SobreScreen </Text>
            </View>
        );
    }
}
