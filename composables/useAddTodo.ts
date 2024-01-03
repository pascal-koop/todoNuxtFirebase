import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import type { Todo } from '~/types/todo';
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
