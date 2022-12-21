import axios from 'axios'
import { defineStore } from 'pinia'
import { PRODUCT_EXISTS, PRODUCT_NOT_EXISTS } from '../constants' 

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    cartState: false,
    carts: [],
    singleProductState: false,
    currentProduct: null,
  }),
  actions: {
    async fetchProducts() {
      try {
        const data = await axios.get('https://fakestoreapi.com/products')
          this.products = this.addPercentageIncrease(data.data) 
        }
        catch (error) {
          console.log(error)
      }
    },
    addPercentageIncrease(arr) {
      // This add 2.2% to each product price before storing as specified in the requirement
      return arr.map(item => ({ ...item, price: (item.price*102.2/100).toFixed(2) }))
    },
    openCart() {
      this.cartState = true
    },
    closeCart() {
      this.cartState = false
    },
    increaseQty(item) {
      const index = this.carts.findIndex(i => i.id === item.id)
      const { quantity } = item
      if (index !== -1 && quantity < 5) {
        this.carts[index].quantity += 1
      }
    },
    decreaseQty(item) {
      const index = this.carts.findIndex(i => i.id === item.id)
      const { quantity } = item
      if (index !== -1 && quantity > 1) {
        this.carts[index].quantity -= 1
      }
    },
    addToCart(item, quantity) {
      const index = this.carts.findIndex(i => i.id === item.id)
      if (index === -1) {
        this.carts.push({ ...item, quantity })
        return PRODUCT_NOT_EXISTS
      }
      return PRODUCT_EXISTS
    },
    removeFromCart(item) {
      const index = this.carts.findIndex(i => i.id === item.id)
      if (index !== -1) {
        this.carts.splice(index, 1)
      }
    },
    openProduct(item) {
      this.currentProduct = item
      this.singleProductState = true
    },
    closeProduct() {
      this.singleProductState = false
    }
  },
})