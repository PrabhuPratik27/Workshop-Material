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
    list: [],
  })
}
</script>