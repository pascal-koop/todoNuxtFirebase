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
      <AddTodoForm />
    </div>
  </div>
  </NuxtLayout>
</template>