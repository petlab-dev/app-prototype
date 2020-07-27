import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

import ClosingMent from '../components/loginClosingMent';
import LoginHeader from '../components/loginHeader';
import LoginSelectButton from '../components/loginSelectButton';
import Styles from '../style/style';

export default function Login() {
  const [value, setValue] = useState('');
  const [color, setColor] = useState({ button1: '#1e90ff', button2: '#87cefa' });
  const [state, setState] = useState({ button: true, defualtMessage: 'Phone Number ex)01011112222' });

  const { button, defualtMessage } = state;

  function isDisabled(event) {
    setValue(event);
    if (value.length > 1) {
      setState({ ...state, button: false });
      return;
    }
    setState({ ...state, button: true });
  }

  function handlePhoneButton() {
    setColor({ button1: '#1e90ff', button2: '#87cefa' });
    setState({ ...state, defualtMessage: 'Phone Number ex)01011112222' });
  }

  function handleEmailButton() {
    setColor({ button1: '#87cefa', button2: '#1e90ff' });
    setState({ ...state, defualtMessage: 'Email Adrress ex)email@adress.com' });
  }

  return (
    <View style={Styles.container}>
      <LoginHeader
        text="Enter Phone or Email"
      />
      <View style={Styles.body}>
        <View style={Styles.select}>
          <LoginSelectButton
            onClick={handlePhoneButton}
            color={color.button1}
            text="Phone"
          />
          <LoginSelectButton
            onClick={handleEmailButton}
            color={color.button2}
            text="Email"
          />
        </View>
        <View style={Styles.textInput}>
          <TextInput
            placeholder={defualtMessage}
            onChangeText={isDisabled}
          />
        </View>
        <View style={Styles.buttonContainer}>
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
