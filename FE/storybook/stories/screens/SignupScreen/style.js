import styled from '@emotion/native';

import { constantsValue } from '../../constants';

const {
  // COLOR_SECONDARY,
  // COLOR_LIGHT,
  COLOR_LIGHTER,
  // COLOR_LIGHTEST,
  //   COLOR_PRIMARY,
  // FONTSIZE_BIGGEST,
  // FONTSIZE_BIGGER,
  FONTSIZE_BIG,
  FONTSIZE_SMALL,
  // FONTSIZE_SMALLER,
  FONTSIZE_SMALLEST,
} = constantsValue;

export const TextWrap = styled.Text({
  fontSize: FONTSIZE_SMALLEST,
});

export const TextWrapBig = styled.Text({
  fontSize: FONTSIZE_BIG,
});

export const TextWrapBold = styled.Text({
  fontWeight: 'bold',
  fontSize: FONTSIZE_SMALL,
  marginBottom: '3%',
});

export const RowView = styled.View({
  flexDirection: 'row',
});

export const CenterView = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
});

export const MarginCenterView = styled(CenterView)({
  margin: 24,
});

export const SignupInfoContainer = styled.View({
  height: '50%',
});

export const SingupInfoView = styled.View({
  flex: 1,
  margin: 10,
  borderBottomWidth: 1,
  borderBottomColor: COLOR_LIGHTER,
});

export const SignupTextInput = styled.TextInput({
  width: '100%',
});

export const SignupInfoImage = styled.Image({
  width: 40,
  height: 40,
});

export const SignupCancelButton = styled.Button({
});

export const TermsBottomButtonContainer = styled.View({
  justifyContent: 'flex-end',
  flex: 1,
});

export const TermsContentsContainer = styled.View({
  borderBottomWidth: 1,
  flexDirection: 'column',
  padding: '4%',
});

export const TermsHeaderContainer = styled.View({
  paddingTop: '5%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Container = styled.View({
  flex: 1,
  flexDirection: 'column',
});

export const SearchImage = styled.Image({
  margin: 10,
  width: 30,
  height: 30,
});
