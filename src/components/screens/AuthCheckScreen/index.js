import React from 'react';
import { Text, TouchableOpacity, TextInput } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { get } from '../../../utils';
import { handleChangeToPhoneButton, handleChangeToEmailButton, isDisabled } from '../../../slice';
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

// export default function AuthCheckScreen({ navigation }) {
export default function AuthCheckScreen() {
  const dispatch = useDispatch();

  const toggleButton = useSelector(get('toggleButton'));
  const defaultMessage = useSelector(get('defaultMessage'));
  const nextButton = useSelector(get('nextButton'));
  return (
    <Container>
      <AuthCheckHeader
        text="Enter Phone or Email"
      />
      <Body>
        <Select>
          <AuthCheckSelectButton
            onClick={dispatch(handleChangeToPhoneButton)}
            text="Phone"
            active={toggleButton}
          />
          <AuthCheckSelectButton
            onClick={dispatch(handleChangeToEmailButton)}
            text="Email"
            active={!toggleButton}
          />
        </Select>
        <TextInputWrap>
          <TextInput
            placeholder={defaultMessage}
            onChangeText={dispatch(isDisabled)}
          />
        </TextInputWrap>
        <ButtonContainer>
          <TouchableOpacity
            // onPress={() => navigation.navigate('TermsScreen')}
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
