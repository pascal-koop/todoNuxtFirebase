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

const addTodo = async(todo: Todo) => {
 try {
  const re = await useAddTodo(todo)
 } catch (error) {
   console.log(error)
 }

};

addTodo(newTodo);
</script>

<style>
</style>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
