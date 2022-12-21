<template>
  <div class="card pb-4 relative hover:shadow-2xl hover:cursor-pointer" @click="openProduct(item)">
    <p class="absolute top-0 left-0 text-xs text-white px-2 py-1 bg-purple-400">{{ item.category }}</p>
    <div class="feed-logo h-36 mb-2 flex items-center justify-center">
      <img :src="item.image" alt="" class="max-h-full">
    </div>
    <div class="h-20">
      <p class="text-sm font-medium truncate-line-clamp">
        {{ item.title }}
      </p>
    </div>
    <p class="flex text-left w-full text-sm">
      <span>{{ item.rating.rate }}&nbsp;</span>
      <span>
        <svg height="18" width="18" class="stroke-yellow-500">
          <use xlink:href="#icon-star-outline"></use>
        </svg>
      </span>
      <span>
        &nbsp;-&nbsp;{{ item.rating.count }}&nbsp;Ratings
      </span>
    </p>
    <div class="border-t border-purple-200 w-full my-2"></div>
    <div class="flex justify-between w-full">
      <div class="">
        <span class="text-sm">$</span>
        <span class="font-semibold text-lg">{{ item.price }}</span>
      </div>
      <button class="leading-9 border border-purple-300 text-purple-400 hover:bg-purple-300 hover:text-white rounded-full p-[0.4em]" @click.stop="addItemToCart()">
        <svg width="14" height="14" fill="currentColor">
          <use href="#icon-shopping_basket"></use>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'pinia'
import { useProductStore } from "../stores/products";
import { useNotificationStore } from "../stores/notification";
import { PRODUCT_EXISTS, PRODUCT_NOT_EXISTS } from '../constants' 

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(useProductStore, ['openProduct', 'addToCart']),
    ...mapActions(useNotificationStore, ['parseNotification']),
    addItemToCart() {
      const exists = this.addToCart(this.item, 1)
      switch (exists) {
        case PRODUCT_EXISTS:
          this.parseNotification('Product already exists inside the cart.')
          break;
        case PRODUCT_NOT_EXISTS:
          this.parseNotification('Product added to cart.')
          break;
        default:
          this.parseNotification('Sorry, an error occurs from our side while adding your product to the cart, we are currently working on it, Kindly try again.')
          break;
      }
    }
  }
}
</script>