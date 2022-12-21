<template>
  <Preloader :state="preloaderState" @hide-preloader="showProducts" />
  <div v-if="productsListState" class="products-list flex flex-wrap justify-start w-[240px] tablet:w-[530px] laptop:w-[775px] desktop:w-[1035px] mx-auto">
    <product-card
      v-for="(product, key) in filteredProducts"
      :key="'product'+key"
      :item="product"
    />
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
    ...mapState(useProductStore, ['products', 'filteredProducts'])
    // ...mapState(useProductStore, { products: 'filteredProducts' })
  },
  created: function () {
    this.fetchProductsList()
  },
}
</script>
