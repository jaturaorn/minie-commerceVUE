import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({ cartItems: [] }),
  getters: {
    // นับจำนวน "ชนิด" สินค้า
    uniqueItemCount: (state) => state.cartItems.length,
    // นับจำนวน "ชิ้น" รวมทั้งหมด
    totalQuantity: (state) =>
      state.cartItems.reduce((total, item) => total + item.quantity, 0),
    totalValue: (state) => {
      return state.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  actions: {
    addToCart(product) {
      // Check if the product is already in the cart
      const exitingItem = this.cartItems.find((item) => item.id === product.id);

      if (exitingItem) {
        // If it exists, increment its quantity
        exitingItem.quantity++;
      } else {
        // If not, add the new product with a quantity of 1
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },
  },
});
