import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const useCreateNewUser = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    if (auth) {
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      return credentials;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
