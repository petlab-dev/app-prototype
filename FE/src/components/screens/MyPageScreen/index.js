/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import FollowButton from './FollowButton';
// import TextButton from './TextButton';
import PetImageSet from './PetImageSet';
import MyPageProfileButton from './MyPageProfileButton';

import {
  UpperContainer,
  ProfilImg,
  GradeButton,
  GradeButtonText,
  GradeImgContainer,
  Container,
  ProfileView,
  FolowButtonContainer,
  PetImageContainerText,
  PetImageContainer,
  BottomContainer,
} from './style';

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

// const textButtonContent = [
//   {
//     textType: '내 게시글',
//     count: value.myTextCount,
//     key: 1,
//   },
//   {
//     textType: '댓글단 글',
//     count: value.commentTextCount,
//     key: 2,
//   },
//   {
//     textType: '전문가 상담 글',
//     count: value.expertTextCount,
//     key: 3,
//   },
//   {
//     textType: "'좋아요'한 글",
//     count: value.likeTextCount,
//     key: 4,
//   },
// ];

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
  return (
    <UpperContainer>
      <Container>
        <ProfileView>
          <ProfilImg source={require('../../assets/ProfileCover.png')} />
          <GradeButton>
            <GradeImgContainer>
              <Icon
                style={{ marginTop: 2.5, marginLeft: 4 }}
                name="info-circle"
                size={20}
                color="white"
              />
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <GradeButtonText>일반회원</GradeButtonText>
              </View>
            </GradeImgContainer>
          </GradeButton>
          <MyPageProfileButton name="옐로우오믈렛" navigation={navigation} />
          <FolowButtonContainer>
            <FollowButton folowState="팔로워" count={value.folowerCount} />
            <FollowButton folowState="팔로잉" count={value.folowingCount} />
          </FolowButtonContainer>
        </ProfileView>
        <BottomContainer>
          <PetImageContainerText>나의 아이들 🐈</PetImageContainerText>
          <PetImageContainer horizontal showsHorizontalScrollIndicator={false}>
            <PetImageSet data={petStatus} />
          </PetImageContainer>
          {/* <TextButton data={textButtonContent} /> */}
        </BottomContainer>
      </Container>
    </UpperContainer>
  );
}
