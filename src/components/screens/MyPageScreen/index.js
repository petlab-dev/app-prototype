/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable global-require */
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useSelector } from 'react-redux';

import { get } from '../../../utils';

import FollowButtonWrapper from './FollowButtonWrapper';
import PetImageSet from './PetImageSet';
import MyPageProfileButton from './MyPageProfileButton';

import {
  UpperContainer,
  Container,
  ProfileView,
  ProfileImage,
  GradeButton,
  GradeImageContainer,
  GradeButtonTextWrapper,
  GradeButtonText,
  FollowButtonContainer,
  PetImageContainerText,
  PetImageContainer,
  BottomContainer,
} from './style';

const petStatus = [
  {
    petName: '냥이',
    years: '2',
    key: 1,
    source: require('../../assets/Meow/meow-1.jpeg'),
  },
  {
    petName: '냥냥이',
    years: '5',
    key: 2,
    source: require('../../assets/Meow/meow-2.jpeg'),
  },
];

export default function MyPageScreen({ navigation }) {
  const profile = useSelector(get('profile'));
  const followerCount = useSelector(get('followerCount'));
  const followingCount = useSelector(get('followingCount'));

  return (
    <UpperContainer>
      <Container>
        <ProfileView>
          <ProfileImage source={{ uri: profile.picture }} />
          <GradeButton>
            <GradeImageContainer>
              <Icon
                style={{ marginTop: 2.5, marginLeft: 4 }}
                name="info-circle"
                size={20}
                color="white"
              />
              <GradeButtonTextWrapper>
                <GradeButtonText>일반회원</GradeButtonText>
              </GradeButtonTextWrapper>
            </GradeImageContainer>
          </GradeButton>
          <MyPageProfileButton name={profile.name} navigation={navigation} />
          <FollowButtonContainer>
            <FollowButtonWrapper text="팔로워" count={followerCount} />
            <FollowButtonWrapper text="팔로잉" count={followingCount} />
          </FollowButtonContainer>
        </ProfileView>
        <BottomContainer>
          <PetImageContainerText>나의 아이들 🐈</PetImageContainerText>
          <PetImageContainer horizontal showsHorizontalScrollIndicator={false}>
            <PetImageSet data={petStatus} />
          </PetImageContainer>
        </BottomContainer>
      </Container>
    </UpperContainer>
  );
}
