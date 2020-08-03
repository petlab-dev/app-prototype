import React from 'react';
import {
  HomeHospitalContainer,
  HospitalInformationContainer,
  TextWrapForEnroll,
  HospitalInfoView,
} from '../styles';

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
              <TextWrapForEnroll>
                {' '}
                {item.adress}
                {' '}
              </TextWrapForEnroll>
              <TextWrapForEnroll>
                {' '}
                {item.phone}
              </TextWrapForEnroll>
            </HospitalInfoView>
          ))
        }
      </HospitalInformationContainer>
    </HomeHospitalContainer>
  );
}
