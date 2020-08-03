import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';

import PreSignUpClosingMent from '../PreSignUpClosingMent';
import PreSignUpHeader from '../PreSignUpHeader';
import PreSignUpSelectButton from '../PreSignUpSelectButton';

import {
  Container,
  Body,
  Select,
  TextInputWrap,
  ButtonContainer,
} from '../../styles';

export default function PreSignUp({ navigation }) {
  const [value, setValue] = useState('');
  const [state, setState] = useState({
    nextButton: true,
    toggleButton: true,
    defualtMessage: 'Phone Number ex)01011112222',
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
    setState({ ...state, toggleButton: !toggleButton, defualtMessage: 'Phone Number ex)01011112222' });
  }

  function handleChangeToEmailButton() {
    setState({ ...state, toggleButton: !toggleButton, defualtMessage: 'Email Adrress ex)email@adress.com' });
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
            onPress={() => navigation.navigate('Main')}
          />
        </ButtonContainer>
        <PreSignUpClosingMent />
      </Body>
    </Container>
  );
}
