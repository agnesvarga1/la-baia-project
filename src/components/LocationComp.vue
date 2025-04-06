<script setup></script>
<template>
  <section id="location">
    <div>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.591584841364!2d10.581302583617417!3d45.46094282937742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478195cbbb88e15d%3A0xa0f967bd33c60589!2sLa%20Baia%20Ristorante!5e0!3m2!1sen!2sit!4v1743866592687!5m2!1sen!2sit"
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
iframe {
  width: 100%;
}
</style>
