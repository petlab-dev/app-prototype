import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import TermsButton from './TermsButton';

function renderTermsButton() {
  return render(<TermsButton />);
}

describe('TermsButton', () => {
  it('renders without exploding', () => {
    const { container } = renderTermsButton();

    expect(container).toBeTruthy();
  });

  context('when click "펫닥 통합 이용 약관,"', () => {
    it('calls button event', () => {
      const { getByText } = renderTermsButton();

      fireEvent.press(getByText('펫닥 통합 이용 약관,'));

      // expect().toBeCalled();
    });
  });

  context('when click "개인정보 수집 및 이용정책,"', () => {
    it('calls button event', () => {
      const { getByText } = renderTermsButton();

      fireEvent.press(getByText('개인정보 수집 및 이용정책,'));

      // expect().toBeCalled();
    });
  });

  context('when click "제3자 정보제공동의"', () => {
    it('calls button event', () => {
      const { getByText } = renderTermsButton();

      fireEvent.press(getByText('제3자 정보제공동의'));

      // expect().toBeCalled();
    });
  });
});
