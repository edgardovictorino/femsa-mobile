import React from 'react';
import renderer from 'react-test-renderer';
import ProfileScreen from '../src/screens/Home/ProfileScreen';
import {expect, it} from '@jest/globals';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
    })),
  };
});

it('ProfileScreen component renders correctly', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
