/* eslint-disable react/prop-types */
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

export default function LoginSelectButton({ test }) {
  return (
    <View style={styles.selectButton}>
      <TouchableOpacity onPress={test.onClick}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: test.color }}>{test.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
