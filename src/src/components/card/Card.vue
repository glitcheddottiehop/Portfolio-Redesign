<script setup lang="ts">
import { ref, type Ref } from "vue";
import Button from "@/components/button/Button.vue"
import BG from "@/assets/img/profile_background.jpg"

defineProps({
  avatarIframeUrl: String,
  renderFlipButton: {
    type: Boolean,
    default: true
  },
  renderBackface: {
    type: Boolean,
    default: true
  },
});

const userCardFlipped: Ref<boolean> = ref(false);

function flip() {
  userCardFlipped.value = !userCardFlipped.value
}

</script>

<template>
  <div :class=" {
    'user-card-wrapper': true,
    flipped: userCardFlipped
  } ">
    <div class="card spacing__auto--mlr bio bio-front">
      <div class="card__img">
        <img class="profile-bg" :src= BG  alt="">
      </div>
      <div v-if=" avatarIframeUrl " class="card__avatar">
        <!-- //TODO add spline viewer -->
        <!-- <spline-viewer :url="avatarSpline" /> -->
        <!-- //TODO remove watermark? -->
        <iframe :src=" avatarIframeUrl " frameborder='0' width='100%' height='100%'></iframe>
      </div>
      <div class="wrapper">
        <slot></slot>
        <div v-if=" renderFlipButton " class="card__wrapper">
          <Button class="card__btn card__btn-solid" @click="flip()">READ MORE</Button>
        </div>
      </div>
    </div>

    <div v-if=" renderBackface " class="card spacing__auto--mlr bio bio-back spacing__lg--plr">
      <slot name="backface"></slot>
      <div v-if=" renderFlipButton " class="card__wrapper">
        <Button class="card__btn card__btn-solid" @click="flip()">BACK</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./card.scss";
</style>
