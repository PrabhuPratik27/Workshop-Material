<template>
  
</template>

<script>
import Services from '@/services/Services'
export default {
  data() {
    return {
      route: ''
    }
  },
  async mounted () {
    const response = await Services.getRoute();
    this.route = response.data.route
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>