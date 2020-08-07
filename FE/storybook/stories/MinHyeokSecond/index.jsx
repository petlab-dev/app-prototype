import React, { useState } from 'react';
import {
  Text, View, Image,
} from 'react-native';

import FolowButton from './folowButtonComponent';
import TextButton from './textButton';
import PetImgSet from './petImgSet';
import ProfileButton from './profileButton';

import {
  ProfilImg,
  GradeButton,
  GradeImg,
  GradeButtonText,
  GradeImgContainer,
  Container,
  TitleBar,
  TitleCancle,
  TitleText,
  TitleSetting,
  ProfileView,
  FolowButtonContainer,
  PetImageContainerText,
  PetImageContainer,
} from './style';

export default function Login() {
  const [value, setValue] = useState({
    email: '',
    password: '',
    folowerCount: 0,
    folowingCount: 0,
    myTextCount: 0,
    commentTextCount: 1,
    expertTextCount: 2,
    likeTextCount: 4,
  });
  return (
    <Container>
      <TitleBar>
        <TitleCancle />
        <TitleText>마이홈</TitleText>
        <TitleSetting />
      </TitleBar>
      <ProfileView>
        <ProfilImg source={require('./profile_cover.png')} />
        <GradeButton>
          <GradeImgContainer>
            <GradeImg source={require('./profile_cover.png')} />
            <GradeButtonText>
              등급명
            </GradeButtonText>
          </GradeImgContainer>
        </GradeButton>
        <ProfileButton name="옐로우오믈렛" />
      </ProfileView>
      <FolowButtonContainer>
        <FolowButton folowState="팔로워" count={value.folowerCount} />
        <FolowButton folowState="팔로잉" count={value.folowingCount} />
      </FolowButtonContainer>
      <PetImageContainerText>나의 반려동물</PetImageContainerText>
      <PetImageContainer>
        <PetImgSet petName="꿀딱이" />
        <PetImgSet petName="누렁이" />
        <PetImgSet petName="설이" />
      </PetImageContainer>
      <TextButton textType="내 게시글" count={value.myTextCount} />
      <TextButton textType="댓글단 글" count={value.commentTextCount} />
      <TextButton textType="전문가 상담 글" count={value.expertTextCount} />
      <TextButton textType="'좋아요'한 글" count={value.likeTextCount} />
    </Container>

  );
}
