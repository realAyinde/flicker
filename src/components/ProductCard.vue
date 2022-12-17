<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    
  }
}
</script>
<template>
  <!-- <div class="_card relative flex flex-col justify-center mt-7 mr-4 py-8 px-4 w-[240px] h-[360px] rounded-md shadow-xl hover:shadow-2xl duration-300 bg-white cursor-pointer"> -->
  <div class="card relative">
    <p class="absolute top-0 left-0 text-xs text-white px-2 py-1 bg-green-400">{{ item.category }}</p>
    <div class="feed-logo h-36 flex items-center justify-center">
      <img :src="item.image" alt="" class="max-h-full">
    </div>
    <p class="mt-3 text-clip h-32 text-sm">
      {{ item.title }}
    </p>
    <p class="text-left mt-2 w-full">
      <span class="text-sm">$</span>
      <span class="font-semibold text-lg">{{ item.price }}</span>
    </p>
    <div class="mt-2 self-center">
      <button class="border-none rounded-full bg-green-500 hover:bg-green-600 duration-300 leading-5 text-gray-100 py-2 px-4 text-sm">Add to cart</button>
    </div>
  </div>
</template>
<style scoped>
</style>