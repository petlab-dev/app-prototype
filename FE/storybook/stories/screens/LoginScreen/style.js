import styled from '@emotion/native';

export const LoginView = styled.View({
  display: 'flex',
  flex: 1,
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 50,
  paddingBottom: 30,
});
export const Header = styled.View({
  flex: 1,
  width: '50%',
  maxWidth: 300,
  marginBottom: 50,
  minHeight: 90,
});
export const HeaderText = styled.Text({
  fontSize: 25,
});
export const ViewSet = styled.View({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  width: '90%',
  minHeight: 30,
});
export const SubButtonView = styled.View({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-end',
});
export const InputData = styled.View({
  width: '50%',
  maxWidth: 300,
  marginBottom: '10%',
  flex: 1,
  minHeight: 100,
});
export const TopInput = styled.Text({
  fontSize: 18,
  marginTop: 18,
  color: 'grey',
});
export const InputBox = styled.TextInput({
  height: 30,
  width: '100%',
  borderColor: 'grey',
  borderBottomWidth: 1,
  flex: 1,
});
export const LoginButton = styled.TouchableOpacity({
  width: 200,
  height: 50,
  backgroundColor: '#FF7F50',
  border: 0,
  borderRadius: 30,
  paddingTop: 15,
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 20,
});
export const SubButton = styled.TouchableOpacity({
  height: 20,
  margin: 0,
  flexDirection: 'row',
  justifyContent: 'center',
});
export const SubButtonText = styled.Text({
  height: 50,
  width: 125,
  fontSize: 12,
});
export const IconButtonStyle = styled.TouchableOpacity({
  width: 60,
  height: 60,
  borderRadius: 45,
  backgroundColor: 'powderblue',
  margin: 4,
  paddingTop: 15,
  flexDirection: 'row',
  justifyContent: 'center',
});
export const LoginButtonText = styled.Text({
  fontSize: 12,
  color: '#FFFFFF',
  fontWeight: 'bold',
});