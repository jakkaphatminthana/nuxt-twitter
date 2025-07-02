import { Prisma } from '@prisma/client';
import { sendError } from 'h3';
import { createUser, getUserByUsername } from '~/server/services/user.service';
import { userTransform } from '~/server/transforms/user.transform';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, email, password, repeatPassword, name } = body;

  // Validate required fields
  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Missing required fields',
      }),
    );
  }

  // Validate password match
  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Passwords do not match',
      }),
    );
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
});
