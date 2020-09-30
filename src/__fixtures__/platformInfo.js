/* eslint-disable global-require */
const platformInfo = [
  {
    platform: 'naver',
    link: '네이버연동',
    key: 1,
    source: require('../components/assets/LoginIcons/naver.png'),
  },
  {
    platform: 'kakao',
    link: '카카오톡연동',
    key: 2,
    source: require('../components/assets/LoginIcons/kakao.png'),
  },
  {
    platform: 'facebook',
    link: '페북연동',
    key: 3,
    source: require('../components/assets/LoginIcons/facebook.png'),
  },
  {
    platform: 'google',
    link: '구글연동',
    key: 4,
    source: require('../components/assets/LoginIcons/google.png'),
  },
];

export default platformInfo;
