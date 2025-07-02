import bcrypt from 'bcryptjs';
import { getUserByUsername } from '~/server/services/user.service';
import { throwBadRequest } from '~/server/utils/error';
import { generateTokens } from '~/server/utils/jwt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  if (!username || !password) {
    return throwBadRequest(event, 'Invaild params');
  }

  // Is the user registered
  const user = await getUserByUsername(username);
  if (!user) {
    return throwBadRequest(event, 'Username or password is invaild');
  }

  // Compare passwords
  const doesThePasswordMatch = await bcrypt.compare(password, user.password);
  if (!doesThePasswordMatch) {
    return throwBadRequest(event, 'Username or password is invaild');
  }

  // Generate token
  const { accessToken, refreshToken } = generateTokens(user);

  return {
    data: {
      accessToken,
      refreshToken,
    },
  };
});
