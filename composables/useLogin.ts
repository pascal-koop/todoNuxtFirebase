import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    if (auth) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
