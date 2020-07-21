import React, { useState } from 'react';
import {
  StyleSheet, View, Button, TextInput,
} from 'react-native';

import ClosingMent from '../src/components/loginClosingMent';
import LoginHeader from '../src/components/loginHeader';
import LoginSelectButton from '../src/components/loginSelectButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  body: {
    flex: 9,
    alignItems: 'center',
  },
  select: {
    flexDirection: 'row',
    margin: '5%',
    justifyContent: 'space-around',
  },
  normalBody: {
    margin: '3%',
  },
  textInput: {
    padding: '2%',
    margin: '5%',
    borderRadius: 10,
    backgroundColor: '#eeeeee',
    width: '80%',
  },
  buttonContainer: {
    width: '80%',
  },
});

export default function Login() {
  const [state, setState] = useState({
    button: true,
    value: '',
    defualtMessage: 'Phone Number ex)01011112222',
    color: { button1: '#1e90ff', button2: '#87cefa' },
  });

  const {
    button, value, defualtMessage, color,
  } = state;

  function isDisabled(event) {
    setState({ ...state, value: event });
    if (value.length > 1) setState({ ...state, button: false });
    else setState({ ...state, button: true });
  }

  function changeToPhoneButton() {
    setState({
      ...state, defualtMessage: 'Phone Number ex)01011112222', button1: '#1e90ff', button2: '#87cefa',
    });
  }

  function changeToEmailButton() {
    setState({
      ...state, defualtMessage: 'Email Adrress ex)email@adress.com', button1: '#1e90ff', button2: '#87cefa',
    });
  }

  return (
    <View style={styles.container}>
      <LoginHeader
        text="Enter Phone or Email"
      />
      <View style={styles.body}>
        <View style={styles.select}>
          <LoginSelectButton
            onClick={changeToPhoneButton}
            color={color.button1}
            text="Phone"
          />
          <LoginSelectButton
            onClick={changeToEmailButton}
            color={color.button2}
            text="Email"
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder={defualtMessage}
            onChangeText={isDisabled}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            disabled={button}
          />
        </View>
        <ClosingMent />
      </View>
    </View>
  );
}
