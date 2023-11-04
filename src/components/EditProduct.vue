<template>
  <div>
    <h2>Edit Product</h2>
    <form @submit.prevent="updateProduct">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="text" v-model="password" placeholder="Password" />
      <button type="submit">Update</button>
    </form>
    <div v-if="showSuccessModal" class="modal">
  <div class="modal-content">
    <p>Edit successful!</p>
    <button @click="redirectToTable">OK</button>
  </div>
</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      email: "",
      password: "",
      showSuccessModal: false,
    };
  },
  mounted() {
    const productId = this.$route.params.id;
    axios
      .get(`https://64e31273bac46e480e782010.mockapi.io/api/CURD/${productId}`)
      .then((response) => {
        this.id = response.data.id;
        this.email = response.data.email;
        this.password = response.data.password;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    updateProduct() {
      const productId = this.$route.params.id;
      axios
        .put(
          `https://64e31273bac46e480e782010.mockapi.io/api/CURD/${productId}`,
          {
            email: this.email,
            password: this.password,
          }
        )
        .then(() => {
          this.showSuccessModal = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    redirectToTable() {
    this.$router.push("/table");
  },
  },
};
</script>
