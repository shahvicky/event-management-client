<template>
  <v-layout>
    <v-card contextual-style="dark">
      
      <div slot="body">
        <div>
            <button type="button" class="btn btn-success btn-block">CREATE NEW EVENT</button>
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

  export default {
    /**
     * The name of the page.
     */
    name: 'event-index',

    data() {
      return {
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

    
    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>