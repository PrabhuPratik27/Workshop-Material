<template>
  <div>
		
  </div>
</template>

<script>
import Services from "@/services/Services";
export default {
  async mounted() {
    const response = await Services.getRoute();
    this.route = response.data.route;
  },
  data: () => ({
    route: ""
  })
}
</script>