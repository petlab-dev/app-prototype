/* eslint-disable global-require */
import React from 'react';

// import { AuthContext } from '../../../contexts';

import FollowButton from './FollowButton';
import TextButton from './TextButton';
import PetImageSet from './PetImageSet';
import MyPageProfileButton from './MyPageProfileButton';
import HomeHeader from '../HomeScreen/HomeHeader';

import {
  ProfilImg,
  GradeButton,
  GradeImg,
  GradeButtonText,
  GradeImgContainer,
  Container,
  ProfileView,
  FolowButtonContainer,
  PetImageContainerText,
  PetImageContainer,
  BottomContainer,
} from './style';

export default function MyPageScreen() {
  // const { toggleAuth } = useContext(AuthContext);

  const value = {
    email: '',
    password: '',
    folowerCount: 0,
    folowingCount: 0,
    myTextCount: 0,
    commentTextCount: 1,
    expertTextCount: 2,
    likeTextCount: 4,
  };
  const textButtonContent = [
    {
      textType: '내 게시글',
      count: value.myTextCount,
      key: 1,
    },
    {
      textType: '댓글단 글',
      count: value.commentTextCount,
      key: 2,
    },
    {
      textType: '전문가 상담 글',
      count: value.expertTextCount,
      key: 3,
    },
    {
      textType: "'좋아요'한 글",
      count: value.likeTextCount,
      key: 4,
    },
  ];
  const petStatus = [
    {
      petName: '꿀딱이',
      years: '2',
      key: 1,
    },
    {
      petName: '누렁이',
      years: '5',
      key: 2,
    },
    {
      petName: '설이',
      years: '1',
      key: 3,
    },
  ];
  return (
    <Container>
      <HomeHeader
        text="Pet Mate"
      />
      <ProfileView>
        <ProfilImg source={require('../../assets/ProfileCover.png')} />
        <GradeButton>
          <GradeImgContainer>
            <GradeImg source={require('../../assets/ProfileCover.png')} />
            <GradeButtonText>
              등급명
            </GradeButtonText>
          </GradeImgContainer>
        </GradeButton>
        <MyPageProfileButton name="옐로우오믈렛" />
      </ProfileView>
      <FolowButtonContainer>
        <FollowButton folowState="팔로워" count={value.folowerCount} />
        <FollowButton folowState="팔로잉" count={value.folowingCount} />
      </FolowButtonContainer>
      <BottomContainer>
        <PetImageContainerText>나의 반려동물</PetImageContainerText>
        <PetImageContainer>
          <PetImageSet data={petStatus} />
        </PetImageContainer>
        <TextButton data={textButtonContent} />
      </BottomContainer>
    </Container>
  );
}
