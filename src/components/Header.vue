<script setup>
import SearchField from './SearchField.vue'
</script>
<template>
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
          <a role="button" class="leading-9" @click="openCart()">
            <svg width="24" height="24">
              <use href="#icon-shopping-bag"></use>
            </svg>
            <span class="badge">{{ cartLength }}</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useNotificationStore } from "../stores/notification";
import { useProductStore } from "../stores/products";

export default {
  methods: {
    ...mapActions(useNotificationStore, ['parseNotification']),
    ...mapActions(useProductStore, ['openCart']),
  },
  computed: {
    ...mapState(useProductStore, ['carts']),
    cartLength() {
      return this.carts && this.carts.length
    }
  }
}
</script>