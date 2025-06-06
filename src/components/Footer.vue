<script setup>
let year;
const now = new Date();
//console.log(now.getFullYear());
year = now.getFullYear();
</script>

<template>
  <footer>
    <h6>
      Coded by
      <a
        href="https://www.linkedin.com/in/agnes-varga-dev/"
        target="_blank"
        rel="noopener noreferrer"
        >Agnes Varga</a
      >
      {{ year }}
    </h6>
  </footer>
</template>
<style scoped lang="scss">
footer {
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b0b0b;
  color: #efefef;
  text-align: center;
  a {
    text-decoration: none;
    color: #8942ac;
  }
}
</style>
