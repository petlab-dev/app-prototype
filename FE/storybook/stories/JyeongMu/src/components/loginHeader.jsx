/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style/style';

export default function LoginHeader(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.text}</Text>
    </View>
  );
}
