<script setup lang="ts">
import { ref, type Ref, } from "vue";
import { getAge } from "./about";

const userCardFlipped: Ref<boolean> = ref(false);

</script>
<template>
  <div :class=" {
    'user-card-wrapper': true,
    flipped: userCardFlipped
  } ">
    <div class="card spacing__auto--mlr bio bio-front">
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
          <button class="card__btn card__btn-solid" @click="userCardFlipped = !userCardFlipped">Read more</button>
        </div>
      </div>
    </div>

    <div class="card spacing__auto--mlr bio bio-back spacing__lg--plr">
      <div class="card__title">More about me...</div>
      <div class="card__subtitle about-me">
        <div>Hi! My name is Santa. I'm
          <span id="age">{{ getAge() }}</span>
          years old.
          <div>I'm a UI designer who is big friends with <b>Figma</b>. I finished online
            <b>UX/UI</b> course and now I'm actively participating in various start-up projects.</div>
          I do have some hobbies too - like drawing and I make digital art post my work on
          <span class="special-link">
            <a href="https://www.instagram.com/glitcheddottiehop.art/" target="_blank" data-bs-toggle="tooltip"
            title="glitcheddottiehop.art" class="text-primary instagram-link">Instagram</a>
          </span>. (Wow! :O)
          <div>
            I finished college as a programming technician and worked in this field for 3 years. You might say I know something from <b>HTML</b> and <b>CSS</b> ;)
          </div>
        </div>
      </div>
      <div class="card__wrapper">
        <button class="card__btn card__btn-solid" @click="userCardFlipped = !userCardFlipped">Back</button>
      </div>
    </div>
  </div>
</template>

<style>
@import "about.scss";
</style>
