import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';

import ClosingMent from '../components/loginClosingMent';
import LoginHeader from '../components/loginHeader';
import LoginSelectButton from '../components/loginSelectButton';
import {
  Container,
  Body,
  Select,
  TextInputWrap,
  ButtonContainer,
} from '../styles';

export default function Login() {
  const [value, setValue] = useState('');
  const [color, setColor] = useState({ button1: true, button2: false });
  const [state, setState] = useState({ button: true, defualtMessage: 'Phone Number ex)01011112222' });

  const { button, defualtMessage } = state;

  function isDisabled(event) {
    setValue(event);
    if (value.length > 1) setState({ ...state, button: false });
    else setState({ ...state, button: true });
  }

  function handleChangeToPhoneButton() {
    setColor({ button1: true, button2: false });
    setState({ ...state, defualtMessage: 'Phone Number ex)01011112222' });
  }

  function handleChangeToEmailButton() {
    setColor({ button1: false, button2: true });
    setState({ ...state, defualtMessage: 'Email Adrress ex)email@adress.com' });
  }

  return (
    <Container>
      <LoginHeader
        text="Enter Phone or Email"
      />
      <Body>
        <Select>
          <LoginSelectButton
            onClick={handleChangeToPhoneButton}
            text="Phone"
            active={color.button1}
          />
          <LoginSelectButton
            onClick={handleChangeToEmailButton}
            text="Email"
            active={color.button2}
          />
        </Select>
        <TextInputWrap>
          <TextInput
            placeholder={defualtMessage}
            onChangeText={isDisabled}
          />
        </TextInputWrap>
        <ButtonContainer>
          <Button
            title="Next"
            disabled={button}
          />
        </ButtonContainer>
        <ClosingMent />
      </Body>
    </Container>
  );
}
