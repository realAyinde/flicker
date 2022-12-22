<template>
  <Preloader :state="preloaderState" @hide-preloader="showProducts" />
  <div v-if="productsListState" class="products-list flex flex-wrap justify-start w-[240px] tablet:w-[530px] laptop:w-[775px] desktop:w-[1035px] mx-auto">
    <product-card
      v-for="(product, key) in filteredProducts"
      :key="'product'+key"
      :item="product"
    />
    <div v-if="showResultNotFound" class="mt-6 w-full">
      <div class="text-center w-full">
        <p class="text-xl text-purple-500">
          There are no results for your search!
        </p>
        <p class="mt-2">
          Check your spelling for typing errors or try searching more general terms.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Preloader from './Preloader.vue'
import ProductCard from './ProductCard.vue'
import { useProductStore } from "../stores/products";
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      preloaderState: true,
      productsListState: false
    }
  },
  components: {
    Preloader, ProductCard
  },
  methods: {
    ...mapActions(useProductStore, ['fetchProducts']),
    fetchProductsList() {
      this.fetchProducts().then(()=> this.preloaderState = false)
    },
    showProducts() {
      this.productsListState = true
    }
  },
  computed: {
    ...mapState(useProductStore, ['products', 'filteredProducts']),
    showResultNotFound() {
      return this.products && !this.filteredProducts.length
    }
  },
  created: function () {
    this.fetchProductsList()
  }
}
</script>
