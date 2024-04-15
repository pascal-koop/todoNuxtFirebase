/** 1. funktion todo hinzufuegen
    - sie nimmt das todo als Paramenter
    - ruft die collection auf (pfad, und firestore db)
    ruft die async function addDoc auf, die das todo in die collection einfuegt
    -es braucht die uid vom aktuellen benutzer
    - title, description, isCompleted, createdAt von unserem todo objekt
 */

import { addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import type { Todo } from '~/types/todo';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    async addTodo(todo: Todo) {
      const db = useFirestore();
      const auth = getAuth();
      const ref = collection(db, 'todos');
      await addDoc(ref, {
        uid: auth.currentUser?.uid,
        title: todo.title,
        description: todo.description,
        isCompleted: todo.isCompleted,
        createdAt: new Date().toISOString(),
      });
    },
  },
});
