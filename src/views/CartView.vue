<script setup>
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <div class="cart-container">
    <h2>ตะกร้าสินค้าของคุณ</h2>

    <div v-if="cartStore.cartItems.length === 0" class="empty-state">
      <p>ไม่มีสินค้าในตะกร้า...</p>
      <RouterLink to="/">กลับไปเลือกซื้อสินค้า</RouterLink>
    </div>

    <div v-else class="product-grid">
      <div v-for="item in cartStore.cartItems" :key="item.id" class="card">
        <h3>{{ item.title }}</h3>
        <img :src="item.image" :alt="item.title" class="product-img" />
        <p class="price">${{ item.price }}</p>
        <h4>{{ item.quantity }}</h4>
        <button @click="cartStore.removeFromCart(item.id)">ลบสินค้า</button>
      </div>

      <div class="checkout-summary">
        <p>สินค้าทั้งหมด: {{ cartStore.totalQuantity }} ชิ้น</p>
        <h3>ราคาสุทธิ: ${{ cartStore.totalValue.toFixed(2) }}</h3>
        <button class="btn-checkout">ชำระเงิน</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-img-mini {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.btn-remove {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}
.checkout-summary {
  margin-top: 30px;
  padding: 20px;
  border-top: 2px solid #eee;
  text-align: right;
}
.btn-checkout {
  background: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1.2rem;
}
</style>
