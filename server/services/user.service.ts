import { Prisma } from '@prisma/client';
import prisma from '~/lib/prisma';
import bcrypt from 'bcryptjs';

export const createUser = (userData: Prisma.UserCreateInput) => {
  const finalUserData: Prisma.UserCreateInput = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return prisma.user.create({
    data: finalUserData,
  });
};

export const getUserByUsername = (username: string) => {
  return prisma.user.findUnique({
    where: { username },
  });
};

export const getUserById = (userId: number) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
