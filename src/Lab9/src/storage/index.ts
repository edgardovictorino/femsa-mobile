import * as Keychain from 'react-native-keychain';

const AUTH_TOKEN_KEY = 'authToken';

export const saveCredentials = async (authToken: string) => {
  try {
    await Keychain.setGenericPassword(AUTH_TOKEN_KEY, authToken);
    console.log('Credentials successfully saved');
  } catch (error) {
    console.error('Failed to save credentials', error);
  }
};

export const getCredentials = async () => {
  try {
    const { username: token } = await Keychain.getGenericPassword() as Keychain.UserCredentials;
    if (token) {
      console.log('Credentials successfully loaded: ' + token);
      return token;
    } else {
      console.log('No credentials stored');
    }
  } catch (error) {
    console.error('Failed to retrieve credentials', error);
  }
};

export const deleteCredentials = async () => {
  try {
    await Keychain.resetGenericPassword();
    console.log('Credentials successfully deleted');
  } catch (error) {
    console.error('Failed to delete credentials', error);
  }
};
