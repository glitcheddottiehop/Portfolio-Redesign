<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from '@/components/navigation/Navigation.vue';
import Footer from '@/components/footer/Footer.vue';
</script>

<template>
  <Navigation />
  <RouterView />
  <Footer/>
</template>

