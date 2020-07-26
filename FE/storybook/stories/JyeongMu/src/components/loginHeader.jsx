/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../style/style';

export default function LoginHeader(props) {
  return (
    <View style={Styles.header}>
      <Text style={Styles.headerText}>{props.text}</Text>
    </View>
  );
}
