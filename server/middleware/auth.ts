import { getUserById } from '../services/user.service';
import { decodeAccessToken } from '../utils/jwt';

export default defineEventHandler(async (event) => {
  const endpoints = ['/api/auth/user'];

  const url = getRequestURL(event).pathname;
  const isHandledByThisMiddleware = endpoints.some((endpoint) => url.startsWith(endpoint));

  if (!isHandledByThisMiddleware) return;

  // split token bearer
  const authHeader = getHeader(event, 'authorization');
  const token = authHeader?.split(' ')[1];
  if (!token) {
    return throwUnauthorized(event);
  }

  // decode token
  const decoded = decodeAccessToken(token);
  if (!decoded || typeof decoded === 'string' || !('userId' in decoded)) {
    return throwUnauthorized(event);
  }

  // get user for check accessToken
  try {
    const user = await getUserById(decoded.userId);
    if (!user) {
      return throwUnauthorized(event);
    }

    event.context.auth = { user };
  } catch (error) {
    console.error('Auth middleware error:', error);
    return throwUnauthorized(event);
  }
});
