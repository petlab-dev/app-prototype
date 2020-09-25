import styled from '@emotion/native';

import {
  COLOR_LIGHT,
  COLOR_LIGHTER,
  COLOR_LIGHTEST,
  FONTSIZE_BIGGER,
  FONTSIZE_BIG,
  FONTSIZE_SMALLEST,
} from '../../constants';

// AuthCheckHeader
export const Header = styled.View({
  flex: 1,
  alignItems: 'center',
  paddingTop: '10%',
});

export const HeaderText = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: FONTSIZE_BIGGER,
  fontStyle: 'italic',
  color: 'black',
});

// SelectButton
export const SelectButton = styled.View(({ active }) => ({
  flex: 1,
  alignItems: 'center',
  borderWidth: 2,
  borderBottomColor: active ? 'black' : COLOR_LIGHT,
  borderTopColor: COLOR_LIGHTEST,
  borderLeftColor: COLOR_LIGHTEST,
  borderRightWidth: 0,
}));

export const SelectButtonColor = styled.Text(({ active }) => ({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: FONTSIZE_BIG,
  color: active ? 'black' : COLOR_LIGHT,
  paddingBottom: '10%',
}));

// ClosingMent
export const TextWrapContainer = styled.View({
  marginTop: '7%',
});

export const TextWrap = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: FONTSIZE_SMALLEST,
});

// AuthCheckScreen
export const Body = styled.View({
  flex: 9,
  alignItems: 'center',
});

export const Select = styled.View({
  flexDirection: 'row',
  paddingTop: '5%',
  width: '80%',
});

export const TextInputWrap = styled.View({
  padding: '7%',
  margin: '7%',
  borderWidth: 1,
  borderColor: COLOR_LIGHT,
  backgroundColor: COLOR_LIGHTER,
  width: '80%',
});

export const ButtonContainer = styled.View({
  width: '80%',
});
