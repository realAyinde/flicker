<template>
  <div class="side-panel-template w-full">
    <transition name="panel">
      <div v-if="state" class="w-full overflow-y-auto fixed h-screen top-0 right-0 z-40 bg-white shadow-md hover:overscroll-y-contain">
        <div class="h-full">
          <div class="text-right flex justify-end hover:cursor-pointer" @click="closeCart">
            <svg height="24" width="24" viewBox="0 0 24 24" class="mt-5 mr-5 laptop:mt-8 laptop:mr-8">
              <use xlink:href="#icon-close"></use>
            </svg>
          </div>
          <div class="pb-4 max-w-4xl mx-4 tablet:mx-6 laptop:mx-auto">
            <h2 class="font-light text-2xl tablet:text-3xl laptop:text-5xl leading-10 text-center">Shopping Cart</h2>
            <div class="mt-5">
              <div class="mt-3">
                <div v-if="cartItems && cartItems.length">
                  <h3 class="text-lg tablet:text-xl font-medium px-4 mb-2 relative">Cart ({{ getTotalCartQuantity }})</h3>
                  <div v-for="(item, key) in cartItems" :key="'item'+key" class="w-full border-t border-purple-100 p-4">
                    <div class="w-full h-20 tablet:h-32 flex">
                      <div class="flex-none w-12 tablet:w-20 flex items-center justify-center">
                        <img :src="item.image" alt="" class="max-h-full">
                      </div>
                      <div class="flex-auto px-4">
                        <p class="w-full tablet:font-medium truncate-line-clamp">
                          {{ item.title }}
                        </p>
                      </div>
                      <div class="font-medium text-lg">${{ item.price }}</div>
                    </div>
                    <div class="mt-2 flex justify-between">
                      <div>
                        <button class="border-none hover:bg-purple-100 rounded-md px-2 py-1 text-purple-400 font-semibold text-sm flex leading-5" @click="removeFromCart(item)">
                          <svg width="18" height="18" fill="currentColor">
                            <use href="#icon-shopping-bag"></use>
                          </svg>
                          <span>&nbsp;REMOVE</span>
                        </button>
                      </div>
                      <div class="flex">
                        <button class="bg-purple-400 text-white text-center rounded-md shadow-md p-1" @click="decreaseQty(item)">
                          <svg width="18" height="18" fill="currentColor">
                            <use href="#icon-minus"></use>
                          </svg>
                        </button>
                        <span class="inline-block w-8 text-center leading-7">{{ item.quantity }}</span>
                        <button class="bg-purple-400 text-white text-center rounded-md shadow-md p-1" @click="increaseQty(item)">
                          <svg width="18" height="18" fill="currentColor">
                            <use href="#icon-plus"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 p-4 border-t border-purple-100">
                    <div class="flex justify-between text-xl font-medium">
                      <span class="">Subtotal</span>
                      <span class="">${{ getSubTotal }}</span>
                    </div>
                    <p class="text-xs text-gray-500">Delivery fees not included yet.</p>
                  </div>
                  <div class="w-full p-4 flex justify-center">
                    <button class="rounded-md uppercase text-white text-sm font-medium bg-purple-600 px-6 py-2">Proceed to checkout</button>
                  </div>
                </div>
                <div v-else class="mt-6">
                  <div class="text-center">
                    <p class="text-xl text-purple-500">
                      Your cart is empty!
                    </p>
                    <p class="mt-2">
                      Browse our page and discover your wants!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useProductStore } from "../stores/products"

export default {
  computed: {
    ...mapState(useProductStore, 
      { cartItems: 'carts', state: 'cartState' }
    ),
    getSubTotal() {
      const sum = this.cartItems.reduce((accumulator, item) => accumulator + (item.quantity * item.price), 0).toFixed(2)
      return sum
    },
    getTotalCartQuantity() {
      const totalQuantity = this.cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
      return totalQuantity
    }
  },
  methods: {
    ...mapActions(useProductStore, 
      ['closeCart', 'increaseQty', 'decreaseQty', 'removeFromCart']
    ),
  }
}
</script>
<style scoped>
  .panel-enter-active{
    animation: panelFadeIn .6s;
  }

  .panel-leave-active{
    animation: panelFadeIn .6s;
    animation-direction: reverse;
  }

  @keyframes panelFadeIn{
    0% {transform: translateX(100%); }
    65% {transform: translateX(0); box-shadow: 0 0 0px rgba(34, 60, 47, 0.15); }
    100% {box-shadow: 0 0 35px rgba(34, 60, 47, 0.15); }
  }
</style>
