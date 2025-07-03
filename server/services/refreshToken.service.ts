import prisma from '~/lib/prisma';

interface RefreshTokenReq {
  token: string;
  userId: number;
}

export const createRefreshToken = ({ token, userId }: RefreshTokenReq) => {
  return prisma.refreshToken.create({
    data: {
      token,
      userId,
    },
  });
};

export const getRefreshTokenByToken = (token: string) => {
  return prisma.refreshToken.findUnique({
    where: { token: token },
  });
};
