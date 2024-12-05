import { deleteCredentials, saveCredentials } from '../storage';
import { generateToken } from '../utils/jwt';

export const loginUser = async (username: string, password: string) => {
  if (username === 'user' && password === 'password') {
    const token = await generateToken(username, password);
    await saveCredentials(token as string);
  } else {
    throw new Error('Invalid credentials');
  }
};

export const logoutUser = async () => {
  // Function for clearing secure storage (to be implemented by students)
  await deleteCredentials();
};
