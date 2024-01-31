<script setup lang="ts">
// import { getAuth, type Auth, type UserCredential } from "firebase/auth";

// const auth: Auth = getAuth();

// watchEffect(() => {
//   useOnAuthStateChanged(auth);
// })
import { useAuthStore } from '../stores/authStore'
const authStore = useAuthStore();
let email = ref<string>('');
let password = ref<string>('');

</script>

<style>
</style>

<template>
  <div class="outer-form">
    <h1 class="form-title">Welcome back</h1>
    <p class="form-subtitle">Sign in to continue</p>
    <form @submit.prevent="authStore.login(email, password)" class="inner-form">
      <label class="form-label" for="email">Email</label>
      <input v-model="email" class="form-input" id="email" type="email" autocomplete="autocomplete" />
      <label class="form-label" for="password">Password</label>
      <input v-model="password"  class="form-label" id="password" type="password" autocomplete="autocomplete" />
      <button class="submit-btn" type="submit">Login</button>
    </form>
  </div>
  <div>
    <NuxtLink class="form-link" to="/register">Don't have an account?</NuxtLink>
  </div>
</template>