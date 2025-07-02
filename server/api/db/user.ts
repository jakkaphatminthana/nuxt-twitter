import { Prisma } from '@prisma/client';
import prisma from '~/lib/prisma';

export const createUser = (userData: Prisma.UserCreateInput) => {
  return prisma.user.create({
    data: userData,
  });
};
