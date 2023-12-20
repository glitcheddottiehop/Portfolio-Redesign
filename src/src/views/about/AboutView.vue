<script setup lang="ts">
import { ref, type Ref, } from "vue";

const userCardFlipped: Ref<boolean> = ref(false);

</script>
<template>
  <div :class=" {
    'user-card-wrapper': true,
    flipped: userCardFlipped
  } ">
    <div class="card spacing__auto--mlr bio bio-front" @click="userCardFlipped = !userCardFlipped">
      <div class="card__img">
        <img class="profile-bg" src="../../assets/img/profile_background.jpg" alt="">
      </div>

      <div class="card__avatar">
        <!-- //TODO add spline viewer -->
        <!-- //TODO remove watermark -->
        <iframe src='https://my.spline.design/avatarnew-8a241f9a15e9dfd70220ded61985dfe9/' frameborder='0' width='100%'
          height='100%'></iframe>
        <!-- <spline-viewer :url="avatarSpline" /> -->
      </div>
      <div class="wrapper">
        <div class=" card__title">Santa Vitkovska</div>
        <div class="card__subtitle">UX/UI Designer</div>
        <div class="card__wrapper">
          <!-- //TODO add flip on button only -->
          <button class="card__btn card__btn-solid">Read more</button>
        </div>
      </div>
    </div>

    <div class="card spacing__auto--mlr bio bio-back spacing__lg--plr" @click="userCardFlipped = !userCardFlipped">
      <div class="card__title">More about me...</div>
      <div class="card__subtitle about-me">
        Hi! My name is Santa. I'm 25 years old. I'm a UI designer who is big friends with Figma. I finished online
        UI course on 8th of December 2022.
        Besides that I do have some hobbies too - like drawing, playing harmonica and make something from clay. I
        make digital art using Adobe Photoshop and post my work on
        <a href="https://www.instagram.com/glitcheddottiehop.art/" target="_blank" data-bs-toggle="tooltip"
          title="glitcheddottiehop.art" class="text-primary instagram-link">Instagram</a>.
        I have also tried Adobe Illustrator and Corel Draw.
        I finished college as a programming technician and worked in this field for 3 years.
        Later I realised that I want to work in field closer to my hobby which is art. That's how I decided to
        start learning about UI design.
      </div>
      <div class="card__wrapper">
        <button class="card__btn card__btn-solid">Back</button>
      </div>
    </div>
  </div>
</template>

<style>
@import "about.scss";
</style>
