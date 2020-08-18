import React from 'react';
import {
  HomeHospitalContainer,
  HospitalInformationContainer,
  TextWrapForEnroll,
  HospitalInfoView,
  TextWrapForHospitalInfo,
} from './style';

export default function HomeHospital({ data }) {
  return (
    <HomeHospitalContainer>
      <HospitalInformationContainer
        horizontal
      >
        {
          data.map((item) => (
            <HospitalInfoView
              key={item.key}
            >
              <TextWrapForEnroll>
                {' '}
                {item.name}
                {' '}
              </TextWrapForEnroll>
              <TextWrapForHospitalInfo>
                {' '}
                {item.adress}
                {' '}
              </TextWrapForHospitalInfo>
              <TextWrapForHospitalInfo>
                {' '}
                {item.phone}
              </TextWrapForHospitalInfo>
            </HospitalInfoView>
          ))
        }
      </HospitalInformationContainer>
    </HomeHospitalContainer>
  );
}
