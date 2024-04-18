import { addDoc, collection } from 'firebase/firestore';
import type { Todo } from '~/types/todo';
// import { v4 as uuid } from 'uuid';
// const id = uuid();
export const useAddTodo = async (todo: Todo) => {
  const db = useFirestore();
  try {
    const ref = collection(db, 'todos');
    await addDoc(ref, {
      ...todo,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  // eslint-disable-next-line no-console
  console.log('useAddTodo');
};
