<template>
  <div>
    <h2>Products</h2>
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.email }}</td>
          <td>{{ product.password }}</td>
          <td>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
          <td>
            <button @click="editProduct(product.id)">Edit</button>
          </td>
         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

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
  methods: {
    deleteProduct(id) {
      axios
        .delete(`https://64e31273bac46e480e782010.mockapi.io/api/CURD/${id}`)
        .then(() => {
          this.products = this.products.filter((product) => product.id !== id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editProduct(id) {
      this.$router.push({ name: 'EditProduct', params: { id: id  } });
    },
  },
};
</script>