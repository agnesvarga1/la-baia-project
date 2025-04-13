<script setup>
import { useNavbarStore } from "../stores/useNavbarStore";

const navbarStore = useNavbarStore();
const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <div
    class="hamburger-menu"
    @click="emit('toggle')"
    :class="{ 'scrolled-navbar': !navbarStore.isScrolled }"
  >
    <div class="hamburger hamburger3" :class="{ open: isOpen }">
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
  width: 60px;
  height: 60px;
  border-radius: 5px;
  position: relative;

  &.scrolled-navbar {
    // Dark transparent background when scrolled
    background-color: $prime-transparent; // Slightly darker when scrolled
  }
  .hamburger {
    margin: 0 auto;
    //margin-top: 20px;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .bar {
      padding: 0;
      width: 30px;
      height: 4px;
      background-color: $second;
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
