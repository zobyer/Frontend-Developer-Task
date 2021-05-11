<template>
  <nav>
    <router-link :to="{ name: 'Home' }"
      ><font-awesome-icon class="cart_icon" :icon="['fas', 'user']"
    /></router-link>
    <router-link :to="{ name: 'AddDevice' }">Add Device</router-link>
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  position: relative;

  margin: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  font-family: "Special Elite", cursive;
}
nav a {
  text-decoration: none;
  color: #333;
  padding: 19px;
  text-align: center;
}
nav a:hover{
  background-color: #c1436d;
  color: white;
  border-radius: 25%;
  transition: 0.4s ease;
}
</style>