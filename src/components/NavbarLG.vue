<script setup>
import { store } from "../store";
</script>
<template>
  <nav class="d-none d-lg-flex alig-items-center justify-content-between pt-2">
    <figure class="">
      <img class="logo rounded" src="/imgs/logo.jpg" alt="logo" />
    </figure>
    <ul class="d-flex justify-content-end align-items-center gap-5 mb-0">
      <li v-for="link in store.navLinkList" key="">
        <a href="">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
nav {
  gap: 8rem;
  .logo {
    width: 150px;
  }
  ul {
    li {
      color: $va-text-light;

      a {
        color: $va-text-light;
        font-size: 1.5rem;
      }
      &:hover {
        border-bottom: 1px solid $va-text-light;
      }
    }
  }
}
</style>
