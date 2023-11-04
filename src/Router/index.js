import { createRouter, createWebHistory } from "vue-router";
import ListProduct from "../components/ListProduct.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";
import PropsMain from "../components/PropsMain.vue";
import TableProduct from "../components/TableProduct.vue";
const routes = [
  {
    path: "/products",
    component: ListProduct,
  },
  {
    path: "/add-product",
    component: AddProduct,
  },
  {
    path: "/edit-product/:id",
    name: "EditProduct",
    component: EditProduct,
  },
  {
    path: "/propsmain",
    component: PropsMain,
  },
  {
    path: "/table",
    component: TableProduct,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
