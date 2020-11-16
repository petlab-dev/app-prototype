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
  setInputText,
  setNextButton,
  setToggleButton,
  setDefaultMessage,
  setGraphSize,
  isDisabled,
  handleChangeToPhoneButton,
  handleChangeToEmailButton,
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
      inputText: '',
      checkState: {
        nextButton: true,
        toggleButton: true,
        defaultMessage: 'None',
      },
      graphSize: 0,
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

  describe('setInputText', () => {
    const inputText = 'abc';

    const state = reducer(undefined, setInputText({ inputText }));

    expect(state.inputText).toEqual(inputText);
  });

  describe('setNextButton', () => {
    const nextButton = 'abc';

    const state = reducer(undefined, setNextButton({ nextButton }));

    expect(state.checkState.nextButton).toEqual(nextButton);
  });

  describe('setToggleButton', () => {
    const toggleButton = false;

    const state = reducer(undefined, setToggleButton({ toggleButton }));

    expect(state.checkState.toggleButton).toEqual(toggleButton);
  });

  describe('setDefaultMessage', () => {
    const defaultMessage = false;

    const state = reducer(undefined, setDefaultMessage({ defaultMessage }));

    expect(state.checkState.defaultMessage).toEqual(defaultMessage);
  });

  describe('setGraphSize', () => {
    const graphSize = 3;

    const state = reducer(undefined, setGraphSize({ graphSize }));

    expect(state.graphSize).toEqual(graphSize);
  });

  describe('toggleAuth', () => {
    const store = mockStore({});

    store.dispatch(toggleAuth());

    const actions = store.getActions('');

    const { auth } = actions[0].payload;

    expect(actions[0].payload.auth).toEqual(auth);
  });

  describe('isDisabled', () => {
    const store = mockStore({});
    const event = 'test';

    store.dispatch(isDisabled(event));

    const actions = store.getActions('');

    expect(actions[0].payload.inputText).toEqual('test');
    expect(actions[1].payload.nextButton).toEqual(false);

    store.dispatch(isDisabled());

    expect(actions[2].payload.inputText).toEqual(undefined);
    expect(actions[3].payload.nextButton).toEqual(true);
  });

  describe('handleChangeToPhoneButton', () => {
    const store = mockStore({});

    store.dispatch(handleChangeToPhoneButton());

    const actionsAfter = store.getActions('');

    expect(actionsAfter[0].payload.toggleButton).toEqual(true);
    expect(actionsAfter[1].payload.defaultMessage).toEqual('Phone Number');
  });
  describe('handleChangeToEmailButton', () => {
    const store = mockStore({});

    store.dispatch(handleChangeToEmailButton());

    const actionsBefore = store.getActions('');

    expect(actionsBefore[0].payload.toggleButton).toEqual(true);
    expect(actionsBefore[1].payload.defaultMessage).toEqual('Email Adrress');
  });
});
