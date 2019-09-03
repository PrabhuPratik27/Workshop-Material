<template>
  <div>
    
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  data: () => ({
    emp1: {
      image: 'https://image.shutterstock.com/image-vector/profile-photo-vector-placeholder-pic-260nw-535853263.jpg',
      name: 'John Doe',
      position: 'Architect & Engineer'
    },
    emp2: {
      image: 'https://image.shutterstock.com/image-illustration/default-avatar-profile-icon-grey-260nw-1403430335.jpg',
      name: 'Jane Doe',
      position: 'Interior Designer'
    }
  }),
  components: {
    Card
  }
}
</script>