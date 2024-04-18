<script setup>
  import { useTodoStore } from '../stores/todoStore';
  const newTodo = ref({
    title: '',
    description: '',
    priority: 1,
    isCompleted: false,
  });
  const addTodo = async () => {
    try {
      await useTodoStore().addTodo(newTodo.value);
    } catch (error) {
      console.log(error);
    }
  };
</script>

<style>
</style>

<template>
  <form @submit.prevent="addTodo">
  <label for="title">Title</label>
    <input type="text" id="title" v-model="newTodo.title" />
    <label for="description">Description</label>
    <textarea v-model="newTodo.description" id="description"/>
    <label for="priority">Priority</label>
    <input type="number" min="1" max="3" v-model="newTodo.priority"  id="priority"/>
    <label for="completed">Completed</label>
    <input type="checkbox" v-model="newTodo.isCompleted" />

    <button type="submit">Add Todo</button>

  </form>
</template>