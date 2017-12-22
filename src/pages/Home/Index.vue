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

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
