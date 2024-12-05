import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import {expect, it} from '@jest/globals';

jest.mock('@react-navigation/native', () => {
  return {
    // @ts-ignore
    NavigationContainer: ({ children }) => children,
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
    })),
  };
});

jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: jest.fn(() => ({
      Screen: jest.fn(({ component: Component, ...props }) => (
        <Component {...props} />
      )),
      Navigator: jest.fn(({ children }) => <>{children}</>),
    })),
  };
});

it('App component renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
