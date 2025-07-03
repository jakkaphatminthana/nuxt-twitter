import type { LoginReqest, User } from '~/types/auth.types';

export async function authLogin({ username, password }: LoginReqest): Promise<User> {
  const response = await $fetch('/api/auth/login', {
    method: 'POST',
    body: { username, password },
  });

  return response.data as User;
}
