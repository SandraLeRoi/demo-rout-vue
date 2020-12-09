<template>
<div>

  <h1>Product page {{$route.params.id}}</h1>
  <button @click="redirect">Click Me</button>
</div>
</template>

<script>
export default {
  name: 'Product',
  methods: {
    redirect() {
      this.$router.push({
        name: 'About',
      });
    },
  },
};
</script>

<style scoped>

</style>
