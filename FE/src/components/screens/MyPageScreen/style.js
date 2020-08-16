import styled from '@emotion/native';

import { constantsValue } from '../../constants';

const { COLOR_PRIMARY, MAX_HEIGHT } = constantsValue;

export const size = {
  maxWidth: 500,
  testBorderWidth: 0,
};

export const ProfilImg = styled.Image({
  height: 100,
  width: 100,
  marginBottom: 10,
});

export const PetImgBox = styled.View({
  height: 100,
  width: 100,
  marginLeft: 10,
  flexDirection: 'column',
  justifyContent: 'center',
});

export const PetImg = styled.Image({
  borderRadius: 100,
  height: '100%',
  width: '100%',
  alignItems: 'center',
});

export const PetImgText = styled.Text({
  width: 70,
  borderRadius: 70,
  marginTop: 90,
  textAlign: 'center',
  fontSize: 14,
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: COLOR_PRIMARY,
});

export const UpperContainer = styled.SafeAreaView({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
});

export const Container = styled.SafeAreaView({
  maxHeight: MAX_HEIGHT,
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  userSelect: 'none',
});

export const ProfileView = styled.View({
  width: '100%',
  maxWidth: size.maxWidth,
  minHeight: 200,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 20,
});

export const GradeButton = styled.TouchableOpacity({
  width: 100,
  height: 25,
  backgroundColor: COLOR_PRIMARY,
  border: 0,
  borderRadius: 30,
});

export const GradeButtonText = styled.Text({
  width: 80,
  color: 'white',
});

export const GradeImg = styled.Image({
  height: 20,
  width: 20,
  marginTop: 3,
  marginLeft: 3,
});

export const GradeImgContainer = styled.View({
  flex: 1,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 0,
});

export const ProfileButton = styled.TouchableOpacity({
  width: 150,
  maxWidth: size.maxWidth,
  height: 25,
  backgroundColor: 'white',
  marginTop: 10,
});

export const ProfileTextBox = styled.View({
  flex: 1,
  width: '100%',
  minHeight: 40,
  flexDirection: 'row',
  justifyContent: 'center',
});

export const ProfileText = styled.Text({
  flex: 1,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
});

export const ProfileTextImage = styled.Image({
  flex: 1,
  maxHeight: 20,
  maxWidth: 20,
  marginTop: 2,
});

export const FolowButtonContainer = styled.View({
  flex: 1.3,
  width: '100%',
  maxWidth: size.maxWidth,
  flexDirection: 'row',
  margin: 0,
});

export const FolowButton = styled.TouchableOpacity({
  width: '50%',
  height: 65,
  background: 'white',
  backgroundColor: 'white',
  flexDirection: 'space-start',
  alignItems: 'center',
});

export const FolowButtonCount = styled.Text({
  color: COLOR_PRIMARY,
  fontWeight: 'bold',
  fontSize: 20,
  marginTop: 6,
});

export const FolowButtonText = styled.Text({
  color: 'grey',
  fontWeight: 'bold',
  fontSize: 18,
});

export const BottomContainer = styled.View({
  height: 170,
  width: '100%',
  maxWidth: size.maxWidth,
});

export const PetImageContainerText = styled.Text({
  width: '100%',
  maxWidth: size.maxWidth,
  textAlign: 'left',
  fontSize: 20,
  fontWeight: 'bold',
  paddingTop: 20,
  paddingLeft: 20,
  paddingBottom: 10,
});

export const PetImageContainer = styled.ScrollView({
  width: '100%',
  maxWidth: size.maxWidth,
  minHeight: 100,
  flexDirection: 'row',
  borderWidth: size.testBorderWidth,
});

export const PetImageTextbar = styled.View({
  flex: 1,
  width: '100%',
  maxWidth: size.maxWidth,
  margin: 0,
  borderWidth: size.testBorderWidth,
});

export const Textbutton = styled.TouchableOpacity({
  height: 50,
  width: '100%',
  maxWidth: size.maxWidth,
  borderWidth: 1,
  borderColor: '#bbbbbb',
  textAlign: 'center',
  background: 'white',
  marginTop: 2,
  paddingLeft: 5,
  backgroundColor: 'white',
});

export const TextbuttonText = styled.Text({
  flex: 18,
  textAlign: 'left',
  paddingTop: 15,
});

export const TextbuttonCount = styled.Text({
  flex: 1,
  height: 20,
  width: 10,
  color: '#38ef7d',
  fontWeight: 'bold',
  fontSize: 16,
  marginTop: 14,
});

export const TextbuttonImg = styled.Image({
  flex: 1,
  maxHeight: 20,
  maxWidth: 20,
  marginTop: 15,
  marginRight: 10,
});

export const TextbuttonContainer = styled.View({
  flex: 1,
  width: '100%',
  flexDirection: 'row',
  margin: 0,
});
