<template>
  <div class="modeldata_container">
    <h1>Medical Device Model's Data</h1>
    <table>
      <tr>
        <th>Id</th>
        <th>DataType</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Name</th>
        <th>Display Name</th>
        <th>Description</th>
        <th>Status</th>
        <th>GroupId</th>
        <th>ProtocolOrder</th>
      </tr>
      <tr v-for="modeldata in allmodeldata" :key="modeldata.Id">
        <td>{{ modeldata.Id }}</td>
        <td>{{ modeldata.DataType }}</td>
        <td>{{ modeldata.Brand }}</td>
        <td>{{ modeldata.Model }}</td>
        <td>{{ modeldata.Name }}</td>
        <td>{{ modeldata.DisplayName }}</td>
        <td>{{ modeldata.Description }}</td>
        <td>{{ modeldata.Status }}</td>
        <td>{{ modeldata.GroupId }}</td>
        <td>{{ modeldata.ProtocolOrder }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["allmodeldata"],
};
</script>

<style scoped>
.modeldata_container {
  height: 90%;
  overflow: scroll;
}

table {
  font-family: "Special Elite", cursive;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  color: black;
}

tr:nth-child(odd) {
  background-color: #dddddd;
}
</style>