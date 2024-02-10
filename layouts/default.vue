<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <NuxtLink to="/">Todo App</NuxtLink>
    </div>
    <NavbarLinks/>
  </nav>
  <slot/>
  <footer class="footer">
    <p class="footer-text">Made with ❤️ by Pascal</p>
  </footer>
</template>