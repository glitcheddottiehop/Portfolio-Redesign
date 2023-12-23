<script setup lang="ts">
import { getAge } from "./about";
import downloadIcon from "@/assets/img/download.svg";
import CV from "@/assets/CV.pdf";
import Card from "@/components/card/Card.vue";
import Button from "@/components/button/Button.vue";
</script>

<template>
  <Card avatar-iframe-url="https://my.spline.design/avatarnew-8a241f9a15e9dfd70220ded61985dfe9/">
    <div class=" card__title">Santa Vitkovska</div>
    <div class="card__subtitle">UX/UI Designer</div>

    <template #backface>
      <div class="card__title">More about me...</div>
      <div class="card__subtitle about-me">
        <div>Hi! My name is Santa. I'm
          <span id="age">{{ getAge() }}</span>
          years old.
          <div>I'm a UI designer who is big friends with <b>Figma</b>. I finished online
            <b>UX/UI</b> course and now I'm actively participating in various start-up projects.
          </div>
          I do have some hobbies too - like drawing and I make digital art post my work on
          <a href="https://www.instagram.com/glitcheddottiehop.art/" target="_blank" data-bs-toggle="tooltip"
            title="glitcheddottiehop.art" class="text-primary instagram-link">Instagram</a>. (Wow! :O)
          <div>
            I finished college as a programming technician and worked in this field for 3 years. You might say I know
            something from <b>HTML</b> and <b>CSS</b> ;)
          </div>
        </div>
      </div>
    </template>
  </Card>

  <a :href=" CV " class="cv spacing__auto--mlr" download="Santa Vitkovska_CV">
    <Button class="cssbuttons-io-button">
      Download CV
      <div class="icon">
        <img :src= downloadIcon  alt="">
      </div>
    </Button>
  </a>
</template>

<style>
@import "about.scss";
</style>
