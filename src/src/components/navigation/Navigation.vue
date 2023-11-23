<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="navbar-wrapper">
        <div class="logo">
            <div class="avatar">
                <img src="../../assets/logo.png" alt="">
                <div class="circle"></div>
            </div>
            Santa Vitkovska
        </div>
        <nav class="navbar">
            <RouterLink class="navbar-item" to="/">Home</RouterLink>
            <RouterLink class="navbar-item" to="/about">About</RouterLink>
            <RouterLink class="navbar-item" to="/projects">Projects</RouterLink>
            <RouterLink class="navbar-item" to="/contact">Contact me</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
@import "./navigation.css";
</style>
