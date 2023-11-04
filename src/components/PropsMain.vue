<template>
    <div>
      <h2>Products</h2>
      <ul v-for="product in products" :key="product.id">
        <li>
          {{ product.email }}
        </li>
        <li>
          {{ product.password }}
        </li>
      </ul>
    </div>
    <PropsProduct  v-if="products.length" :products="products" />
  </template>
  
  <script>
  import axios from "axios";
  import PropsProduct from "../components/PropsProduct.vue";
  export default {
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      axios
        .get("https://64e31273bac46e480e782010.mockapi.io/api/CURD")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    components: {
      PropsProduct,
    },
  };
  </script>
  