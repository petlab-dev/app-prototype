/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
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
export default function LoginHeader(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.text}</Text>
    </View>
  );
}
