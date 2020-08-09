import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';

import PreSignUpClosingMent from '../components/PreSignUpClosingMent';
import PreSignUpHeader from '../components/PreSignUpHeader';
import PreSignUpSelectButton from '../components/PreSignUpSelectButton';

import {
  Container,
  Body,
  Select,
  TextInputWrap,
  ButtonContainer,
} from '../styles';

export default function SignUpFirst() {
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
      <PreSignUpHeader
        text="Enter Phone or Email"
      />
      <Body>
        <Select>
          <PreSignUpSelectButton
            onClick={handleChangeToPhoneButton}
            text="Phone"
            active={toggleButton}
          />
          <PreSignUpSelectButton
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
          <Button
            title="Next"
            disabled={nextButton}
          />
        </ButtonContainer>
        <PreSignUpClosingMent />
      </Body>
    </Container>
  );
}
