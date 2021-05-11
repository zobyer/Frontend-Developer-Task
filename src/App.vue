<template>
  <div id="nav">
    
  </div>
  <router-view/>
</template>

<script>
import Swal from "sweetalert2";

export default {
  methods:{
    sweetalert() {
      //console.log(localStorage.getItem("islogged"));
      if (localStorage.getItem("islogged") == "true") {
        Swal.fire({
          position: "top-end",
          width: 400,
          icon: "success",
          title: "You Have Successfully Logged In!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
  watch: {
    $route(to, from) {
      //console.log(to.name, from.name);
      if( to.name == "Home" && from.name == "Login"){
        this.sweetalert();
      }
    },
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
  font-family: "Special Elite", cursive;
}


</style>
