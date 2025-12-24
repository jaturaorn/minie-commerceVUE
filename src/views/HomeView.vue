<script setup>
import { onMounted, ref } from "vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const products = ref([]);
const isLoading = ref(true);

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Network response was not ok");
    products.value = await response.json();
  } catch (error) {
    console.error("Fetch error:", error.message);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="container">
    <h2 v-if="isLoading">กำลังโหลดสินค้า...</h2>

    <div v-else class="product-grid">
      <div v-for="item in products" :key="item.id" class="card">
        <img :src="item.image" :alt="item.title" class="product-img" />
        <h3>{{ item.title }}</h3>
        <p class="price">${{ item.price }}</p>
        <button @click="cartStore.addToCart(item)">เพิ่มลงตะกร้า</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}
.product-img {
  width: 100%;
  height: 150px;
  object-fit: contain;
}
.price {
  font-weight: bold;
  color: #42b983;
}
</style>
