<script setup>
import Hamburger from "./Hamburger.vue";
</script>

<template>
  <nav class="h-100 pe-4">
    <ul class="d-flex flex-column align-items-end gap-3">
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";

nav {
  color: $va-text-light;
  background-color: #baaea3cb;
  ul {
    margin-top: 5rem;
    li {
      font-size: 2rem;
    }
  }

  .no-bg {
    background-color: transparent;
  }
}
</style>
