import styled from '@emotion/native';

import {
  Container,
  COLOR_LIGHTER,
  COLOR_PRIMARY,
  FONTSIZE_BIG,
  FONTSIZE_SMALL,
  FONTSIZE_SMALLEST,
} from '../../constants';

// HomeAnimalEnrollment
export const AnimalEnrollmentContainter = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const AnimalEnrollImage = styled.Image({
  width: 110,
  height: 110,
});

export const EnrollmentTextContainer = styled.View({
  flexDirection: 'column',
  justifyContent: 'center',
});

export const TextWrapBold = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontWeight: 'bold',
  fontSize: FONTSIZE_SMALL,
  marginBottom: '5%',
});

export const TextWrap = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: FONTSIZE_SMALLEST,
});

// HomeBanner
export const HomeBannerContainer = styled.ScrollView(({ screenWidth }) => ({
  width: screenWidth,
}));

export const HomeBannerButton = styled.TouchableOpacity(({ screenWidth }) => ({
  flexDirection: 'column',
  width: screenWidth - 20,
  height: screenWidth === 512 ? 204.8 : (screenWidth * 2) / 5,
  marginLeft: 10,
  marginRight: 10,
  borderRadius: 10,
  backgroundColor: COLOR_LIGHTER,
}));

export const BannerImage = styled.Image(({ screenWidth }) => ({
  width: screenWidth - 20,
  height: screenWidth === 512 ? 204.8 : (screenWidth * 2) / 5,
  borderRadius: 10,
}));

// HomeBuyBanner
export const BuyBannerButton = styled.TouchableOpacity({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  borderRadius: 20,
});

export const BuyBannerImage = styled.Image({
  width: 300,
  height: 100,
  borderRadius: 20,
});

// HomeHeader
export const HomeHeaderContainer = styled.View({
  alignItems: 'center',
  paddingTop: '10%',
});

export const Title = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: FONTSIZE_BIG,
  color: COLOR_PRIMARY,
  letterSpacing: 1,
});

// HomeMap
export const CompassIconButton = styled.TouchableOpacity({
  zIndex: 1,
  position: 'absolute',
  paddingTop: 130,
  paddingLeft: 10,
});

export const MapButton = styled.TouchableOpacity({
  zIndex: 0,
  marginTop: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  borderRadius: 20,
});

export const MapButtonImage = styled.Image({
  width: 300,
  height: 150,
  borderRadius: 20,
});

// HomeQR
export const QRButton = styled.TouchableOpacity({
  width: 300,
  height: 150,
  zIndex: 0,
  marginTop: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
});

export const QRButtonImage = styled.Image({
  width: 100,
  height: 100,
  borderRadius: 20,
});

export const QRButtonText = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: 15,
  fontWeight: 'bold',
});

// HomeSearch
export const SearchBoxContainer = styled.View({
  maxWidth: 492,
  borderColor: COLOR_PRIMARY,
  borderWidth: 5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const SearchBox = styled.TextInput({
  fontFamily: 'NanumGothicCoding_700Bold',
  padding: 10,
  width: '80%',
  height: '100%',
});

export const SearchImage = styled.Image({
  margin: 10,
  width: 30,
  height: 30,
});

// HomeScreen
export const HomeContainer = styled(Container)({
  display: 'flex',
  flex: 1,
  height: '100%',
  width: '100%',
  alignItems: 'center',
  userSelect: 'none',
});

export const ButtonContainer = styled.View({
  position: 'relative',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  paddingBottom: 20,
});
