<script setup>
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
const { t } = useI18n();
</script>

<template>
  <section class="d-flex justify-content-center align-items-center">
    <div>
      <router-link :to="{ name: 'menu' }">
        <button class="py-2 px-3">
          {{ t("perMenu") }}
        </button>
      </router-link>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
section {
  background-color: $second;
  padding: 2.5rem;
  router-link {
    text-decoration: none;
  }
  button {
    border: 1px solid;
    border-color: $prime;
    border-radius: 10px;
    text-align: center;
    background-color: transparent;
    font-size: 1.8rem;
    color: $prime;
    &:hover {
      background-color: $prime;
      color: $second;
      border-color: $second;
    }
  }
}
</style>
