import React from 'react';
import { render } from '@testing-library/react-native';

import { useSelector } from 'react-redux';
import MyPageScreen from './MyPageScreen/index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('MyPageScreen', () => {
  it('renders without exploding', () => {
    useSelector.mockImplementation(() => ('profile'));
    useSelector.mockImplementation(() => ('followerCount'));
    useSelector.mockImplementation(() => ('followingCount'));

    const navigation = { navigate: jest.fn() };

    const { container } = render(<MyPageScreen navigation={navigation} />);

    expect(container).toBeTruthy();
  });
});
