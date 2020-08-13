/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

import {
  Text,
} from 'react-native';

import {
  SignupInfoContainer,
  SingupInfoView,
  RowView,
  SearchImage,
  SignupTextInput,
} from '../styles';

export default function SignupInfo({ signupLayout }) {
  return (
    <SignupInfoContainer>
      {
        signupLayout.map((item) => (
          <SingupInfoView
            key={item.key}
          >
            <Text>
              {item.title}
            </Text>
            <RowView>
              {/* <SearchImage source={require(item.require)} /> */}
              <SearchImage source={require('../assets/Email.png')} />
              <SignupTextInput placeholder={item.textInput} />
            </RowView>
          </SingupInfoView>
        ))
      }
    </SignupInfoContainer>
  );
}
