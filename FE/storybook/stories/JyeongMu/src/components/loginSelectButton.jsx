/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: 'center',
  },
  selectButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default function LoginSelectButton(props) {
  return (
    <View style={styles.selectButton}>
      <TouchableOpacity onPress={props.onClick}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: props.color }}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
