// stores/auth.ts
import { defineStore } from 'pinia';
import type { LoginReqest, User, UserPreview } from '~/types/auth.types';

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

    async login({ username, password }: LoginReqest) {
      try {
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: { username, password },
        });

        console.log('response = ', response.data);

        this.setToken(response.data.access_token);
        this.setUser(response.data.user as UserPreview);

        console.log('token = ', this.token);
        console.log('user = ', this.user);

        return true;
      } catch (error) {
        throw error;
      }
    },
  },
});
