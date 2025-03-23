<script setup>
const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <div class="hamburger-menu" @click="emit('toggle')">
    <div class="hamburger hamburger3 me-5" :class="{ open: isOpen }">
      <span class="bar bar1"></span>
      <span class="bar bar2"></span>
      <span class="bar bar3"></span>
      <span class="bar bar4"></span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";

.hamburger-menu {
  width: 3rem;
  height: 3rem;

  .hamburger {
    margin: 0 auto;

    width: 30px;
    height: 30px;
    position: relative;

    .bar {
      padding: 0;
      width: 30px;
      height: 4px;
      background-color: $va-text-light;
      display: block;
      border-radius: 4px;
      transition: all 0.4s ease-in-out;
      position: absolute;
    }

    .bar1 {
      top: 0;
      transform-origin: 5%;
    }

    .bar2,
    .bar3 {
      top: 13.5px;
    }

    .bar3 {
      right: 0;
    }

    .bar4 {
      bottom: 0;
      transform-origin: 5%;
    }
  }

  .hamburger.open {
    .bar1 {
      transform: rotate(45deg);
      height: 3px;
      width: 42px;
    }

    .bar2 {
      transform: rotate(-45deg);
      height: 3px;
      background-color: transparent;
    }

    .bar3 {
      transform: rotate(45deg);
      height: 3px;
      background-color: transparent;
    }

    .bar4 {
      transform: rotate(-45deg);
      height: 3px;
      width: 42px;
    }
  }
}
</style>
