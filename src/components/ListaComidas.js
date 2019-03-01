import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class ListaComidas extends Component {
  constructor(props) {
    super(props);

  }

  handleTouch = () => this.props.navigation.navigate('HomeProducts', {
      title: this.props.data.title,
      products: this.props.data.products
  })

  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={[styles.listaItem, {backgroundColor: this.props.data.bg}]}
            onPress={this.handleTouch}
            >
                <Image source={this.props.data.img} style={styles.listaImage} />

                <View>
                    <Text style={styles.listaTitle}>{this.props.data.title}</Text>
                    <Text style={styles.listaDescription}>{this.props.data.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    listaItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listaImage: {
        width: 64,
        height: 64,
        marginHorizontal: 20,
    },
    listaTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    listaDescription: {
        color: 'white',
        fontSize: 16
    }
})
