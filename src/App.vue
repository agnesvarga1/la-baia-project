<script setup>
import { RouterView } from "vue-router";
import { watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

watch(locale, (newLang) => {
  document.documentElement.lang = newLang;
});

// Optional: set on initial load
document.documentElement.lang = locale.value;
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss">
@use "../src/assets/styles/general.scss" as *;
</style>
