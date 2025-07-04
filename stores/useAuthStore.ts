// stores/auth.ts
import { defineStore } from 'pinia';
import { authGetUser, authLogin, authRefreshToken } from '~/services/auth';
import type { LoginReqest, UserPreview } from '~/types/auth.types';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as UserPreview | null,
    isLoading: false as Boolean,
  }),

  actions: {
    setToken(newToken: string) {
      this.token = newToken;
    },

    setUser(newUser: UserPreview) {
      this.user = newUser;
    },
    setIsLoading(newValue: boolean) {
      this.isLoading = newValue;
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

    async getUser() {
      try {
        const response = await authGetUser();
        this.setUser(response);
        return true;
      } catch (error) {
        throw error;
      }
    },

    async initAuth() {
      try {
        this.setIsLoading(true);
        await authRefreshToken();
        await this.getUser();
      } catch (error) {
        throw error;
      } finally {
        this.setIsLoading(false);
      }
    },
  },
});
