import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',

  initialState: {
    auth: false,
    location: {
      x: 127.1054221,
      y: 37.3591614,
    },
    profile: {
      name: 'Test',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqj_WvMmoHaetb38rMQlE2wgH5Kj5ATh8XaA&usqp=CAU',
    },
    followerCount: 0,
    followingCount: 0,
    inputText: '',
    checkState: {
      nextButton: true,
      toggleButton: true,
      defaultMessage: 'None',
    },
    graphSize: 0,
  },

  reducers: {
    setAuth(state, { payload: { auth } }) {
      return {
        ...state,
        auth,
      };
    },
    setLatitude(state, { payload: { x } }) {
      return {
        ...state,
        location: { ...state.location, x },
      };
    },
    setLongtitude(state, { payload: { y } }) {
      return {
        ...state,
        location: { ...state.location, y },
      };
    },
    setName(state, { payload: { name } }) {
      return {
        ...state,
        profile: { ...state.profile, name },
      };
    },
    setPicture(state, { payload: { picture } }) {
      return {
        ...state,
        profile: { ...state.profile, picture },
      };
    },
    setFollowerCount(state, { payload: { followerCount } }) {
      return {
        ...state,
        followerCount,
      };
    },
    setFollowingCount(state, { payload: { followingCount } }) {
      return {
        ...state,
        followingCount,
      };
    },
    //
    setInputText(state, { payload: { inputText } }) {
      return {
        ...state,
        inputText,
      };
    },
    setNextButton(state, { payload: { nextButton } }) {
      return {
        ...state,
        checkState: { ...state.profile, nextButton },
      };
    },
    setToggleButton(state, { payload: { toggleButton } }) {
      return {
        ...state,
        checkState: { ...state.profile, toggleButton },
      };
    },
    setDefaultMessage(state, { payload: { defaultMessage } }) {
      return {
        ...state,
        checkState: { ...state.profile, defaultMessage },
      };
    },
    //
    setGraphSize(state, { payload: { graphSize } }) {
      return {
        ...state,
        graphSize,
      };
    },
  },
});

export const {
  setAuth,
  setLatitude,
  setLongtitude,
  setName,
  setPicture,
  setFollowerCount,
  setFollowingCount,
  setInputText,
  setNextButton,
  setToggleButton,
  setDefaultMessage,
  setGraphSize,
} = actions;

export const toggleAuth = () => (dispatch, getState) => {
  const { auth } = getState();

  dispatch(setAuth({ auth: !auth }));
};

export const isDisabled = (event) => (dispatch) => {
  dispatch(setInputText({ inputText: event }));

  if (event === undefined) {
    return dispatch(setNextButton({ nextButton: true }));
  }
  return dispatch(setNextButton({ nextButton: false }));
};

export const handleChangeToPhoneButton = () => (dispatch, getState) => {
  const { toggleButton } = getState();
  dispatch(setToggleButton({ toggleButton: !toggleButton }));
  dispatch(setDefaultMessage({ defaultMessage: 'Phone Number' }));
};

export const handleChangeToEmailButton = () => (dispatch, getState) => {
  const { toggleButton } = getState();
  dispatch(setToggleButton({ toggleButton: !toggleButton }));
  dispatch(setDefaultMessage({ defaultMessage: 'Email Adrress' }));
};

export default reducer;
