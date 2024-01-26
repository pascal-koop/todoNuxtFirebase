<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <NuxtLink to="/">Todo App</NuxtLink>
    </div>
    <div class="navbar__links">
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
    </div>
  </nav>
  <slot/>
  <footer class="footer">
    <p class="footer__text">Made with ❤️ by Pascal</p>
  </footer>
</template>