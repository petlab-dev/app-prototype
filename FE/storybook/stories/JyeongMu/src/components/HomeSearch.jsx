/* eslint-disable global-require */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SearchBoxContainer, SearchBox, SearchImage } from '../styles';

export default function HomeSearch({ onChangeText }) {
  return (
    <SearchBoxContainer>
      <TouchableOpacity>
        <SearchImage
          source={require('../assets/Search.png')}
        />
      </TouchableOpacity>
      <SearchBox
        placeholder="검색하실 내용을 입력해 주세요!"
        onChangeText={onChangeText}
      />
    </SearchBoxContainer>
  );
}
