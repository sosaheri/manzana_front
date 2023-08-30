<template>
  <Navbar />
  <div id="home" style="margin-top: 100px;">
  
    <div class="container mt-5" >
      <ProductCard />
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import ProductCard from '../components/ProductCard.vue'

  export default {
    components: {
      Navbar,
      ProductCard
    }
  };
</script>

<style>


</style>
