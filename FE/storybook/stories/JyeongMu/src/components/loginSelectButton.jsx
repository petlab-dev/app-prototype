/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../style/style';

export default function LoginSelectButton(props) {
  return (
    <View style={Styles.selectButton}>
      <TouchableOpacity onPress={props.onClick}>
        <Text style={[Styles.buttonText, { color: props.color }]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
