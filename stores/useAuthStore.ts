// stores/auth.ts
import { defineStore } from 'pinia';
import { authLogin } from '~/services/auth';
import type { LoginReqest, UserPreview } from '~/types/auth.types';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as UserPreview | null,
  }),

  actions: {
    setToken(newToken: string) {
      this.token = newToken;
    },

    setUser(newUser: UserPreview) {
      this.user = newUser;
    },

    async login({ username, password }: LoginReqest): Promise<boolean> {
      try {
        const response = await authLogin({ username, password });
        this.setToken(response.access_token);
        this.setUser(response.user as UserPreview);
        return true;
      } catch (error) {
        throw error;
      }
    },
  },
});
