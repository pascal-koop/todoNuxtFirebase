<script setup lang="ts">
import { getAuth, type Auth, type UserCredential } from "firebase/auth";

const auth: Auth = getAuth();

watchEffect(() => {
  useOnAuthStateChanged(auth);
})

let email = ref<string>('');
let password = ref<string>('');

const login = async (email: string, password: string) => {
  try {
    const response: UserCredential | undefined = await useLogin(email, password)
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
      <label class="form-label" for="password">Password</label>
      <input v-model="password"  class="form-label" id="password" type="password" autocomplete="autocomplete" />
      <button class="submit-btn" type="submit">Login</button>
    </form>
  </div>
  <div>
    <NuxtLink class="form-link" to="/register">Don't have an account?</NuxtLink>
  </div>
</template>