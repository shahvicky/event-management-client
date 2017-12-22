<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Login
      </span>
      <div slot="body">
        <form @submit.prevent="login(user)">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-envelope fa-fw"></i>
              </div>
              <input
                v-model="user.email"
                type="email"
                placeholder="Email"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-lock fa-fw"></i>
              </div>
              <input
                v-model="user.password"
                type="password"
                placeholder="Password"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-outline-primary">
              Login
            </button>
          </div>
        </form>
      </div>
      <div slot="footer">
        No account?
        <router-link :to="{ name: 'register.index' }">Register</router-link>
      </div>
    </v-card>
    <div v-bind:style="footerStyle" class="text-center">
        <img v-bind:style="infinityIconStyle" :src="image" />
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */

  import VLayout from '@/layouts/Minimal';
  import VCard from '@/components/Card';
  import axios from 'axios';
  import store from '@/store';
  import image from '../../assets/images/payments.png';

  export default {
    /**
     * The name of the page.
     */
    name: 'login-index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        footerStyle: {
            backgroundColor: '#666666',
            padding: '0',
            margin: '0',
            border: '0'
        },
        infinityIconStyle: {
            width: '200px',
            height: '70px'
        },
        image: image,
        user: {
          email: null,
          password: null,
        },
      };
    },

    /**
     * The methods the page can use.
     */
    methods: {
      /**
       * Will log the user in.
       *
       * @param {Object} user The user to be logged in.
       */
      login(user) {
        // axios.post('http://localhost:4040/api/merchant/login', {"email": user.email, "password": user.password})
        //   .then(function(response){
        //     alert("Check console for response");
        //     console.log(response);
        //     store.dispatch('auth/login', user);
        //   });
        this.$store.dispatch('auth/login', user);
      },
    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
