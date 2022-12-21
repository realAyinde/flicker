<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FlickerGraphics from './components/FlickerIcons.vue'
import Header from './components/Header.vue'
import NotificationsController from './components/NotificationsController.vue'
</script>

<template>
  <flicker-graphics />
  <Header />
  <div class="m-0 p-0 pt-12 mb-5">
    <RouterView />
  </div>
  <NotificationsController />
</template>
