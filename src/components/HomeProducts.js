import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ProductItem from './ProductItem'

export default class HomeProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.navigation.state.params.products
        };
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    })

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <ProductItem data={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCCCCC'
    }
})
