<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FlickerGraphics from './components/FlickerIcons.vue'
import Header from './components/Header.vue'
import Notification from './components/Notification.vue'
</script>

<template>
  <flicker-graphics />
  <Header />
  <Notification />
  <div class="pt-12 mb-5">
    <RouterView />
  </div>
</template>
