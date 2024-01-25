<script setup lang="ts">
import type { Todo } from '~/types/todo';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const userid = ref();
const user = ref();
watchEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userid.value = user.uid;
      navigateTo('/')
    } else {
      userid.value = null;
    }
  });
})

let newTodo: Todo = {
id: '1',
title: 'new todo',
completed: false,
priority: 1,
createdAt: new Date(),
updatedAt: new Date(),
};
let password = 'password';
let email = 'pascale@live.com';
const addTodo = async(todo: Todo) => {
 try {
  const response = await useAddTodo(todo)
 } catch (error) {
   console.log(error)
 }
};



const createNewUser = async(email: string, password: string) => {
  try {
    const response = await useCreateNewUser(email, password)
  } catch (error) {
    console.log(error)
  }
};

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
  <button @click="signout">signout</button>
</template>
