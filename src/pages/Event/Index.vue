<template>
  <v-layout>
    <v-card contextual-style="dark">
      
      <div slot="body">
        <div>
            <button type="button" class="btn btn-success btn-block" v-on:click="createEvent">CREATE NEW EVENT</button>
        </div>
        <div class="row" v-bind:style="gapStyle">
            <div class="col-md-5 align-middle">
                <hr v-bind:style="lineStyle">
            </div>
            <div class="col-md-1" v-bind:style="orStyle">
                OR
            </div>
            <div class="col-md-6">
                <hr v-bind:style="lineStyle">
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-info btn-block">SELECT PREVIOUS EVENT</button>
        </div>
      </div>
    </v-card>
    <div v-bind:style="footerStyle" class="text-center">
        <img v-bind:style="infinityIconStyle" :src="image" />
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Event  Index Page
   * ============
   *
   * The event index page.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';
  import image from '../../assets/images/payments.png';
  import Vue from 'vue';

  export default {
    /**
     * The name of the page.
     */
    name: 'event-index',

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
        gapStyle: {
            height: '100px'
        },
        orStyle: {
            textAlign: 'center',
            color: 'black',
            marginTop: '2rem',
            fontWeight: 'bold'
        },
        lineStyle: {
            border: 'none',
            height: '5px',
            marginTop: '3rem',
            /* Set the hr color */
            color: '#333', /* old IE */
            background: '#333' /* Modern Browsers */
        }
      };
    },
    methods: {
      createEvent: function(event) {
          this.$router.push({
            name: 'eventCreate.index',
          });
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