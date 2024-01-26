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
    <form @submit.prevent="login(email, password)" class="inner-form">
      <label class="form-label" for="email">Email</label>
      <input v-model="email" class="form-input" id="email" type="email" autocomplete="autocomplete" />
      <label class="form-label" for="password" type="password">Password</label>
      <input v-model="password"  class="form-label" type="text" id="password" autocomplete="autocomplete" />
      <button class="submit-btn" type="submit">Login</button>
    </form>
  </div>
  <div>
    <NuxtLink class="form-link" to="/register">Don't have an account?</NuxtLink>
  </div>
</template>