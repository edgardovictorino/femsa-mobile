import { decode, sign } from 'react-native-pure-jwt';

const SECRET = 'a-secret-with-at-least-32-characters'; // should be stored in a secure place

export const generateToken = async (username: string, password: string) => {
  try {
    const token = await sign(
      {
        iss: 'example.com',
        exp: new Date().getTime() + 3600 * 1000,
        additional: {
          username,
          password,
        },
      },
      SECRET,
      {
        alg: 'HS256',
      }
    );
    return token;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const decodeToken = async (token: string) => {
  try {
    const tokenDecoded = await decode(token, SECRET, {
      skipValidation: true,
    });
    return tokenDecoded;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
