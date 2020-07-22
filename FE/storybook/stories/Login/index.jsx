/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import style from './style';

import TopText from './topText';

export default function Login() {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  return (
    <View style={style.loginView}>
      <View style={style.closeButton}>
        <TouchableOpacity style={style.iconButton}>
          <Text>닫기</Text>
        </TouchableOpacity>
      </View>
      <View style={style.header}>
        <TopText />
      </View>
      <View style={style.InputData}>
        <Text style={style.topInput}>E-mail</Text>
        <TextInput style={style.inputBox} placeholder="E-mail" onChangeText={(email) => setValue({ ...value, email })} pattern="^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$" />
        <Text style={style.topInput}>Password</Text>
        <TextInput style={style.inputBox} placeholder="Password" onChangeText={(password) => setValue({ ...value, password })} />
      </View>
      <View style={style.loginButtonView}>
        <TouchableOpacity style={style.loginButton} onPress={() => alert(value.email + "\n" +  value.password)}>
          <Text style={{ fontSize: 12, color: '#FFFFFF', fontWeight: 'bold' }}>로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={style.view}>
      <TouchableOpacity style={style.subButton} SubButton onPress={() => alert('아이디/비밀번호찾기')}>
        <Text style={{ height: 50, width: 150, textAlign: 'left' }}>
          {' 아이디/비밀번호 찾기 '}
        </Text>
      </TouchableOpacity>
      <Text>|</Text>
      <TouchableOpacity style={style.subButton} SubButton onPress={() => alert('이메일로 회원가입')}>
        <Text style={{ height: 50, width: 150, textAlign: 'left' }}>
          {' 이메일로 회원가입 '}
        </Text>
      </TouchableOpacity>
      </View>
      <View style={style.view}>
        <TouchableOpacity style={style.iconButton}>
          <Text>카카오</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconButton}>
          <Text>페이스북</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconButton}>
          <Text>네이버</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconButton}>
          <Text>구글</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
