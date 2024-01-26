<script setup lang="ts">
import type { Todo } from '~/types/todo';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const userid = ref();
let newTodo: Todo = {
id: '1',
title: 'new todo',
completed: false,
priority: 1,
createdAt: new Date(),
updatedAt: new Date(),
};

watchEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userid.value = user.uid;
      navigateTo('/')
    } else {
      userid.value = null;
      navigateTo('/login')
    }
  });

})



// const addTodo = async(todo: Todo) => {
//  try {
//   const response = await useAddTodo(todo)
//  } catch (error) {
//    console.log(error)
//  }
// };

const signout = async() => {
  try {
    const response = await useSignOut()
    // if (response) {
    //   navigateTo('/login')
    // }
  } catch (error) {

    console.log(error)
  }
};

</script>

<template>
  <NuxtPage />
</template>
