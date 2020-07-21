import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    height: '7%',
    paddingTop: '20%',
  },
  headerText: {
    fontSize: 30,
    fontStyle: 'italic',
    color: 'black',
  },
});

export default function LoginHeader({ test }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{test.text}</Text>
    </View>
  );
}
