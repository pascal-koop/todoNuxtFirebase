<script setup lang="ts">
import { useAuthStore } from '../stores/authStore';

watchEffect( () => {
useAuthStore().userLoginObserver();
});

let email = ref<string>('');
let password = ref<string>('');

const authErrorMessage = ref<string>('');
const isAuthError = ref<boolean>(false);

const login = async (email: string, password: string) => {
  const result = await useAuthStore().login(email, password);
  if (result === 'auth/invalid-credential') {
    isAuthError.value = true;
    authErrorMessage.value = ' Email or password is incorrect';
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
      <div v-if="isAuthError">
        <span>{{ authErrorMessage }}</span>
      </div>
      <button class="submit-btn" type="submit">Login</button>
    </form>
  </div>
  <div>
    <NuxtLink class="form-link" to="/register">Don't have an account?</NuxtLink>
  </div>
</template>