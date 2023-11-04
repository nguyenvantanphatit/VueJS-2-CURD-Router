<template>
  <div id="app">
    <ul>
      <li> <router-link to="/">Home</router-link></li>
      <li> <router-link to="/products">ListProduct</router-link></li>
      <li><router-link to="/add-product">AddProduct</router-link></li>
      <li><router-link to="/propsmain">PropsMain</router-link></li>
     <li> <router-link to="/table">TableProduct</router-link></li>
    </ul>
    <div class="router-view">
      <router-view />
    </div>
  </div>
  |
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.router-view {
  display: flex;
  align-items: center;
  margin: 100px;
}

#app > ul {
  display: flex;
}

#app > ul > li {
  display: flex;
  align-items: center;
  margin: 0 100px;
}
</style>
