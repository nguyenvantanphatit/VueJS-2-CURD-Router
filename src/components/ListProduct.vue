<template>
  <div>
    <h2>Products</h2>
    <input type="text" v-model="searchQuery" placeholder="Search product..." />
    <button @click="searchProducts()">Search</button>
    <ul v-for="product in filteredProducts" :key="product.id">
      <li>
        {{ product.email }}
      </li>
      <li>
        {{ product.password }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      searchQuery: "",
    };
  },
  mounted() {
    axios
      .get("https://64e31273bac46e480e782010.mockapi.io/api/CURD")
      .then((response) => {
        this.products = response.data;
        this.searchProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    searchProducts() {
      const filteredProducts = this.products.filter((product) =>
        product.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.filteredProducts = filteredProducts;
    },
    selectProduct(product) {
      product.selected = true;
    },
    deleteProduct(product) {
      axios
        .delete(
          `https://64e31273bac46e480e782010.mockapi.io/api/CURD/${product.id}`
        )
        .then(() => {
          this.products = this.products.filter((p) => p.id !== product.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
