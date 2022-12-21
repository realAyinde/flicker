# Flicker

This is an assessment task to design a Single page E-commerce application in Vue3 using tailwindcss based on the following criteria:

1. Get all products from (https://fakestoreapi.com/products) using Axios.

2. Store all products fetched from the API inside the store.

3. Add 2.2% to each product price before displaying it to the user.

4. Display the 4 products in each row showing the title, category, price, and image.

5. The user should be able to add products to the cart with the following behavior:

  - If the product does not exist inside the cart, proceeding added the product to the cart and notify the user of successfully adding the product to the cart with the prompt: Product added to cart.

  - If the product already exists inside the cart, display a prompt to the user: Product already exists inside the cart.

  - If any error occurred while adding a product to the cart, display a prompt to the user:

  Sorry, an error occurs from our side while adding your product to the cart, we are currently working on it, Kindly try again.



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
