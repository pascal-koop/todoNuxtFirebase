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
  <div v-if="isUserLoggedIn">
     <button class="logout-btn" @click="signout">Sign out</button>
  </div>
</template>