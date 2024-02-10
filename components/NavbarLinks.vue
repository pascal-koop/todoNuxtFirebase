<script setup lang='ts'>
import { useAuthStore } from '../stores/authStore';

const isUserLoggedIn = ref<boolean | undefined>(useAuthStore().isUserLoggedIn);

const signout = async() => {
  try {
    await useAuthStore().signOut();
  } catch (error) {
    console.error(error);
  }
};
</script>

<style>
</style>

<template>
  <div class="navbar-links">
    <div v-if="isUserLoggedIn">
      <button class="logout-btn" @click="signout">Sign out</button>
    </div>
    <div v-else>
      <NuxtLink to="/login" class="navbar-link-item">Login</NuxtLink>
      <NuxtLink to="/register" class="navbar-link-item">Register</NuxtLink>
    </div>
  </div>
</template>