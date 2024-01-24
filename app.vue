<script setup lang="ts">

import type { Todo } from '~/types/todo';

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
  } catch (error) {
    console.log(error)
  }
};
</script>

<style>
</style>

<template>
  <div>
  <button @click="createNewUser(email, password)"> send</button>
  </div>
</template>
