<template>
  <div class="main_container">
    <div class="image_con">
      <img
        src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt=""
      />
    </div>
    <div class="moon"></div>

    <div class="form_container">
      <h1>Log In</h1>
      <form @submit.prevent="handleSubmit">
        <div class="container">
          
          <label for="uname"><b>Enter Mail Address</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            v-model="email"
            
          />
          
          <label><b>Enter Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            v-model="pass"
            
          />
          <label v-if="!isValid">Incorrect Credentials</label>
        </div>
        <button class="login">Login</button>
      </form>
    </div>
  </div>
</template>

 <script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "login",
  data() {
    return {
      email: "",
      pass: "",
      isValid: true,
    };
  },
  methods: {
    handleSubmit() {
      //console.log("called");
      axios
        .post("http://163.47.115.230:30000/api/login", {
          email: this.email,
          password: this.pass,
        })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("islogged", true);
          this.$router.push({ name: "Home" });
          //console.log(res.data);
        })
        .catch((err) => {
          this.isValid = false;
          this.sweetalert();
          //console.log(err);
        });
    },
    checkloggedin() {
      console.log("Called");
      axios
        .get("http://163.47.115.230:30000/api/login")
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sweetalert() {
      if (!this.isValid) {
        Swal.fire({
          position: "top-end",
          width: 400,
          icon: "error",
          title: "Invalid Credentails!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Special+Elite&display=swap");

.swal2-title{
  font-family: "Special Elite", cursive;
  font-size: 20px !important;
}
.swal2-popup {
font-size: .5rem !important;
}


.main_container {
  overflow: hidden;
  font-family: "Special Elite", cursive;
}
.image_con {
  position: relative;
  left: 30%;
}
.image_con img {
  border-top-left-radius: 40%;
  border-bottom-left-radius: 40%;
}
.moon {
  position: absolute;
  top: 20%;
  left: 10%;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 100px;
  box-shadow: -15px 15px 0 5px #f5f3ce;
  border-radius: 50%;
}
.form_container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  width: 400px;
  border-radius: 5%;
  color: white;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 15px 0;
  display: inline-block;
  background: none;
  color: white;
  outline: none;
  border: none;
  border-bottom: 2px solid #ff0057;
  box-sizing: border-box;
  font-family: "Special Elite", cursive;
  font-size: 18px;
}

.login {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 40%;
  border-radius: 20px;
  font-family: "Special Elite", cursive;
}

.login:hover {
  background: #ff0057;
  color: white;
  transition: 0.5s;
}

.container {
  padding: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>