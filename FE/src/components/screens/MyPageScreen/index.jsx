/* eslint-disable global-require */
import React, { useContext } from 'react';

import { AuthContext } from '../../../contexts';

import FollowButton from './FollowButton';
import TextButton from './TextButton';
import PetImageSet from './PetImageSet';
import MyPageProfileButton from './MyPageProfileButton';

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
} from './style';

export default function MyPageScreen() {
  const { toggleAuth } = useContext(AuthContext);

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
  return (
    <Container>
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
      <PetImageContainerText>나의 반려동물</PetImageContainerText>
      <PetImageContainer>
        <PetImageSet petName="꿀딱이" />
        <PetImageSet petName="누렁이" />
        <PetImageSet petName="설이" />
      </PetImageContainer>
      <TextButton textType="내 게시글" count={value.myTextCount} />
      <TextButton textType="댓글단 글" count={value.commentTextCount} />
      <TextButton textType="전문가 상담 글" count={value.expertTextCount} />
      <TextButton textType="'좋아요'한 글" count={value.likeTextCount} />
    </Container>

  );
}
