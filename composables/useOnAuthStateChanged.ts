import { onAuthStateChanged, type Auth } from 'firebase/auth';

export const useOnAuthStateChanged = (auth: Auth) => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigateTo('/login');
      return auth;
    }
    navigateTo('/');
    return auth;
  });
};
