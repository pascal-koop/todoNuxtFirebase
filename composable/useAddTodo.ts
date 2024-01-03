import { collection } from 'firebase/firestore';
import { addDoc, serverTimestamp } from 'firebase/firestore';
export const useAddTodo = async (todo: Todo) => {
  const db = useFirestore();
  try {
    const ref = collection(db, 'todos');
    await addDoc(ref, {
      title: 'New Todo',
      completed: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      priority: 0,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
