import type { LoginReqest, User, UserPreview } from '~/types/auth.types';

export async function authLogin({ username, password }: LoginReqest): Promise<User> {
  const response = await $fetch('/api/auth/login', {
    method: 'POST',
    body: { username, password },
  });

  return response.data as User;
}

export async function authRefreshToken(): Promise<string> {
  const response = await $fetch('/api/auth/refresh');
  return response.access_token;
}

export async function authGetUser(): Promise<UserPreview> {
  const response = await useFetchApi('/api/auth/user');
  return response.data;
}
