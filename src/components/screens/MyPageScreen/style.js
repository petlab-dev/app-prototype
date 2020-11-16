import styled from '@emotion/native';

import { COLOR_PRIMARY, MAX_HEIGHT, MAX_WIDTH } from '../../constants';

// FollowButtonWrapper
export const FollowButton = styled.TouchableOpacity({
  width: '50%',
  height: 65,
  backgroundColor: 'white',
  alignItems: 'center',
});

export const FollowButtonCount = styled.Text({
  color: COLOR_PRIMARY,
  fontFamily: 'NanumGothicCoding_700Bold',
  fontWeight: 'bold',
  fontSize: 20,
  marginTop: 6,
});

export const FollowButtonText = styled.Text({
  color: 'grey',
  fontFamily: 'NanumGothicCoding_700Bold',
  fontWeight: 'bold',
  fontSize: 18,
});

// MyPageScreen
export const Container = styled.SafeAreaView({
  maxHeight: MAX_HEIGHT,
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  userSelect: 'none',
});

export const UpperContainer = styled.SafeAreaView({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
});

export const ProfileView = styled.View({
  width: '100%',
  maxWidth: MAX_WIDTH,
  minHeight: 200,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 20,
});

export const ProfileImage = styled.Image({
  borderRadius: 100,
  height: 100,
  width: 100,
  marginBottom: 10,
});

export const GradeButton = styled.TouchableOpacity({
  width: 100,
  height: 25,
  backgroundColor: COLOR_PRIMARY,
  borderWidth: 0,
  borderRadius: 30,
});

export const GradeImageContainer = styled.View({
  flex: 1,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 0,
});

export const GradeButtonTextWrapper = styled.View({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const GradeButtonText = styled.Text({
  fontFamily: 'NanumGothicCoding_700Bold',
  width: 80,
  color: 'white',
});

export const FollowButtonContainer = styled.View({
  flex: 1.3,
  width: '100%',
  maxWidth: MAX_WIDTH,
  flexDirection: 'row',
  margin: 0,
});

export const BottomContainer = styled.View({
  height: 170,
  width: '100%',
  maxWidth: MAX_WIDTH,
});

export const PetImageContainerText = styled.Text({
  width: '100%',
  maxWidth: MAX_WIDTH,
  textAlign: 'left',
  fontFamily: 'NanumGothicCoding_700Bold',
  fontSize: 20,
  fontWeight: 'bold',
  paddingTop: 20,
  paddingLeft: 20,
  paddingBottom: 10,
});

export const PetImageContainer = styled.ScrollView({
  width: '100%',
  maxWidth: MAX_WIDTH,
  minHeight: 100,
  flexDirection: 'row',
  borderWidth: 0,
});

// MyPageProfileButton
export const ProfileButton = styled.TouchableOpacity({
  width: 150,
  maxWidth: MAX_WIDTH,
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
  fontFamily: 'NanumGothicCoding_700Bold',
  flex: 1,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
});

// PetImageSet
export const PetImageBox = styled.View({
  height: 100,
  width: 100,
  marginLeft: 10,
  flexDirection: 'column',
  justifyContent: 'center',
});

export const PetImage = styled.Image({
  borderRadius: 100,
  height: '100%',
  width: '100%',
  alignItems: 'center',
});
