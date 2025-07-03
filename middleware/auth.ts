import { useAuthStore } from '~/stores/useAuthStore';

export default defineNuxtRouteMiddleware(() => {
  const { token } = useAuthStore();

  if (!token) {
    return navigateTo('/auth/login');
  }
});
