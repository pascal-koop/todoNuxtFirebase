<script setup>
  import { useTodoStore } from '../stores/todoStore'
  const store = useTodoStore()
  const todos = ref([])
onMounted(async() => {
  todos.value = await store.fetchTodos()
  console.log(todos.value);
})


</script>

<style>
</style>

<template>
    <h1>Show Todos</h1>
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.uid">
          {{ todo.title }}
        </li>
      </ul>
  </div>
</template>