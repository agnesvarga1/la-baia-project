<script setup>
import { useI18n } from "vue-i18n";
import { store } from "../store";
const { t } = useI18n();
</script>

<template>
  <section id="contactus" class="container p-0">
    <div class="row flex-column flex-md-row justify-content-start p-0 m-0">
      <div class="col-12 col-md-6 p-0">
        <figure class="m-0">
          <img src="/imgs/context.jpg" alt="logo text" class="img-fluid" />
        </figure>
      </div>
      <div
        class="col-12 col-md-6 p-0 pt-2 contact-details d-flex flex-column align-items-center"
      >
        <div class="d-flex p-2 gap-3 mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            />
          </svg>
          <h5>+39 379 209 7955</h5>
        </div>
        <div class="d-flex p-2 gap-3 mt-3 justify-content-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            />
          </svg>
          <h5>
            <a
              href="https://www.google.com/maps/place/La+Baia+Ristorante/@45.4605093,10.5809366,536m/data=!3m2!1e3!4b1!4m6!3m5!1s0x478195cbbb88e15d:0xa0f967bd33c60589!8m2!3d45.4605093!4d10.5809366!16s%2Fg%2F11vtbpylpb?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              >Viale F. Agello, 41, 25015 Desenzano del Garda BS</a
            >
          </h5>
        </div>
        <div class="d-flex p-2 gap-3 mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            />
          </svg>
          <h5>labaia.desenzano@gmail.com</h5>
          <h5>
            <a :href="store.whatsappUrl" target="blank">{{ t("book") }}</a>
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
.contact-details {
  background-color: $second;
  color: $prime;
}
svg {
  width: 2rem;
  fill: $prime;
}
a {
  text-decoration: none;
  color: $prime;
}

h5 {
  font-size: 1.5rem;
}
</style>
