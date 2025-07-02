import { Prisma } from '@prisma/client';
import { createUser, getUserByUsername } from '~/server/services/user.service';
import { userTransform } from '~/server/transforms/user.transform';
import { throwBadRequest, throwInternalServerError } from '~/server/utils/error';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, email, password, repeatPassword, name } = body;

    // Validate required fields
    if (!username || !email || !password || !repeatPassword || !name) {
      return throwBadRequest(event, 'Missing required fields');
    }

    // Validate password match
    if (password !== repeatPassword) {
      return throwBadRequest(event, 'Passwords do not match');
    }

    // Validate has alreay user
    const existsUser = await getUserByUsername(username);
    if (!!existsUser) {
      return throwBadRequest(event, 'User already exists');
    }

    const userData: Prisma.UserCreateInput = {
      username,
      email,
      password,
      name,
    };

    const user = await createUser(userData);

    return {
      data: userTransform(user),
    };
  } catch (error) {
    console.error(error);
    return throwInternalServerError(event);
  }
});
