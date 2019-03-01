import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import globalStyles from '../assets/styles/globalStyles'

export default class ContatoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        tabBarLabel: 'Contato',
        tabBarIcon: ({focused, tintColor}) => {
            let img = focused ? require('../assets/images/contato_azul.png') : require('../assets/images/contato_preto.png')
            
            return <Image source={img} style={globalStyles.icone} />
        }
    }

    render() {
        return (
            <View>
                <Text> ContatoScreen </Text>
            </View>
        );
    }
}
