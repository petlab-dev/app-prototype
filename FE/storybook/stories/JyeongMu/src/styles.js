import styled from '@emotion/native';

export const constants = {
  COLOR_SECONDARY: '#71C0BB',
  COLOR_LIGHT: '#808080',
  COLOR_LIGHTER: '#EEEEEE',
  COLOR_LIGHTEST: '#FFF',
  FONTSIZE_BIGGEST: 35,
  FONTSIZE_BIGGER: 25,
  FONTSIZE_BIG: 22,
  FONTSIZE_SMALL: 17,
  FONTSIZE_SMALLER: 15,
  FONTSIZE_SAMALLEST: 12,
};

const {
  // COLOR_SECONDARY,
  COLOR_LIGHT,
  COLOR_LIGHTER,
  COLOR_LIGHTEST,
  // FONTSIZE_BIGGEST,
  FONTSIZE_BIGGER,
  FONTSIZE_BIG,
  FONTSIZE_SMALL,
  FONTSIZE_SMALLER,
  FONTSIZE_SMALLEST,
} = constants;

export const Container = styled.View({
  flex: 1,
  flexDirection: 'column',
});

export const CenterView = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
});

export const HomeCenterView = styled(CenterView)({
  height: 50,
});

export const Header = styled.View({
  flex: 1,
  alignItems: 'center',
  paddingTop: '10%',
});

export const HomeHeaderContainer = styled.View({
  alignItems: 'center',
  paddingTop: '10%',
});

export const HeaderText = styled.Text({
  fontSize: FONTSIZE_BIGGER,
  fontStyle: 'italic',
  color: 'black',
});

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
  fontSize: FONTSIZE_BIG,
  fontWeight: 700,
  color: active ? 'black' : COLOR_LIGHT,
  paddingBottom: '10%',
}));

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

export const Title = styled.Text({
  fontSize: FONTSIZE_BIG,
  fontWeight: 900,
  color: '#f44336',
  letterSpacing: 1,
});

export const SearchBoxContainer = styled.View({
  borderColor: '#f44336',
  borderWidth: 1.5,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 24,
  justifyContent: 'center',
  width: '85%',
});

export const SearchImage = styled.Image({
  margin: 10,
  width: 30,
  height: 30,
});

export const AnimalEnrollImage = styled.Image({
  width: 110,
  height: 110,
  margin: 15,
});

export const TermsContentsImage = styled.Image({
  width: 300,
  height: 170,
  margin: 20,
});

export const TextWrapForEnroll = styled.Text({
  fontSize: FONTSIZE_SMALL,
  fontWeight: 'bold',
  padding: 20,
});

export const SearchBox = styled.TextInput({
  padding: '2%',
  width: 250,
  height: 5,
});

export const AnimalEnrollmentContainter = styled.View({
  flexDirection: 'row',
  paddingTop: '2%',
  justifyContent: 'flex-start',
});

export const HomeHospitalContainer = styled.View({
  marginTop: '4%',
});

export const Beta = styled.Image({
  width: 50,
  height: 20,
  marginLeft: '10%',
});

export const HomeHospitalText = styled.Text({
  fontSize: 22,
  fontWeight: 800,
  marginLeft: '10%',
  paddingTop: '2%',
});

export const EnrollmentTextContainer = styled.View({
  flexDirection: 'column',
  justifyContent: 'center',
});

export const HospitalInformationContainer = styled.ScrollView({
  margin: '2%',
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

export const TermsButtonContainer = styled.View({
  flexDirection: 'row',
  padding: '2%',
  marginLeft: '10%',
});

export const TextWrapForHospitalInfo = styled.Text({
  fontSize: FONTSIZE_SMALL,
  padding: 15,
});

export const TermsContentsContainer = styled.View({
  borderWidth: 2,
  borderTopColor: COLOR_LIGHTER,
  borderLeftColor: COLOR_LIGHTEST,
  borderBottomColor: COLOR_LIGHTEST,
  borderRightWidth: 0,
  flexDirection: 'column',
  padding: '4%',
});

export const TermsHeaderContainer = styled.View({
  paddingTop: '5%',
  margin: '2%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ConsentButtonContainer = styled.View({
  flexDirection: 'row',
  padding: '2%',
});

export const CosentButton = styled.Text({
  fontSize: FONTSIZE_SMALLER,
  textDecorationLine: 'underline',
});

export const TermsBottomButtonContainer = styled.View({
  justifyContent: 'flex-end',
  flex: 1,
});

export const RowView = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-betwenn',
});

export const CancelButton = styled.Text({
  margin: 15,
  fontWeight: 500,
  fontSize: FONTSIZE_SMALL,
});

export const ConsentBotton = styled(CancelButton)({
  color: 'red',
});

export const BottomButtonContainer = styled.TouchableOpacity({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: COLOR_LIGHTER,
  borderBottomColor: COLOR_LIGHTEST,
});
