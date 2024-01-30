import { createUserWithEmailAndPassword, getAuth, type User } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    async login(email: string, password: string) {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      this.user = userCredential.user;
    },
  },
});
