import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

import ClosingMent from '../components/loginClosingMent';
import LoginHeader from '../components/loginHeader';
import LoginSelectButton from '../components/loginSelectButton';
import styles from '../style/style';

export default function Login() {
  const [value, setValue] = useState('');
  const [color, setColor] = useState({ button1: '#1e90ff', button2: '#87cefa' });
  const [state, setState] = useState({ button: true, defualtMessage: 'Phone Number ex)01011112222' });

  const { button, defualtMessage } = state;

  function isDisabled(event) {
    setValue(event);
    if (value.length > 1) setState({ ...state, button: false });
    else setState({ ...state, button: true });
  }

  function changeToPhoneButton() {
    setColor({ button1: '#1e90ff', button2: '#87cefa' });
    setState({ ...state, defualtMessage: 'Phone Number ex)01011112222' });
  }

  function changeToEmailButton() {
    setColor({ button1: '#87cefa', button2: '#1e90ff' });
    setState({ ...state, defualtMessage: 'Email Adrress ex)email@adress.com' });
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
