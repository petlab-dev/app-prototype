import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    fontSize: 15,
  },
  text: {
    fontSize: 15,
  },
});

export default function ClosingMent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> You may receive SMS updates from</Text>
      <Text styels={styles.text}>Instagram and can opt out at any time. </Text>
    </View>
  );
}
