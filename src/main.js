import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import AuthForm from "@/components/auth/AuthForm";
import Dashboard from "@/components/dashboard/Dashboard";

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const requiresAuth = (to, from, next) => {
  //fetch user from localStorage
  const user = localStorage.getItem('user');
  //if there is a user then navigate to dashboard
  if (user) {
    next();
  } else {
    next({ path: '/' });
  }
};
const router = new VueRouter({
  base: __dirname,
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AuthForm
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requiresAuth
      //require auth here only authenticated user
      //can access the dashboard route
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
