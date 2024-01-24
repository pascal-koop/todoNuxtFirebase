import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const auth = getAuth();
  const { email, password } = body;
  try {
    if (auth) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});
