/* eslint-disable global-require */
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import { SearchBoxContainer, SearchBox, SearchImage } from './style';

export default function HomeSearch() {
  const [search, setSearch] = useState('');

  const handlePressButtonAsync = async (
    url = `https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=${search}`,
  ) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <SearchBoxContainer>
      <SearchBox
        placeholder="검색하실 내용을 입력해 주세요!"
        onChangeText={(e) => setSearch(e)}
        testID="test-search-box"
      />
      <TouchableOpacity onPress={() => handlePressButtonAsync()} testID="test-search-button">
        <SearchImage
          source={require('../../assets/Search.png')}
          testID="test-serach-image"
        />
      </TouchableOpacity>
    </SearchBoxContainer>
  );
}
