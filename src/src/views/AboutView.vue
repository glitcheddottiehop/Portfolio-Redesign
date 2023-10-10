<script setup lang="ts">
import { RwcHeroBanner } from "@rehaps/rehaps-web-components-vue/dist/index";
</script>

<template>
  <div class="about">
    <rwc-hero-banner
      :render-gradient="true"
      :horizontal-center="50"
      :vertical-center="50"
      :gradient-direction-breakpoint="0"
      :auto-height="true"
      :custom-structure="false"
    >
      <h2>
        Bacon ipsum dolor amet chicken shankle swine kielbasa turducken beef.
      </h2>
      <h3>
        Corned beef swine alcatra pig rump pork belly tri-tip tongue bacon
        buffalo.
      </h3>
    </rwc-hero-banner>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
