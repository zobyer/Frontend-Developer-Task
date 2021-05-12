<template>
  <navbar />

  <div class="add_container">
    <h1>ADD NEW DEVICE</h1>
    <form @submit.prevent="insertdevicemodel">
      <div class="container">
        <div class="box">
          <label><b>Select Description Below</b></label>
          <input
            type="text"
            v-model="Description"
            @click="visibile ? (visibile = false) : (visibile = true)"
            readonly
            placeholder="Click here, select a description from below"
            required
          />
          <div class="names" v-if="visibile">
            <ul v-for="device in devicetype" :key="device.Id">
              <li
                @click="
                  setdevice(device.Id, device.Description), (visibile = false)
                "
              >
                {{ device.Description }}
              </li>
            </ul>
          </div>
        </div>
        <div class="box" @click="visibile = false">
          <label><b>Brand Id</b></label>
          <input
            type="text"
            placeholder="Enter Brand Id"
            v-model="BrandId"
            required
          />
        </div>

        <div class="box" @click="visibile = false">
          <label><b>Name</b></label>
          <input type="text" placeholder="Enter Name" v-model="Name" required />
        </div>
        <div class="box" @click="visibile = false">
          <label><b>Comment</b></label>
          <input type="text" placeholder="Enter Name" v-model="Comment" required/>
        </div>
      </div>
      <button class="login">Add Device</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      BrandId: "",
      Name: "",
      TypeId: "",
      Comment: "",
      Description: "",
      devicetype: null,
      visibile: false,
    };
  },
  methods: {
    getdevicetype() {
      axios
        .get("http://163.47.115.230:30000/api/devicetype?limit=40&page=1", {
          headers: {
            authorization: localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          this.devicetype = response.data[0];
          //console.log(this.devicetype);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    insertdevicemodel() {
      console.log(this.BrandId, this.Name, this.TypeId, this.Comment, localStorage.getItem("access_token"))
      axios
        .post(
          "http://163.47.115.230:30000/api/devicemodel",
          {
            BrandId: this.BrandId,
            Name: this.Name,
            TypeId: this.TypeId,
            Comment: this.Comment,
          },
          {
            headers: {
              authorization: localStorage.getItem("access_token"),
            },
          }
        )
        .then((res) => {
          this.succesfulinsert();
          this.sweetalert();
          //console.log(res);
        })
        .catch((err) => {
          this.failedsweetalert();
          console.log(err);
        });
    },
    succesfulinsert() {
      this.BrandId = "";
      this.Name = "";
      this.Comment = "";
      this.Description="";
    },
    sweetalert() {
      //console.log(localStorage.getItem("islogged"));
      if (localStorage.getItem("islogged") == "true") {
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
      if (localStorage.getItem("islogged") == "true") {
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
    setdevice(Id, Description) {
      this.TypeId = Id;
      this.Description = Description;
    },
  },
  created() {
    this.getdevicetype();
  },
};
</script>

<style>
.add_container {
  margin: auto;
  width: 50%;
  font-family: "Special Elite", cursive;
}

.add_container .container input[type="text"] {
  color: black;
}

.names {
  position: absolute;
  background: #333;
  color: white;
  margin-top: 0;
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
}
.names ul {
  list-style: none;
}
.names ul li {
  cursor: pointer;
}

.box {
  margin: 15px;
}
@media screen and (max-width: 800px) {
  .add_container {
    width: 70%;
  }
}
</style>