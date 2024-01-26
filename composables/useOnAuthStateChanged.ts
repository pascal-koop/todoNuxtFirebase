import { onAuthStateChanged, type Auth } from 'firebase/auth';

export const useOnAuthStateChanged = (auth: Auth) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigateTo('/');
      return auth;
    } else {
      navigateTo('/login');
    }
  });
};
