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



// const addTodo = async(todo: Todo) => {
//  try {
//   const response = await useAddTodo(todo)
//  } catch (error) {
//    console.log(error)
//  }
// };
</script>

<template>
  <NuxtPage />
</template>
