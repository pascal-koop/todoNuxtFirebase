import { signOut, getAuth } from 'firebase/auth';

export const useSignOut = async () => {
  const auth = getAuth();
  try {
    if (auth) {
      await signOut(auth);
      return true;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return false;
  }
};
