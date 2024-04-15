import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', {
  // state: () => ({ user: null as User | null }),
  state: () => {
    return {
      user: null as User | null,
      isUserLoggedIn: false,
      userName: '',
    };
    /* !TODO
    - den username noch zum anzeigen implementieren.
    */
  },
  actions: {
    async login(email: string, password: string) {
      const auth = getAuth();
      try {
        if (auth) {
          await signInWithEmailAndPassword(auth, email, password);
          navigateTo('/');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    async createNewUser(name: string, email: string, password: string) {
      const auth = getAuth();
      const db = useFirestore();
      try {
        if (auth) {
          await createUserWithEmailAndPassword(auth, email, password);
          if (auth.currentUser) {
            await setDoc(doc(db, 'users', auth.currentUser.uid), {
              displayName: name,
              email,
              uid: auth.currentUser.uid,
              createdAt: new Date().toISOString(),
            });
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    async signOut() {
      const auth = getAuth();
      try {
        if (auth) {
          navigateTo('/');
          await signOut(auth);
          return false;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    userLoginObserver() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.isUserLoggedIn = true;
          navigateTo('/todos/overview');
        } else {
          this.user = null;
          this.isUserLoggedIn = false;
        }
      });
    },
  },
});
