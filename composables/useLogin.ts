export const useLogin = async (email: string, password: string) => {
  try {
    const { status, pending, data } = useFetch('api/login', {
      method: 'POST',
      body: {
        email,
        password,
      },
    });
    return { status, pending, data };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
