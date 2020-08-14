import styled from '@emotion/native';

export const size = {
  maxWidth: 500,
  testBorderWidth: 0,
};

export const ProfilImg = styled.Image({
  height: 100,
  width: 100,
  marginBottom: 10,
});
export const PetImg = styled.ImageBackground({
  height: '100%',
  width: '100%',
});
export const PetImgBox = styled.View({
  height: 100,
  width: 100,
  marginLeft: 2,
  marginRight: 2,
  borderWidth: 1,
  backgroundColor: 'white',
  borderColor: '#bbbbbb',
});
export const PetImgText = styled.Text({
  marginTop: 75,
  textAlign: 'center',
  fontSize: 14,
});

export const Container = styled.View({
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#eeeeee',
  paddingBottom: 20,
  userSelect: 'none',
});
export const ProfileView = styled.View({
  flex: 6,
  width: '100%',
  maxWidth: size.maxWidth,
  minHeight: 200,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  //background: 'linear-gradient(to bottom, #38ef7d, #11998e 50%, white 50% )',
  backgroundColor: 'white',
  paddingBottom: 10,

});
export const GradeButton = styled.TouchableOpacity({
  width: 100,
  height: 25,
  backgroundColor: '#38ef7d',
  border: 0,
  borderRadius: 30,
  paddingTop: 0,
  textAlign: 'center',
});
export const GradeButtonText = styled.Text({
  color: 'white',
  marginTop: 3,
  marginLeft: 7,
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
  flex: 1,
  minHeight: 65,
  width: '100%',
  maxWidth: size.maxWidth,
  height: '10%',
  flexDirection: 'row',
  margin: 0,
});
export const FolowButton = styled.TouchableOpacity({
  width: '50%',
  height: 65,
  borderWidth: 1,
  borderColor: '#bbbbbb',
  background: 'white',
  margin: 0,
  backgroundColor: 'white',
  flexDirection: 'column',
  alignItems: 'center',

});
export const FolowButtonCount = styled.Text({
  color: '#38ef7d',
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
  width: '100%',
  maxWidth: size.maxWidth,
  backgroundColor: '#eeeeee',
  borderWidth: 1,
  borderColor: '#eeeeee',
});
export const PetImageContainerText = styled.Text({
  width: '100%',
  maxWidth: size.maxWidth,
  textAlign: 'left',
  marginLeft: 10,
});
export const PetImageContainer = styled.View({
  flex: 4,
  width: '100%',
  maxWidth: size.maxWidth,
  minHeight: 100,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: 0,
  borderWidth: size.testBorderWidth,
  padding: 2,
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