<script setup></script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/cart">Cart</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  padding: 20px;
  background: #eee;
}
main {
  padding: 20px;
}
.router-link-active {
  color: green;
  font-weight: bold;
} /* Vue จะเติม class นี้ให้เองอัตโนมัติ */
</style>
