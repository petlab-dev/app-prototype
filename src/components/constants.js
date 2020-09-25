import styled from '@emotion/native';

export const COLOR_SECONDARY = '#71C0BB';
export const COLOR_LIGHT = '#808080';
export const COLOR_LIGHTER = '#EEEEEE';
export const COLOR_LIGHTEST = '#FFF';
export const COLOR_PRIMARY = '#f44336';
export const COLOR_RED = '#c43a31';
export const COLOR_GREEN = '#BBF1C4';
export const FONTSIZE_BIGGEST = 35;
export const FONTSIZE_BIGGER = 25;
export const FONTSIZE_BIG = 22;
export const FONTSIZE_SMALL = 17;
export const FONTSIZE_SMALLER = 15;
export const FONTSIZE_SMALLEST = 12;
export const MAX_HEIGHT = 768;
export const MAX_WIDTH = 512;

export const Container = styled.SafeAreaView({
  flex: 1,
  flexDirection: 'column',
  backgroundColor: COLOR_LIGHTEST,
  userSelect: 'none',
});

export const TextWrap = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: FONTSIZE_SMALLEST,
});

export const TextWrapBig = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: FONTSIZE_BIG,
});

export const TextWrapBold = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontWeight: 'bold',
  fontSize: FONTSIZE_SMALL,
  marginBottom: '5%',
});

export const TextWrapContainer = styled.View({
  marginTop: '7%',
});

export const CenterView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
