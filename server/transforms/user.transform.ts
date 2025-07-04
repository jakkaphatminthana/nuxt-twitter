import { User } from '@prisma/client';

export const userTransform = (user: User) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    profileImage: user.profileImage,
  };
};
