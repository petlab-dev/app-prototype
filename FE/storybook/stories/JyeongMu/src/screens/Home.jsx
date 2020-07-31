import React, { useState } from 'react';

import HomeAnimalEnrollment from '../components/HomeAnimalEnrollment';
import HomeHeader from '../components/HomeHeader';
import HomeHospital from '../components/HomeHospital';
import HomeSearch from '../components/HomeSearch';

import {
  Container,
} from '../styles';

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('');

  const DataOfNearbyHospital = [
    {
      name: '성심 동물 메디컬 센터',
      adress: '봉명동 548-11',
      phone: '042-719-7566',
      key: '1',
    },
    {
      name: '로얄 동물 펫병원',
      adress: '봉명동 669',
      phone: '042-823-7583',
      key: '2',
    },
    {
      name: '대전동물메디컬센터 숲',
      adress: '봉명동 664-3단지',
      phone: '042-826-7584',
      key: '3',
    },
    {
      name: '도안 ECO종합 동물 병원',
      adress: '11-13, 봉명서로',
      phone: '042-485-7582',
      key: '4',
    },
    {
      name: '피니펫 동물병원',
      adress: '어은동 105-7',
      phone: '042-862-7588',
      key: '5',
    },
  ];

  function handleOnChangeText(event) {
    setValue({ event });
  }

  return (
    <Container>
      <HomeHeader
        text="Pet Mate"
      />
      <HomeSearch
        onChangeText={handleOnChangeText}
      />
      <HomeAnimalEnrollment />
      <HomeHospital
        data={DataOfNearbyHospital}
      />
    </Container>
  );
}
