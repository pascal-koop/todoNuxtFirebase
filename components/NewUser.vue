<script setup lang="ts">

const email = ref<string>('');
const password = ref<string>('');

const createNewUser = async(email: string, password: string) => {
  try {
    await useCreateNewUser(email, password)
  } catch (error) {
    console.log(error)
  }
};
</script>

<style>
</style>

<template>
  <div class="outer-form">
    <h1 class="form-title">Welcome!</h1>
    <p class="form-subtitle">Create a new account</p>
    <form class="inner-form" @submit.prevent="createNewUser(email, password)">
      <label class="form-label" for="email">Email</label>
      <input class="form-input" type="text" id="email" v-model="email" />
      <label class="form-label" for="password">Password</label>
      <input class="form-input" type="text" v-model="password" />
      <button class="submit-btn" type="submit">Sign up</button>
    </form>
  </div>
</template>