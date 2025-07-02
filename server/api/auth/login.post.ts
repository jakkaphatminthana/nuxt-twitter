import bcrypt from 'bcryptjs';
import { createRefreshToken } from '~/server/services/refreshToken.service';
import { getUserByUsername } from '~/server/services/user.service';
import { userTransform } from '~/server/transforms/user.transform';
import { throwBadRequest, throwInternalServerError } from '~/server/utils/error';
import { generateTokens, sendRefreshToken } from '~/server/utils/jwt';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, password } = body;

    if (!username || !password) {
      return throwBadRequest(event, 'Invalid params');
    }

    // Is the user registered
    const user = await getUserByUsername(username);
    if (!user) {
      return throwBadRequest(event, 'Username or password is invalid');
    }

    // Compare passwords
    const doesThePasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesThePasswordMatch) {
      return throwBadRequest(event, 'Username or password is invalid');
    }

    // Generate token
    const { accessToken, refreshToken } = generateTokens(user);

    // Save RefreshToken
    await createRefreshToken({
      token: refreshToken,
      userId: user.id,
    });

    // Add http only cookie
    sendRefreshToken(event, refreshToken);

    return {
      data: {
        access_token: accessToken,
        user: userTransform(user),
      },
    };
  } catch (error) {
    console.error(error);
    return throwInternalServerError(event);
  }
});
