import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.public.apiKey,
    authDomain: config.public.authDomain,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    messagingSenderId: config.public.appId,
    appId: config.public.appId,
    measurementId: config.public.measurementId,
  };
  // eslint-disable-next-line no-console
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const firestore = getFirestore(app);
  return {
    provide: {
      auth,
      firestore,
    },
  };
  // nuxtApp.vueApp.provide('auth', auth);
  // nuxtApp.provide('auth', auth);

  // nuxtApp.vueApp.provide('firestore', firestore);
  // nuxtApp.provide('firestore', firestore);
});
