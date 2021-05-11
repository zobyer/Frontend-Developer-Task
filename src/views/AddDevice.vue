<template>
  <navbar />
  <div class="add_container">
    <h1>ADD NEW DEVICE</h1>
    <form @submit.prevent="insertdevicemodel">
      <div class="container">
        <label><b>Brand Id</b></label>
        <input
          type="text"
          placeholder="Enter Brand Id"
          v-model="BrandId"
          required
        />

        <label><b>Name</b></label>
        <input type="text" placeholder="Enter Name" v-model="Name" required />

        <label><b>Comment</b></label>
        <input
          type="text"
          placeholder="Enter Comment"
          v-model="Comment"
          required
        />
      </div>
      <button class="login">Add Device</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from '../components/Navbar.vue';

export default {
  components: { Navbar },
  data() {
    return {
      BrandId: "",
      Name: "",
      TypeId: "",
      Comment: "",
    };
  },
  methods: {
    gettypeid() {
      axios
        .get("http://163.47.115.230:30000/api/devicetype?limit=40&page=1", {
          headers: {
            authorization: localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          this.TypeId = response.data[1] +1;
          //console.log("type Id",response.data[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    insertdevicemodel() {
      axios
        .post("http://163.47.115.230:30000/api/devicemodel", {
          BrandId: this.BrandId,
          Name: this.Name,
          TypeId: this.TypeId,
          Comment:this.Comment
        },{
           headers: {
            authorization: localStorage.getItem("access_token"),
          },
        })
        .then((res) => {
          this.succesfulinsert();
          this.sweetalert();
          //console.log(res);
        })
        .catch((err) => {
          this.failedsweetalert();
          //console.log(err);
        });
    },
    succesfulinsert(){
       this.gettypeid();
       this.BrandId = "";
       this.Name = "";
       this.Comment = "";
    },
    sweetalert() {
      //console.log(localStorage.getItem("islogged"));
      if (localStorage.getItem("islogged") == 'true') {
          Swal.fire({
          position: "top-end",
          width: 400,
          icon: "success",
          title: "Insertion Successful!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    failedsweetalert() {
      //console.log(localStorage.getItem("islogged"));
      if (localStorage.getItem("islogged") == 'true') {
          Swal.fire({
          position: "top-end",
          width: 400,
          icon: "error",
          title: "Oops! Failed to insert",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  created() {
    this.gettypeid();
  },
};
</script>

<style>
.add_container {
  margin: auto;
  width: 50%;
  font-family: "Special Elite", cursive;
}

.add_container .container input[type="text"]{
  color: black;
}
@media screen and (max-width: 800px){
  .add_container{
    width: 70%;
  }
}
</style>