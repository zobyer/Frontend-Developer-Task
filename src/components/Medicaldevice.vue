<template>
  <div class="data_container">
    <div class="data">
      <div class="column">
        <div class="card">
         
            <h3>{{ medicaldata.Name }}</h3>
            <h3>{{ medicaldata.BrandId }}</h3>
            <p>{{ medicaldata.Description }}</p>
            <p>{{ medicaldata.Comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["medicaldata"],
  methods:{
    show_details(){
      this.$emit("toogle");
    }
  }
};
</script>

<style scoped>
.data {
  margin: 20px;
}

.data .column {
  min-width: 200px;
  max-width: 400px;
}
.data .column a {
  text-decoration: none;
  color: white;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #333;
  color: white;
  border-radius: 5px;
  transition: 0.5s ease;
}

.card:hover {
  transform: scale(1.1);
  background: #c1436d;
  color: white;
}
</style>