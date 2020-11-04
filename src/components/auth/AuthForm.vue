<template>
  <b-form @submit="saveUser">
    <div class="col-6">
      <b-form-group>
        <b-form-input
            v-model="email"
            type="email"
            required
            placeholder="Enter email"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input type="password" required placeholder="password" v-model="password"/>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </div>
  </b-form>
</template>

<script>
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
name: "AuthForm",
  data() {
  return {
    email:'',
    password:''
  }
  },
  methods:{
    saveUser(e){
      e.preventDefault();
      const user = {email: this.email, password: this.password};
      console.log(user)
      //save the user to localStorage
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
}
</script>

<style scoped>

</style>
