import { parseCookies } from 'h3';
import { getRefreshTokenByToken } from '~/server/services/refreshToken.service';
import { getUserById } from '~/server/services/user.service';
import { decodeRefreshToken } from '~/server/utils/jwt';
import { throwUnauthorized, throwInternalServerError } from '~/server/utils/error';
import { User } from '@prisma/client';

export default defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event);

    // Validate cookie
    const refreshToken = cookies.refresh_token;
    if (!refreshToken) {
      throwUnauthorized(event, 'Refresh token is invalid');
    }

    // Validate refresh token
    const rToken = await getRefreshTokenByToken(refreshToken);
    if (!rToken) {
      throwUnauthorized(event, 'Refresh token is invalid');
    }

    // Decode refresh token
    const token = decodeRefreshToken(refreshToken);

    // Get new AccessToken
    if (token && typeof token !== 'string') {
      const user = (await getUserById(token.userId)) as User;
      const { accessToken } = generateTokens(user);
      return { access_token: accessToken };
    } else {
      return throwInternalServerError(event);
    }
  } catch (error) {
    console.error(error);
    return throwInternalServerError(event);
  }
});
