<script setup lang="ts">
import { getAuth, type Auth } from "firebase/auth";
import { useAuthStore } from '../stores/authStore';
const email = ref<string>('');
const password = ref<string>('');

watchEffect( () => {
useAuthStore().userLoginObserver();
})

const createNewUser = (email: string, password: string) => {
  try {
     useCreateNewUser(email, password)
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
    <form @submit.prevent="createNewUser(email, password)" class="inner-form">
      <label class="form-label" for="email">Email</label>
      <input v-model="email" class="form-input" type="text" id="email" autocomplete="autocomplete" />
      <label class="form-label" for="password">Password</label>
      <input v-model="password" class="form-input" type="text" id="password" autocomplete="autocomplete" />
      <button class="submit-btn" type="submit">Sign up</button>
    </form>
  </div>
  <div>
    <NuxtLink class="form-link" to="/login">Already have an account?</NuxtLink>
  </div>
</template>