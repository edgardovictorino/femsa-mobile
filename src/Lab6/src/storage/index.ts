import * as Keychain from 'react-native-keychain';

const AUTH_TOKEN_KEY = 'authToken';

export async function saveCredentials(authToken: string): Promise<void> {
  try {
    await Keychain.setGenericPassword(AUTH_TOKEN_KEY, authToken);
    console.log('Credentials successfully saved');
  } catch (error) {
    console.error('Failed to save credentials', error);
  }
}

export async function getCredentials(): Promise<string | null> {
  try {
    const { username: token } = await Keychain.getGenericPassword() as Keychain.UserCredentials;
    if (token) {
      console.log('Credentials successfully retrieved: ' + token);
      return token;
    } else {
      console.log('No credentials stored');
      return null;
    }
  } catch (error) {
    console.error('Failed to access Keychain', error);
    return null;
  }
}

export async function deleteCredentials(): Promise<void> {
  try {
    await Keychain.resetGenericPassword();
    console.log('Credentials successfully deleted');
  } catch (error) {
    console.error('Failed to delete credentials', error);
  }
}
