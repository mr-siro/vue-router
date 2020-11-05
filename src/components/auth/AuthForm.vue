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
      const profile = localStorage.getItem('user');
      if(profile) {
        this.$router.push({path:'dashboard'})
      }

    }
  }
}
</script>

<style scoped>

</style>
