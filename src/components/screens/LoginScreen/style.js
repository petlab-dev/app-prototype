import styled from '@emotion/native';

import { COLOR_PRIMARY, COLOR_LIGHTEST } from '../../constants';

// IconButton
export const IconButtonStyle = styled.TouchableOpacity({
  width: 60,
  height: 60,
  borderRadius: 60,
  margin: 6,
  flexDirection: 'row',
  justifyContent: 'center',
});

export const IonButtonImage = styled.Image({
  width: 60,
  height: 60,
  borderRadius: 60,
  margin: 6,
  flexDirection: 'row',
  justifyContent: 'center',
});

// LoginScreen
export const LoginView = styled.SafeAreaView({
  maxHeight: 768,
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',
});

export const Logo = styled.Text({
  paddingTop: 40,
  color: COLOR_PRIMARY,
  fontFamily: 'Nunito_900Black',
  fontSize: 40,
  fontWeight: 'bold',
});

export const Header = styled.View({
  width: '60%',
  maxWidth: 300,
  marginTop: 65,
  minHeight: 60,
});

export const InputData = styled.View({
  width: '60%',
  maxWidth: 300,
  flex: 1,
  minHeight: 50,
});

export const InputBox = styled.TextInput({
  height: 50,
  width: '100%',
  padding: 10,
  borderColor: 'grey',
  borderBottomWidth: 1,
});

export const LoginButton = styled.TouchableOpacity({
  width: 170,
  height: 40,
  backgroundColor: COLOR_PRIMARY,
  borderRadius: 30,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 20,
});

export const LoginButtonText = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: 15,
  color: COLOR_LIGHTEST,
  fontWeight: 'bold',
});

export const ViewSet = styled.View({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  width: '90%',
  minHeight: 30,
});

export const SubButton = styled.TouchableOpacity({
  height: 20,
  margin: 0,
  flexDirection: 'row',
  justifyContent: 'center',
});

export const SubButtonText = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  height: 50,
  fontSize: 12,
});

// TopText
export const HeaderText = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: 13,
  fontWeight: 'bold',
  color: 'gray',
});
