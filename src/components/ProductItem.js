import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.productItem}>
        <Image resizeMode='contain' source={this.props.data.img} style={styles.productImagem} />
        <Text style={styles.productName}>{this.props.data.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productItem: {
    height: 100,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImagem: {
    height: 80,
    width: 150,
  },
  productName: {
    fontSize: 16,

  }
})
