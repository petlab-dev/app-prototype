import styled from '@emotion/native';

import { Container, constantsValue } from '../../constants';

const {
  // COLOR_SECONDARY,
  // COLOR_LIGHT,
  COLOR_LIGHTER,
  // COLOR_LIGHTEST,
  COLOR_PRIMARY,
  // FONTSIZE_BIGGEST,
  // FONTSIZE_BIGGER,
  FONTSIZE_BIG,
  FONTSIZE_SMALL,
  // FONTSIZE_SMALLER,
  FONTSIZE_SMALLEST,
} = constantsValue;

// HomeScreen
export const HomeContainer = styled(Container)({
  display: 'flex',
  flex: 1,
  height: '100%',
  width: '100%',
  alignItems: 'center',
  userSelect: 'none',
});

export const HomeHospitalText = styled.Text({
  fontSize: 22,
  // fontWeight: 800,
  marginLeft: '10%',
  paddingTop: '2%',
});

export const Beta = styled.Image({
  width: 50,
  height: 20,
  marginLeft: '10%',
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

// HomeAnimalEnrollment
export const AnimalEnrollmentContainter = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const EnrollmentTextContainer = styled.View({
  flexDirection: 'column',
  justifyContent: 'center',
});

export const AnimalEnrollImage = styled.Image({
  width: 110,
  height: 110,
});

export const TextWrap = styled.Text({
  fontSize: FONTSIZE_SMALLEST,
});

export const TextWrapBold = styled.Text({
  fontWeight: 'bold',
  fontSize: FONTSIZE_SMALL,
  marginBottom: '5%',
});

// HomeHeader
export const HomeHeaderContainer = styled.View({
  alignItems: 'center',
  paddingTop: '10%',
});

export const Title = styled.Text({
  fontSize: FONTSIZE_BIG,
  // fontWeight: 900,
  color: COLOR_PRIMARY,
  letterSpacing: 1,
});

// HomeHospital
export const HomeHospitalContainer = styled.View({
  marginTop: '4%',
});

export const HospitalInformationContainer = styled.ScrollView({
  margin: '2%',
});

export const TextWrapForEnroll = styled.Text({
  fontSize: FONTSIZE_SMALL,
  fontWeight: 'bold',
  padding: 20,
});

export const HospitalInfoView = styled.View({
  flexDirection: 'column',
  width: 250,
  height: 200,
  margin: 10,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: COLOR_LIGHTER,
});

export const TextWrapForHospitalInfo = styled.Text({
  fontSize: FONTSIZE_SMALL,
  padding: 15,
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
  padding: 10,
  width: '80%',
  height: '100%',
});

export const SearchImage = styled.Image({
  margin: 10,
  width: 30,
  height: 30,
});

export const CenterView = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
});
