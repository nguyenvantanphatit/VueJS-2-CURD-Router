<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct">
        <input type="text" v-model="email" placeholder="Email" />
        <input type="text" v-model="password" placeholder="Password" />
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      addProduct() {
        axios
          .post("https://64e31273bac46e480e782010.mockapi.io/api/CURD", {
            email: this.email,
            password: this.password,
          })
          .then(() => {
            this.email = "";
            this.password = "";
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>