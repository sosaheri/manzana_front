<template>
  
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Manzana V</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" @click="logout">Salir</a>
                </li>
            </ul>
            
            </div>
        </div>
    </nav>
</template>

<script>
import auth from "@/logic/auth"; 

export default {
  name: 'Navbar'
  ,
  methods: {
    logout() {
      auth.logout()
    },
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
