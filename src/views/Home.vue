<template>
  <div class="home">
    <navbar />
    <h1>All Data</h1>
    <div id="medical_data">
      <div
        v-for="medicaldata in allmedicaldata"
        :key="medicaldata.Id"
        @click="toggle(medicaldata.BrandId, medicaldata.Name)"
      >
        <medicaldevice :medicaldata="medicaldata" />
      </div>
    </div>
  </div>
  <div class="show_table" v-if="showdata">
    <font-awesome-icon
      class="cross_icon"
      @click="toggle()"
      :icon="['fas', 'times']"
    />
    <modeldata :allmodeldata="allmodeldata" />
  </div>
</template>

<script>
import Medicaldevice from "../components/Medicaldevice.vue";
// @ is an alias to /src

import Navbar from "../components/Navbar.vue";
import axios from "axios";
import Modeldata from "../components/Modeldata.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Medicaldevice,
    Modeldata,
  },
  data() {
    return {
      allmedicaldata: null,
      showdata: false,
      allmodeldata: null,
    };
  },
  methods: {
    getAllmedicaldevice() {
      //console.log(localStorage.getItem("access_token"));
      axios
        .get("http://163.47.115.230:30000/api/overview/modeltype", {
          headers: {
            authorization: localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          this.allmedicaldata = response.data;
          //console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
          //this.$router.push({ name: "Login" });
        });
    },
    toggle(BrandId, Name) {
      if (!this.showdata) {
        this.getmodelsdata(BrandId, Name);
      }
      this.showdata = !this.showdata;
    },
    getmodelsdata(BrandId, Name) {
      //console.log(BrandId, Name);
      axios
        .get(
          "http://163.47.115.230:30000/api/overview/modeldata/" +
            BrandId +
            "/" +
            Name,
          {
            headers: {
              authorization: localStorage.getItem("access_token"),
            },
          }
        )
        .then((response) => {
          this.allmodeldata = response.data;
          //console.log(this.allmodeldata);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
  },
  created() {
    this.getAllmedicaldevice();
    //this.sweetalert();
  },
  
};
</script>

<style scoped>
#medical_data {
  font-family: "Special Elite", cursive;
  display: flex !important;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 0;
  overflow: scroll;
}
.show_table {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  width: 100%;
  background: white;
}

.cross_icon {
  font-size: 50px;
  color: #ff0057;
  padding: 10px;
  border-radius: 50%;
}

.cross_icon:hover {
  color: white;
  background: red;
  transition: 0.5s;
}
</style>