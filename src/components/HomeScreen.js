import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import globalStyles from '../assets/styles/globalStyles'

import HomeList from './HomeList'
import HomeProducts from './HomeProducts'

const Navigator = createStackNavigator({
    HomeList: {
        screen: HomeList
    },
    HomeProducts: {
        screen: HomeProducts
    }
}, {
    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => {
            let img = focused ? require('../assets/images/home_azul.png') : require('../assets/images/home_preto.png')
            
            return <Image source={img} style={globalStyles.icone} />
        }
    }
})

export default Navigator
