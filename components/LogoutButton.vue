<script setup lang='ts'>
// import { getAuth, onAuthStateChanged, type Auth}  from "firebase/auth";
// const auth: Auth = getAuth();
// const isUserLoggedIn = ref<boolean>(true);

// watchEffect(() => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       navigateTo('/');
//     } else {
//       isUserLoggedIn.value = false;
//       navigateTo('/login');
//     }
//   });
// });

// const signout = async() => {
//   try {
//     const response: boolean | undefined = await useSignOut()
//     if (response) {
//       navigateTo('/')
//     }
//   } catch (error) {
//     console.log(error)
//   }
// };
</script>

<style>
</style>

<template>
  <div>
     <button class="logout-btn">Sign out</button>
  </div>
</template>