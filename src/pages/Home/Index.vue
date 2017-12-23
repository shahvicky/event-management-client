<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Welcome!
      </span>
      <div slot="body">
      Body
      </div>
    </v-card>
    <div v-bind:style="footerStyle" class="text-center">
        <img v-bind:style="infinityIconStyle" :src="image" />
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';
  import image from '../../assets/images/payments.png';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

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
        image: image
      }
    },
    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
