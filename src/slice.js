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
} = actions;

export const toggleAuth = () => (dispatch, getState) => {
  const { auth } = getState();

  dispatch(setAuth({ auth: !auth }));
};

export default reducer;
