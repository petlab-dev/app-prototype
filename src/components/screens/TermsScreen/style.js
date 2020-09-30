import styled from '@emotion/native';

import {
  COLOR_LIGHTER,
  COLOR_LIGHTEST,
  FONTSIZE_SMALL,
  FONTSIZE_SMALLER,
} from '../../constants';

// TermsBottomButton
export const TermsBottomButtonContainer = styled.View({
  justifyContent: 'flex-end',
  flex: 1,
});

export const CancelButton = styled.Text({
  margin: 15,
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: FONTSIZE_SMALL,
});

export const ConsentBotton = styled(CancelButton)({
  color: 'red',
});

export const RowView = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const BottomButtonContainer = styled.TouchableOpacity({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: COLOR_LIGHTER,
  borderBottomColor: COLOR_LIGHTEST,
});

// TermsButton
export const TermsButtonContainer = styled.View({
  flexDirection: 'row',
  padding: '2%',
  marginLeft: '10%',
});

export const CosentButton = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: FONTSIZE_SMALLER,
  textDecorationLine: 'underline',
});

// TermsContents
export const TermsContentsContainer = styled.View({
  borderWidth: 2,
  borderTopColor: COLOR_LIGHTER,
  borderLeftColor: COLOR_LIGHTEST,
  borderBottomColor: COLOR_LIGHTEST,
  borderRightWidth: 0,
  flexDirection: 'column',
  padding: '4%',
});

export const TermsContentsImage = styled.Image({
  width: 300,
  height: 170,
  margin: 20,
});

// TermsHeader
export const TermsHeaderContainer = styled.View({
  paddingTop: '5%',
  margin: '2%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const TextWrapBold = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontWeight: 'bold',
  fontSize: FONTSIZE_SMALL,
  marginBottom: '5%',
});
