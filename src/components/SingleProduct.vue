<template>
  <transition name="modal">
    <div v-if="state" class="modal z-30">
      <div class="modal-content max-h-[80vh] overflow-y-auto">
        <div class="absolute right-7 top-7 tablet:right-4 tablet:top-4 hover:cursor-pointer z-40" @click="close()">
          <svg width="24" height="24">
            <use href="#icon-close"></use>
          </svg>
        </div>
        <div class="relative flex flex-col tablet:flex-row">
          <div class="h-full w-full tablet:w-5/12">
            <div class="w-full pr-4 flex items-center justify-center place-content-center">
              <img :src="product.image" alt="" class="object-contain h-52 w-96">
            </div>
          </div>
          <div class="flex-auto w-full tablet:w-7/12">
            <p class="uppercase text-purple-400 text-sm font-medium tracking-widest">{{product.category}}</p>
            <h3 class="uppercase font-medium text-lg mt-2">{{product.title}}</h3>
            <p class="text-2xl font-bold mt-2">${{product.price}}</p>
            <p class="flex text-left w-full text-sm mt-2">
              <span>{{ product.rating.rate }}&nbsp;</span>
              <span>
                <svg height="18" width="18" class="stroke-yellow-500">
                  <use xlink:href="#icon-star-outline"></use>
                </svg>
              </span>
              <span>
                &nbsp;-&nbsp;{{ product.rating.count }}&nbsp;Ratings
              </span>
            </p>
            <p class="mt-3 text-sm">{{product.description}}</p>
            <div class="buttons mt-3 flex justify-between">
              <div class="flex">
                <button class="bg-purple-400 text-white text-center rounded-md shadow-md p-2" @click="decreaseQty()">
                  <svg width="18" height="18" fill="currentColor">
                    <use href="#icon-minus"></use>
                  </svg>
                </button>
                <span class="inline-block w-10 leading-8 text-center">
                  {{ quantity }}
                </span>
                <button class="bg-purple-400 text-white text-center rounded-md shadow-md p-2" @click="increaseQty()">
                  <svg width="18" height="18" fill="currentColor">
                    <use href="#icon-plus"></use>
                  </svg>
                </button>
              </div>
              <div>
                <button class="bg-purple-400 text-white text-center text-sm rounded-md shadow-md py-2 px-4" @click="addItemToCart()">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useProductStore } from "../stores/products"
import { useNotificationStore } from "../stores/notification"
import { PRODUCT_EXISTS, PRODUCT_NOT_EXISTS, DEFAULT_QUANTITY_VALUE } from '../constants' 

export default {
  data () {
    return {
      quantity: DEFAULT_QUANTITY_VALUE
    }
  },
  computed: {
    ...mapState(useProductStore, {
      product: 'currentProduct', singleProductState: 'singleProductState'}),
    state() {
      return this.singleProductState && this.product
    }
  },
  methods: {
    ...mapActions(useProductStore, ['closeProduct', 'addToCart']),
    ...mapActions(useNotificationStore, ['parseNotification']),
    close() {
      this.quantity = DEFAULT_QUANTITY_VALUE // return to default value of quatity 1 on close
      this.closeProduct()
    },
    addItemToCart() {
      const exists = this.addToCart(this.product, this.quantity)
      this.close()
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
    },
    increaseQty() {
      if (this.quantity < 5) {
        this.quantity += 1
      }
    },
    decreaseQty() {
      if (this.quantity > 1) {
        this.quantity -= 1
      }
    }
  }
}
</script>
<style scoped>
.modal-enter-active{
  animation: panelFadeIn .3s;
}

.modal-leave-active{
  animation: panelFadeIn .3s;
  animation-direction: reverse;
}

@keyframes panelFadeIn{
  0% {opacity: 0; }
  100% {opacity: 1; }
}
</style>
