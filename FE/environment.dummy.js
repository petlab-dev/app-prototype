const environments = {
  staging: {
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_DATABASE_URL: '',
    FIREBASE_PROJECT_ID: '',
    FIREBASE_STORAGE_BUCKET: '',
    FIREBASE_MESSAGING_SENDER_ID: '',
    FIREBASE_APP_ID: '',
    FIRBASE_MESUREMENT_ID: '',
    GOOGLE_CLOUD_VISION_API_KEY: '',
  },
  production: {
    // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
  },
};

function getEnvironment(env) {
  return environments[env];
}
export const Environment = getEnvironment('staging');

export const NAVER_APP_ID = '';
export const NAVER_APP_SECRET = '';
export const NAVER_STATE_STRING = '';

export const GOOGLE_CLIENT_ID = '';
export const GOOGLE_CLIENT_SECRET = '';

export const FACEBOOK_APP_ID = '';
export const FACEBOOK_APP_SECRET = '';

export const KAKAO_REST_ID = '';
export const KAKAO_CLIENT_SECRET = '';
