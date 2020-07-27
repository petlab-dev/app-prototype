import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import style from './style';

import SubButton from './subButton';
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
        <TextInput style={style.inputBox} placeholder="E-mail" onChangeText={(email) => setValue({ ...value, email })} />
        <Text style={style.topInput}>Password</Text>
        <TextInput style={style.inputBox} placeholder="Password" onChangeText={(password) => setValue({ ...value, password })} />
      </View>
      <View style={style.loginButtonView}>
        <TouchableOpacity style={style.loginButton} onPress={() => alert(value.email + "\n" +  value.password)}>
          <Text style={style.loginButtonText}>로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={style.view}>
        <TouchableOpacity style={style.subButton} SubButton onPress={() => alert('아이디/비밀번호찾기')}>
          <Text style={style.subButtonText}>
            {' 아이디/비밀번호 찾기 '}
          </Text>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity style={style.subButton} SubButton onPress={() => alert('이메일로 회원가입')}>
          <Text style={style.subButtonText}>
            {' 이메일로 회원가입 '}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.view}>
        <SubButton plattform="카카오" />
        <SubButton plattform="페이스북" />
        <SubButton plattform="네이버" />
        <SubButton plattform="구글" />
      </View>
    </View>
  );
}
