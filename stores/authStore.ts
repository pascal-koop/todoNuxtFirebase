import { getAuth, signInWithEmailAndPassword, type User } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  // state: () => ({ user: null as User | null }),
  state: () => {
    return {
      user: null as User | null,
    };
  },
  actions: {
    async login(email: string, password: string) {
      const auth = getAuth();
      try {
        if (auth) {
          const response = await signInWithEmailAndPassword(auth, email, password);
          this.user = response.user;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  },
});
