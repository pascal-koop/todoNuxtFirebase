import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, type User } from 'firebase/auth';

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
          console.log('User:', this.user);
          return response;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    userLoginObserver() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.user = null;
          navigateTo('/login');
        }
        this.user = user;
        navigateTo('/');
      });
    },
  },
});
