import React, { useEffect, useState } from 'react';

import { Platform } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import axios from 'axios';

import {
  getRedirectUrl,
  startAsync,
  makeRedirectUri,
  ResponseType,
  useAuthRequest,
  useAutoDiscovery,
  Prompt,
} from 'expo-auth-session';

import { useDispatch } from 'react-redux';

import { toggleAuth, setName, setPicture } from '../../../slice';

import firebase from '../../../../firebase';

import {
  NAVER_APP_ID,
  NAVER_APP_SECRET,
  NAVER_STATE_STRING,
  GOOGLE_CLIENT_ID,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  KAKAO_REST_ID,
  KAKAO_CLIENT_SECRET,
} from '../../../../environment';

import { IconButtonStyle, IonButtonImage } from './style';

WebBrowser.maybeCompleteAuthSession();

if (!firebase.apps.length) {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    /* Config */
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default function IconButton(props) {
  const { platform, source } = props;
  const dispatch = useDispatch();

  const [token, setToken] = useState();
  const [user, setUser] = useState({});

  const useProxy = Platform.select({ web: false, default: true });

  const discovery = {
    google: useAutoDiscovery('https://accounts.google.com'),
    facebook: {
      authorizationEndpoint: 'https://www.facebook.com/v6.0/dialog/oauth',
      tokenEndpoint: 'https://graph.facebook.com/v6.0/oauth/access_token',
    },
  }[platform];

  const [, response, promptAsync] = useAuthRequest(
    platform === 'google'
      ? {
        clientId: Platform.select({
          web: GOOGLE_CLIENT_ID,
          default: GOOGLE_CLIENT_ID,
        }),
        prompt: Prompt.SelectAccount,
        redirectUri: makeRedirectUri({
          // For usage in bare and standalone
          // native: 'you do not have this yet',
          useProxy,
        }),
        usePKCE: false,
        responseType: ResponseType.Token,
        scopes: ['openid', 'profile'],
      }
      : {
        clientId: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        scopes: ['public_profile, email'],
        redirectUri: makeRedirectUri({
          useProxy,
        }),
        prompt: Prompt.SelectAccount,
        extraParams: {
          display: Platform.select({ web: 'popup' }),
          // eslint-disable-next-line
          auth_type: 'rerequest',
        },
        responseType: ResponseType.Token,
      },
    discovery,
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((getUser) => {
      if (getUser) {
        dispatch(setName({
          name: firebase.auth().currentUser.displayName,
        }));
        dispatch(setPicture({
          picture: firebase.auth().currentUser.photoURL,
        }));
      }
    });
  }, []);

  useEffect(() => {
    if (response && response.type === 'success') {
      // eslint-disable-next-line new-cap
      const credential = new firebase.auth.GoogleAuthProvider.credential(
        null, // Pass the access_token as the second property
        response.params.access_token,
      );

      firebase.auth().signInWithCredential(credential);

      dispatch(toggleAuth());
      console.log('response', response);

      console.log('token: ', token, 'user: ', user);
    }
  }, [response]);

  async function handleGetAccess(code) {
    if (platform === 'naver') {
      const responseFrom = await axios.get(
        `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_APP_ID}&client_secret=${NAVER_APP_SECRET}&code=${code}&state=${NAVER_STATE_STRING}`,
      );

      const config = await {
        headers: { Authorization: `Bearer ${responseFrom.data.access_token}` },
      };

      const { data } = await axios.get(
        'https://openapi.naver.com/v1/nid/me',
        config,
      );

      await dispatch(setName({
        name: data.response.name,
      }));

      await dispatch(setPicture({
        picture: data.response.profile_image,
      }));

      setToken(responseFrom.data.access_token);
      setUser(data);
      dispatch(toggleAuth());
    }

    if (platform === 'kakao') {
      const responseFrom = await axios.get(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_ID}&client_secret=${KAKAO_CLIENT_SECRET}&code=${code}`,
      );

      const config = {
        headers: {
          Authorization: `Bearer {${responseFrom.data.access_token}}`,
        },
      };

      const { data } = await axios.get(
        'https://kapi.kakao.com/v2/user/me',
        config,
      );

      await dispatch(setName({
        name: data.properties.nickname,
      }));

      await dispatch(setPicture({
        picture: data.properties.profile_image,
      }));

      setToken(responseFrom.data.access_token);
      setUser(data);
      dispatch(toggleAuth());
    }
  }

  async function handlePressAsync() {
    if (Platform.OS !== 'web') {
      const redirectUrl = getRedirectUrl();
      if (platform === 'naver') {
        const result = await startAsync({
          authUrl: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_APP_ID}&redirect_uri=${encodeURIComponent(
            redirectUrl,
          )}&state=${NAVER_STATE_STRING}`,
        });

        await handleGetAccess(result.params.code);
      }
      if (platform === 'kakao') {
        const result = await startAsync({
          authUrl: `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_ID}&redirect_uri=${encodeURIComponent(
            redirectUrl,
          )}&response_type=code`,
        });

        await handleGetAccess(result.params.code);
      }
    }
  }

  return (
    <IconButtonStyle
      onPress={
        {
          naver: () => handlePressAsync(),
          kakao: () => handlePressAsync(),
          google: () => promptAsync(),
          facebook: () => promptAsync(),
        }[platform]
      }
      disabled={
        !!(platform !== 'google'
        && platform !== 'facebook'
        && Platform.OS === 'web')
      }
      testID="test-icon-button"
    >
      <IonButtonImage source={source} />
    </IconButtonStyle>
  );
}
