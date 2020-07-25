import React from 'react';
import { View, Text } from 'react-native';
import styles from '../style/style';

export default function ClosingMent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> You may receive SMS updates from</Text>
      <Text styels={styles.text}>Instagram and can opt out at any time. </Text>
    </View>
  );
}
