import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { H3Event, setCookie } from 'h3';

const generateAccessToken = (userId: number) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId }, config.jwtAccessTokenSecret, {
    expiresIn: '10m',
  });
};

const generateRefreshToken = (userId: number) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId }, config.jwtRefreshTokenSecret, {
    expiresIn: '4h',
  });
};

export const generateTokens = (user: User) => {
  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

export const sendRefreshToken = (event: H3Event, token: string) => {
  const config = useRuntimeConfig();

  setCookie(event, 'refresh_token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: config.public.nodeEnv === 'production',
  });
};

export const decodeRefreshToken = (token: string) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtRefreshTokenSecret);
  } catch (error) {
    return null;
  }
};

export const decodeAccessToken = (token: string) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtAccessTokenSecret);
  } catch (error) {
    return null;
  }
};
