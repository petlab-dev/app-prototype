import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { SearchBoxContainer, SearchBox } from '../styles';

export default function HomeSearch({ onChangeText }) {
  return (
    <SearchBoxContainer>
      <SearchBox
        placeholder="검색하실 내용을 입력해 주세요!"
        onChangeText={onChangeText}
      />
      <TouchableOpacity>
        <Icon
          name="reply"
        />
      </TouchableOpacity>
    </SearchBoxContainer>
  );
}
