<template>
  <div>
    
  </div>
</template>

<script>
import Services from '@/services/Services'
export default {
  async mounted () {
    const response = await Services.getList();
    this.list = response.data.list;
    console.log(this.list)
  },
  data: () => ({
    list: []
  })
}
</script>

<style scoped>
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>