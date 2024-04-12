<script setup>
definePageMeta({
  middleware: 'auth',
})
</script>

<style>
</style>

<template>
  <NuxtLayout>
  <div>
    <h1>Todos</h1>
    <div>
      <!-- <NuxtLink to="/todos/new">Create new todo</NuxtLink> -->
    </div>
  </div>
  </NuxtLayout>
</template>