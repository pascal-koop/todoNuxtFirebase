<script setup lang="ts">

let email = ref<string>('');
let password = ref<string>('');

const login = async (email: string, password: string) => {
  try {
    const response = await useLogin(email, password)
    console.log('login function',response)
  } catch (error) {
    console.log(error)
  }
};
</script>

<style>
</style>

<template>
  <div class="outer-form">
    <h1 class="form-title">Welcome back</h1>
    <p class="form-subtitle">Sign in to continue</p>
    <form class="inner-form" @submit.prevent="login(email, password)">
      <label class="form-label" for="email">Email</label>
      <input class="form-input" id="email" type="email" v-model="email" />
      <label class="form-label" for="password" type="password">Password</label>
      <input class="form-label" type="text" v-model="password" />
      <button class="submit-btn" type="submit">Login</button>
    </form>
  </div>
</template>