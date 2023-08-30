<template>
  <div class="row">
    <div class="col-sm-3" v-for="product in products" :key="product.id">
      <div class="card mb-3">
        <img :src="product.url_img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text" v-if="product.description.length > 50">
            {{ product.description.substring(0, 50) }}...
            </p>
            <p class="card-text" v-else>
            {{ product.description }}
            </p>
          <a href="#" class="btn btn-block text-center my-3">Agregar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "@/logic/products"; 

export default {
    data() {
        return {
            products: []
        }
    },
    methods: {
        getProducts() {
            products.getProducts()
                .then(response => {
                    this.products = response.data;
                    this.$router.push("/home");
                })
                .catch(error => {
                    console.log(error)
                });
        },
    },
    created() {
        this.getProducts();
    }
}
</script>
