import styled from '@emotion/native';

export const constants = {
  COLOR_SECONDARY: '#71C0BB',
  COLOR_LIGHT: '#808080',
  COLOR_LIGHTER: '#EEEEEE',
  COLOR_LIGHTEST: '#FFF',
  FONTSIZE_BIGGEST: 35,
  FONTSIZE_BIGGER: 30,
  FONTSIZE_BIG: 22,
  FONTSIZE_SMALL: 17,
  FONTSIZE_SMALLER: 15,
  FONTSIZE_SAMALLEST: 12,
};

const {
  // COLOR_SECONDARY,
  // COLOR_LIGHT,
  COLOR_LIGHTER,
  COLOR_LIGHTEST,
  FONTSIZE_BIGGEST,
  FONTSIZE_BIGGER,
  FONTSIZE_BIG,
  FONTSIZE_SMALL,
  FONTSIZE_SMALLER,
  // FONTSIZE_SMALLEST,
} = constants;

export const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  flexDirection: 'column',
});

export const CenterView = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
});

export const Header = styled.View({
  flex: 1,
  alignItems: 'center',
  height: '7%',
  padding: '10%',
});

export const HomeHeaderContainer = styled.View({
  alignItems: 'center',
  paddingTop: 80,
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
  margin: '5%',
  justifyContent: 'space-around',
});

export const TextInputWrap = styled.View({
  padding: '2%',
  margin: '5%',
  borderRadius: 10,
  backgroundColor: COLOR_LIGHTER,
  width: '80%',
});

export const ButtonContainer = styled.View({
  width: '80%',
});

export const SelectButton = styled.View({
  flex: 1,
  alignItems: 'center',
});

export const SelectButtonColor = styled.Text(({ active }) => ({
  fontSize: FONTSIZE_BIGGER,
  fontWeight: 'bold',
  color: active ? '#1e90ff' : '#87cefa',
}));

export const TextWrap = styled.Text({
  fontSize: FONTSIZE_SMALLER,
});

export const TextWrapBig = styled.Text({
  fontSize: FONTSIZE_BIG,
});

export const TextWrapBold = styled.Text({
  fontWeight: 'bold',
  fontSize: FONTSIZE_SMALLER,
});

export const Title = styled.Text({
  fontSize: FONTSIZE_BIGGEST,
  fontWeight: 'bold',
  color: '#4169e1',
  textShadowColor: 'black',
  letterSpacing: 2,
});

export const SearchBoxContainer = styled.View({
  borderColor: '#4169e1',
  borderWidth: 2,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 20,
  width: 350,
  height: 70,
});

export const AnimalEnrollImage = styled.Image({
  width: 150,
  height: 150,
  margin: 20,
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
  padding: '2%',
});

export const HomeHospitalContainer = styled.View({
  padding: '2%',
});

export const EnrollmentTextContainer = styled.View({
  flexDirection: 'column',
  justifyContent: 'center',
});

export const HospitalInformationContainer = styled.ScrollView({
  padding: '2%',
});

export const HospitalInfoView = styled.View({
  flexDirection: 'column',
  margin: 20,
  backgroundColor: '#eeeeee',
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#aaaaaa',
});

export const TermsButtonContainer = styled.View({
  flexDirection: 'row',
  padding: '2%',
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
  flex: 1,
  margin: 20,
  fontSize: FONTSIZE_SMALL,
});

export const ConsentBotton = styled(CancelButton)({
  color: 'red',
});
