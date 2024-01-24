import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire';

export const useCreateNewUser = async (email: string, password: string) => {
  const auth = useFirebaseAuth();
  try {
    if (auth) {
      await createUserWithEmailAndPassword(auth, email, password);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
