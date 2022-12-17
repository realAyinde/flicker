<script setup>
  import ProductCard from './ProductCard.vue'
  import { ref, onMounted, computed } from "vue";
  import { useProductStore } from "../stores/products";
  const store = useProductStore();
  const getProducts = computed(() => {
    return store.getProducts;
  });
  const products = computed(() => {
    console.log(store.products);
    return store.products;
  });
  onMounted(() => {
    store.fetchProducts();
  });
</script>
<template>
<div class="">
  <div class="products-list flex flex-wrap justify-start w-[240px] tablet:w-[530px] laptop:w-[775px] desktop:w-[1035px] mx-auto">
    <product-card
      v-for="(product, key) in products"
      :key="'product'+key"
      :item="product"
    />
  </div>
</div>
</template>
