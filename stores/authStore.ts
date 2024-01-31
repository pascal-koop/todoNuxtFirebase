import { defineStore } from 'pinia';
import { signInWithEmailAndPassword, type User } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    async login(email: string, password: string) {
      const { $auth } = useNuxtApp();
      try {
        const userCredential = await signInWithEmailAndPassword($auth, email, password);
        this.user = userCredential.user;
        console.log(this.user);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
