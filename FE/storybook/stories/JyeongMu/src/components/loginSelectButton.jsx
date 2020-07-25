/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../style/style';

export default function LoginSelectButton(props) {
  return (
    <View style={styles.selectButton}>
      <TouchableOpacity onPress={props.onClick}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: props.color }}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
