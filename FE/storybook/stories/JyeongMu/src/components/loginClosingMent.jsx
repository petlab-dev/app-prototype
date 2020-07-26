import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../style/style';

export default function ClosingMent() {
  return (
    <View style={Styles.tail}>
      <Text style={Styles.text}> You may receive SMS updates from</Text>
      <Text styels={Styles.text}>Instagram and can opt out at any time. </Text>
    </View>
  );
}
