import axios from 'axios'
import { defineStore } from 'pinia'
// import configuration from '@/env'

export const useProductStore = defineStore('products', {
  state: () => ({
    products : []
  }),
  getters: {
    getProducts(state){
      return state.users
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const data = await axios.get('https://fakestoreapi.com/products')
          this.products = data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },
    addToCart() {
      
    }
  },
})