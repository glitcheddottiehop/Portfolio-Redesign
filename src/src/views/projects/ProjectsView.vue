<script setup lang="ts">
/**@ts-ignore */
import { onMounted, ref, type Ref } from "vue";
import { SlideShow } from '@/libraries/Sliders/SlideShow';
import Productivity from '@/assets/img/productivity.png';
import Workwize from '@/assets/img/workwize.png';
import Wwyltd from '@/assets/img/wwyltd.png';

interface ProjectImages {
  productivity: string,
  workwize: string,
  wwyltd: string
}

const rootElement: Ref<HTMLElement | null> = ref(null);
const sliderElement: Ref<HTMLElement | null> = ref(null);
const sliderFirstElement: Ref<HTMLElement | null> = ref(null);
const sliderSecondElement: Ref<HTMLElement | null> = ref(null);

const slideShow: Ref<SlideShow | null> = ref(null);

onMounted(() => {
  if (rootElement.value && sliderElement.value && sliderFirstElement.value && sliderSecondElement.value) {
    slideShow.value = new SlideShow({
      root: rootElement.value,
      slider: sliderElement.value,
      sliderFirst: sliderFirstElement.value,
      sliderSecond: sliderSecondElement.value
    });
  } else {
    console.error("Could not find all slider elements!");
  }
});


const images: ProjectImages = {
  productivity: Productivity,
  workwize: Workwize,
  wwyltd: Wwyltd
}

</script>

<template>
  <section class="wrapper" ref="rootElement">
    <div class="slider" id="slider" ref="sliderElement">
      <div class="first-slider" ref="sliderFirstElement">
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" :src="images.productivity" alt="" />
            <h2 class="slider-title">Productivity</h2>
          </div>
        </div>
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" :src="images.wwyltd" alt="" />
            <h2 class="slider-title">What would you like to do?</h2>
          </div>
        </div>
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" :src="images.workwize" alt="" />
            <h2 class="slider-title">WorkWize</h2>
          </div>
        </div>
      </div>
      <div class="second-slider" ref="sliderSecondElement">
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" :src="images.productivity"  alt="" />
            <h2 class="slider-title">Productivity</h2>
          </div>
        </div>
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" :src="images.wwyltd"  alt="" />
            <h2 class="slider-title">What would you like to do?</h2>
          </div>
        </div>
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" :src="images.workwize"  alt="" />
            <h2 class="slider-title">WorkWize</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
@import "projects.scss";
</style>
