import { onAuthStateChanged } from 'firebase/auth';

export const useOnAuthStateChanged = (auth: any) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigateTo('/');
    } else {
      navigateTo('/login');
    }
  });
};
