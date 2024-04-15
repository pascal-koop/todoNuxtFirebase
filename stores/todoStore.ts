/** 1. funktion todo hinzufuegen
    - sie nimmt das todo als Paramenter
    - ruft die collection auf (pfad, und firestore db)
    ruft die async function addDoc auf, die das todo in die collection einfuegt
    -es braucht die uid vom aktuellen benutzer
    - title, description, isCompleted, createdAt von unserem todo objekt
 */

import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import type { Todo } from '~/types/todo';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    db: useFirestore(),
    auth: getAuth(),
  }),
  actions: {
    async addTodo(todo: Todo) {
      const todoCollection = collection(this.db, 'todos');
      await addDoc(todoCollection, {
        uid: this.auth.currentUser?.uid,
        title: todo.title,
        description: todo.description,
        isCompleted: todo.isCompleted,
        createdAt: new Date().toISOString(),
      });
    },
    async fetchTodos() {
      const uid = this.auth.currentUser?.uid;
      const todoCollection = collection(this.db, 'todos');
      const todoQuery = query(todoCollection, where('uid', '==', uid));
      const querySnapshot = await getDocs(todoQuery);
      const todos = querySnapshot.docs.map((doc) => doc.data());
      return todos;
    },
  },
});
