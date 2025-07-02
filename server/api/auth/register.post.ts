import { Prisma, User } from '@prisma/client';
import { sendError } from 'h3';
import { createUser } from '../db/user';

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

  const userData: Prisma.UserCreateInput = {
    username,
    email,
    password, //TODO : hash the password before saving
    name,
  };

  const user = await createUser(userData);

  return {
    data: user,
  };
});
