import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

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
