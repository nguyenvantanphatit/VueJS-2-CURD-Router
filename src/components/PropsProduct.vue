<template>
    <div>
      <h2>Product Details</h2>
      <ul v-for="product in products" :key="product.id">
        <li>Email: {{ product.email }}</li>
        <li>Password: {{ product.password }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PropsProduct',
    props: {
      products: Array
    }
  };
  </script>