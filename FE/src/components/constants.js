import styled from '@emotion/native';

export const constantsValue = {
  COLOR_SECONDARY: '#71C0BB',
  COLOR_LIGHT: '#808080',
  COLOR_LIGHTER: '#EEEEEE',
  COLOR_LIGHTEST: '#FFF',
  COLOR_PRIMARY: '#f44336',
  FONTSIZE_BIGGEST: 35,
  FONTSIZE_BIGGER: 25,
  FONTSIZE_BIG: 22,
  FONTSIZE_SMALL: 17,
  FONTSIZE_SMALLER: 15,
  FONTSIZE_SAMALLEST: 12,
};

const {
  // COLOR_SECONDARY,
  // COLOR_LIGHT,
  // COLOR_LIGHTER,
  COLOR_LIGHTEST,
  // COLOR_PRIMARY,
  // FONTSIZE_BIGGEST,
  // FONTSIZE_BIGGER,
  FONTSIZE_BIG,
  FONTSIZE_SMALL,
  // FONTSIZE_SMALLER,
  FONTSIZE_SMALLEST,
} = constantsValue;

export const Container = styled.SafeAreaView({
  flex: 1,
  flexDirection: 'column',
  backgroundColor: COLOR_LIGHTEST,
});

export const TextWrap = styled.Text({
  fontSize: FONTSIZE_SMALLEST,
});

export const TextWrapBig = styled.Text({
  fontSize: FONTSIZE_BIG,
});

export const TextWrapBold = styled.Text({
  fontWeight: 'bold',
  fontSize: FONTSIZE_SMALL,
  marginBottom: '5%',
});

export const TextWrapContainer = styled.View({
  marginTop: '7%',
});
