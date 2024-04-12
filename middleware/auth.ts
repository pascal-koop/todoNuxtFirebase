import { useAuthStore } from '~/stores/authStore';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtRouteMiddleware((to, from) => {
  const { isUserLoggedIn } = useAuthStore();
  if (!isUserLoggedIn) {
    return navigateTo('/login');
  }
});
