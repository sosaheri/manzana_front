<template>
        <div id="auth" class="text-center wrapper bg-white">
            <div class="h4 text-muted text-center pt-2">Crear cuenta</div>
            <form action class="pt-3" @submit.prevent="register">
                <div class="form-group py-2">
                    <div class="input-field"> <span class="far fa-user p-2"></span> 
                    <input 
                    v-model="name"
                    type="text" 
                    placeholder="Nombre" 
                    required class=""> </div>
                </div>
                <div v-if="errors">
                <div v-if="errors.name">            
                    <span class="text-error" v-for="error in errors.name">{{ error }}</span>            
                </div>
                </div>
                <div class="form-group py-2">
                    <div class="input-field"> <span class="far fa-user p-2"></span>
                    <input
                    v-model="lastname"
                    type="text"
                    placeholder="Apellido"
                    required class=""> </div>
                </div>
                <div v-if="errors">
                <div v-if="errors.lastname">            
                    <span class="text-error" v-for="error in errors.lastname">{{ error }}</span>            
                </div>
                </div>
                <div class="form-group py-2">
                    <div class="input-field"> <span class="far fa-user p-2"></span>
                    <input
                    v-model="email"
                    type="email"
                    placeholder="Email"
                    required class=""> </div>
                </div>
                <div v-if="errors">
                <div v-if="errors.email">            
                    <span class="text-error" v-for="error in errors.email">{{ error }}</span>            
                </div>
                </div>
                <div class="form-group py-1 pb-2">
                    <div class="input-field"> <span class="fas fa-lock p-2"></span>
                    <input
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    required class=""> <button class="btn bg-white text-muted"> <span class="far fa-eye-slash"></span> </button> </div>
                </div>
                <div v-if="errors">
                <div v-if="errors.password">            
                    <span class="text-error" v-for="error in errors.password">{{ error }}</span>            
                </div>
                </div>
                <button class="btn btn-block text-center my-3">Registrar</button>
                <div class="text-center pt-3 text-muted">Ya posees cuenta? <router-link to="/">Inicio</router-link></div>
            </form>
        </div>
</template>

<script>
import auth from "@/logic/auth"; 

export default {
    data: () => ({
      name: "",
      lastname: "",
      email: "",
      password: "",
      errors: null
  }),
  methods: {
    register() {

      auth.register(this.name, this.lastname, this.email, this.password)
          .then(response => {
              this.$router.push("/");
          })
          .catch(error => {
            if (error.response && error.response.status === 422) {
              this.errors = error.response.data.errors;
            }
          });
    },
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins&display=swap');

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box
  }

  .text-error{
      color:red;
      font-size: 11px;
      text-align: left !important;
  }

  body {
      background-color: #eee;
      height: 100vh;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(to top, #fff 10%, rgba(93, 42, 141, 0.4) 90%) no-repeat
  }

  .wrapper {
      max-width: 500px;
      border-radius: 10px;
      margin: 50px auto;
      padding: 30px 40px;
      box-shadow: 20px 20px 80px rgb(206, 206, 206)
  }

  .h2 {
      font-family: 'Kaushan Script', cursive;
      font-size: 3.5rem;
      font-weight: bold;
      color: #400485;
      font-style: italic
  }

  .h4 {
      font-family: 'Poppins', sans-serif
  }

  .input-field {
      border-radius: 5px;
      padding: 5px;
      display: flex;
      align-items: center;
      cursor: pointer;
      border: 1px solid #400485;
      color: #400485
  }

  .input-field:hover {
      color: #7b4ca0;
      border: 1px solid #7b4ca0
  }

  input {
      border: none;
      outline: none;
      box-shadow: none;
      width: 100%;
      padding: 0px 2px;
      font-family: 'Poppins', sans-serif
  }

  .fa-eye-slash.btn {
      border: none;
      outline: none;
      box-shadow: none
  }

  a {
      text-decoration: none;
      color: #400485;
      font-weight: 700
  }

  a:hover {
      text-decoration: none;
      color: #7b4ca0
  }

  .option {
      position: relative;
      padding-left: 30px;
      cursor: pointer
  }

  .option label.text-muted {
      display: block;
      cursor: pointer
  }

  .option input {
      display: none
  }

  .checkmark {
      position: absolute;
      top: 3px;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 50%;
      cursor: pointer
  }

  .option input:checked~.checkmark:after {
      display: block
  }

  .option .checkmark:after {
      content: "";
      width: 13px;
      height: 13px;
      display: block;
      background: #400485;
      position: absolute;
      top: 48%;
      left: 53%;
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 300ms ease-in-out 0s
  }

  .option input[type="radio"]:checked~.checkmark {
      background: #fff;
      transition: 300ms ease-in-out 0s;
      border: 1px solid #400485
  }

  .option input[type="radio"]:checked~.checkmark:after {
      transform: translate(-50%, -50%) scale(1)
  }

  .btn.btn-block {
      border-radius: 20px;
      background-color: #400485;
      color: #fff
  }

  .btn.btn-block:hover {
      background-color: #55268be0
  }

  @media(max-width: 575px) {
      .wrapper {
          margin: 10px
      }
  }

  @media(max-width:424px) {
      .wrapper {
          padding: 30px 10px;
          margin: 5px
      }

      .option {
          position: relative;
          padding-left: 22px
      }

      .option label.text-muted {
          font-size: 0.95rem
      }

      .checkmark {
          position: absolute;
          top: 2px
      }

      .option .checkmark:after {
          top: 50%
      }

      #forgot {
          font-size: 0.95rem
      }
  }
</style>
