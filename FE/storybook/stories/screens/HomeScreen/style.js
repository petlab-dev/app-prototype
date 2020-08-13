import styled from '@emotion/native';

import { constantsValue } from '../../constants';

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

// HomeAnimalEnrollment
export const AnimalEnrollmentContainter = styled.View({
  flexDirection: 'row',
  paddingTop: '2%',
  justifyContent: 'flex-start',
});

export const EnrollmentTextContainer = styled.View({
  flexDirection: 'column',
  justifyContent: 'center',
});

export const AnimalEnrollImage = styled.Image({
  width: 110,
  height: 110,
  margin: 15,
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
  borderColor: COLOR_PRIMARY,
  borderWidth: 1.5,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 24,
  justifyContent: 'center',
  width: '85%',
});

export const SearchBox = styled.TextInput({
  padding: '2%',
  width: 250,
  height: 5,
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

export const HomeCenterView = styled(CenterView)({
  height: 50,
});