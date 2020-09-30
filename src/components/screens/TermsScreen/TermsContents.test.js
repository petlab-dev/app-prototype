import React from 'react';
import { render } from '@testing-library/react-native';

import TermsContents from './TermsContents';

function renderTermsContents() {
  return render(<TermsContents />);
}
describe('TermsContent', () => {
  it('renders without exploding', () => {
    const { container } = renderTermsContents();

    expect(container).toBeTruthy();
  });

  it('renders image properly', () => {
    const { getByTestId } = renderTermsContents();

    expect(getByTestId('test-terms-contents-image')).toBeTruthy();
  });

  it('renders texts properly', () => {
    const { getByText } = renderTermsContents();

    expect(getByText('서비스 이용을위해')).toBeTruthy();
    expect(getByText('고객님의 동의가 필요합니다.')).toBeTruthy();
    expect(getByText('펫닥에서는 서비스 통합 이용약관과 개인정보')).toBeTruthy();
    expect(getByText('수집하고 있습니다. 아래 동의 버튼을 누르시면')).toBeTruthy();
    expect(getByText('다음 사항들에 대해 동의하신것으로 인정됩니다.')).toBeTruthy();
  });
});
