<script setup></script>
<template>
  <section id="location">
    <div class="d-lg-flex">
      <a
        class="w-50"
        href="https://www.google.com/maps/place/La+Baia+Ristorante/@45.4605093,10.5809366,797m/data=!3m2!1e3!4b1!4m6!3m5!1s0x478195cbbb88e15d:0xa0f967bd33c60589!8m2!3d45.4605093!4d10.5809366!16s%2Fg%2F11vtbpylpb?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56059.49846487573!2d10.576222047544437!3d45.50252321730941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478195cbbb88e15d%3A0xa0f967bd33c60589!2sLa%20Baia%20Ristorante!5e1!3m2!1sen!2sit!4v1743966828074!5m2!1sen!2sit"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="map-container w-md-50 p-0"
        ></iframe>
      </a>
      <figure class="w-md-50">
        <img src="/imgs/lake_setup.jpg" alt="dinnig room" />
      </figure>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
iframe {
  height: 450px;
  width: 100%;
}
figure {
  width: 50%;
  height: 450px;
  overflow: hidden; /* Optional: crop overflow */
  margin: 0;
}

figure img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Options: cover | contain | fill | none | scale-down */
}
@media (max-width: 576px) {
  iframe {
    width: 100%;
  }
  figure {
    width: 100%;
  }
}
</style>
