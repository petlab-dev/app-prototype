import configureStore from 'redux-mock-store';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer, {
  setAuth,
  setLatitude,
  setLongtitude,
  setName,
  setPicture,
  setFollowerCount,
  setFollowingCount,
  toggleAuth,
} from './slice';

const mockStore = configureStore([...getDefaultMiddleware()]);

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
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
    };

    it('returns initialSatate', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setAuth', () => {
    const auth = true;

    const state = reducer(undefined, setAuth({ auth }));

    expect(state.auth).toEqual(auth);
  });

  describe('setLatitude', () => {
    const x = 2;

    const state = reducer(undefined, setLatitude({ x }));

    expect(state.location.x).toEqual(x);
  });

  describe('setLongtitude', () => {
    const y = 2;

    const state = reducer(undefined, setLongtitude({ y }));

    expect(state.location.y).toEqual(y);
  });

  describe('setName', () => {
    const name = 'test';

    const state = reducer(undefined, setName({ name }));

    expect(state.profile.name).toEqual(name);
  });

  describe('setPicture', () => {
    const picture = 'https://test.com/picture.png';

    const state = reducer(undefined, setPicture({ picture }));

    expect(state.profile.picture).toEqual(picture);
  });

  describe('setFollowerCount', () => {
    const followerCount = 0;

    const state = reducer(undefined, setFollowerCount({ followerCount }));

    expect(state.followerCount).toEqual(followerCount);
  });

  describe('setFollowingCount', () => {
    const followingCount = 0;

    const state = reducer(undefined, setFollowingCount({ followingCount }));

    expect(state.followingCount).toEqual(followingCount);
  });

  describe('toggleAuth', () => {
    const store = mockStore({});

    store.dispatch(toggleAuth());

    const actions = store.getActions('');

    const { auth } = actions[0].payload;

    expect(actions[0].payload.auth).toEqual(auth);
  });
});
