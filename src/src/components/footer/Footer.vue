<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer class="footer-wrapper">
        <div class="icons">
            <a class="link" href="https://www.linkedin.com/in/santa-vitkovska-5b10251a7/" target="_blank">
                <img src="../../assets/linkedin.svg" alt="">
                <div class="background background--hover"></div>
            </a>
            <a class="link" href="https://www.instagram.com/glitcheddottiehop.art/" target="_blank">
                <img src="../../assets/instagram.svg" alt="">
                <div class="background background--hover"></div>
            </a>
            <a class="link" href="mailto:vitkovska98@outlook.com">
                <img src="../../assets/email.svg" alt="">
                <div class="background background--hover"></div>
            </a>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@import "./footer.scss";
</style>
