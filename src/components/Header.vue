<script setup>
import SearchField from './SearchField.vue'
</script>
<template>
  <!-- <div class=""> -->
    <header class="w-screen fixed top-0 z-10 backdrop-blur-sm bg-white/30">
      <div class="flex justify-between max-w-5xl mx-auto p-4 desktop:px-0">
        <div>
          <span class="font-bold text-2xl leading-9">
             Flicker
          </span>
        </div>
        <div class="flex gap-4">
          <div class="hidden tablet:block">
            <SearchField />
          </div>
          <div class="flex items-center relative">
            <a href="" class="leading-9">
              <svg width="24" height="24">
                <use href="#icon-shopping-bag"></use>
              </svg>
              <span class="badge">12</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  <!-- </div> -->
</template>