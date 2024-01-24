<script setup lang="ts">
import type { Todo } from '~/types/todo';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const user = ref()
watchEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
    } else {
      console.log(('no user'))

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
let email = 'pascale.koop@live.com';
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
    console.log(response)
    user.value = response?.user
  } catch (error) {
    console.log(error)
  }
};

const signout = async() => {
  try {
    const response = await useSignOut()
    console.log('signout', response)
    // if (response) {
    //   navigateTo('/login')
    // }
    user.value = null;
  } catch (error) {

    console.log(error)
  }
};
</script>

<style>
</style>

<template>
  <button @click="createNewUser(email, password)"> send</button>
  <br>
  <button @click="signout"> signout</button>
  <br>
</template>
