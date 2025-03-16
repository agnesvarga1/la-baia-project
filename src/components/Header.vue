<script setup>
import Hamburger from "./Hamburger.vue";
import WhatsappBtn from "./WhatsappBtn.vue";
</script>

<template>
  <header class="bg-head-container">
    <div class="container d-flex h-100">
      <div class="p-3 w-50">
        <figure>
          <img class="logo rounded" src="/imgs/logo.jpg" alt="logo" />
        </figure>
      </div>
      <div
        class="d-flex flex-column p-3 w-50 justify-content-between align-items-end"
      >
        <Hamburger></Hamburger>
        <WhatsappBtn></WhatsappBtn>
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
.bg-head-container {
  height: 85vh;
  background: url("/imgs/bg-img-1.jpg") no-repeat center;
  background-size: cover;
  .logo {
    width: 6rem;
  }

  .whapp {
    background-color: #00000053;
    width: 5rem;
    height: 5rem;

    #whatsapp-icon {
      fill: $va-text-light;
      width: 100%;
    }
    .fth {
      width: 2.5rem;
      //   top: 23%;
      //   right: 50%;
      //   transform: translate(50%);
    }
    .svg-txt {
      margin-top: 0.8rem;
    }
  }

  @media (min-width: 992px) {
    .logo {
      width: 200px;
    }
  }
}
</style>
