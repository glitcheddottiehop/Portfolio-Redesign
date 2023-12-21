<script setup lang="ts">
/**@ts-ignore */
import { onMounted, ref, type Ref } from "vue";
import { SlideShow } from '@/libraries/Sliders/SlideShow';

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

</script>

<template>
  <section class="wrapper" ref="rootElement">
    <div class="slider" id="slider" ref="sliderElement">
      <div class="first-slider" ref="sliderFirstElement">
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" src="https://source.unsplash.com/1600x900/?nature,water" alt="" />
            <h2 class="slider-title">Title 1</h2>
          </div>
        </div>
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" src="https://source.unsplash.com/1600x900/?nature,water" alt="" />
            <h2 class="slider-title">Title 2</h2>
          </div>
        </div>
      </div>
      <div class="second-slider" ref="sliderSecondElement">
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" src="https://source.unsplash.com/1600x900/?nature,water" alt="" />
            <h2 class="slider-title">Title 1</h2>
          </div>
        </div>
        <div class="slider-section">
          <div class="slider-image-wrapper">
            <img class="slider-image" src="https://source.unsplash.com/1600x900/?nature,water" alt="" />
            <h2 class="slider-title">Title 2</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
@import "projects.scss";
</style>
