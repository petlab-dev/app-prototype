import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput } from 'react-native';

import ClosingMent from './ClosingMent';
import AuthCheckHeader from './AuthCheckHeader';
import AuthCheckSelectButton from './AuthCheckSelectButton';

import { Container } from '../../constants';
import {
  Body,
  Select,
  TextInputWrap,
  ButtonContainer,
} from './style';

export default function AuthCheckScreen() {
  const [value, setValue] = useState('');
  const [state, setState] = useState({
    nextButton: true,
    toggleButton: true,
    defualtMessage: 'Phone Number 01011112222',
  });

  const { nextButton, toggleButton, defualtMessage } = state;

  function isDisabled(event) {
    setValue(event);
    if (value.length > 1) {
      setState({ ...state, nextButton: false });
      return;
    }
    setState({ ...state, nextButton: true });
  }

  function handleChangeToPhoneButton() {
    setState({ ...state, toggleButton: !toggleButton, defualtMessage: 'Phone Number 01011112222' });
  }

  function handleChangeToEmailButton() {
    setState({ ...state, toggleButton: !toggleButton, defualtMessage: 'Email Adrress email@adress.com' });
  }

  return (
    <Container>
      <AuthCheckHeader
        text="Enter Phone or Email"
      />
      <Body>
        <Select>
          <AuthCheckSelectButton
            onClick={handleChangeToPhoneButton}
            text="Phone"
            active={toggleButton}
          />
          <AuthCheckSelectButton
            onClick={handleChangeToEmailButton}
            text="Email"
            active={!toggleButton}
          />
        </Select>
        <TextInputWrap>
          <TextInput
            placeholder={defualtMessage}
            onChangeText={isDisabled}
          />
        </TextInputWrap>
        <ButtonContainer>
          <TouchableOpacity
            // onPress={}
            disabled={nextButton}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </ButtonContainer>
        <ClosingMent />
      </Body>
    </Container>
  );
}
