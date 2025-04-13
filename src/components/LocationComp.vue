<script setup></script>
<template>
  <section id="location">
    <div>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56059.49846487573!2d10.576222047544437!3d45.50252321730941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478195cbbb88e15d%3A0xa0f967bd33c60589!2sLa%20Baia%20Ristorante!5e1!3m2!1sen!2sit!4v1743966828074!5m2!1sen!2sit"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
@media (max-width: 576px) {
  iframe {
    width: 100%;
  }
}
</style>
