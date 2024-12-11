import { decode, sign } from 'react-native-pure-jwt';

const SECRET = 'xF9pJv2LmNkQyRo7WZT83gCd6aYHPB14';

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
  }
};

export const decodeToken = async (token: string) => {
  try {
    const tokenDecoded = await decode(
      token,
      SECRET,
      {
        skipValidation: true,
      }
    );
    return tokenDecoded;
  } catch (err) {
    console.error(err);
  }
};
