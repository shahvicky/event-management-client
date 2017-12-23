<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Enter Event Details
      </span>
      <div slot="body">
        <form>
            <div class="form-group text-center">
                <label v-bind:style="orStyle" for="eventTitle" class="col-form-label">EVENT TITLE</label>
                <div class="row justify-content-md-center">
                    <input v-bind:style="inputStyle" required type="text" class="col-sm-5 form-control" id="eventTitle" placeholder="Enter Event Title">
                </div>
            </div>
            <div class="form-group text-center">
                <label v-bind:style="orStyle">EVENT DATE AND TIME</label>
                <div class="row justify-content-md-center">
                    <div class="col-sm-4">
                        <label v-bind:style="orStyle" class="col-sm-3 col-form-label">FROM:</label>
                        <date-picker :date="startTime" :option="option" required></date-picker>
                    </div>
                    <div class="col-sm-4">
                        <label v-bind:style="orStyle" class="col-sm-3 col-form-label">TO:</label>
                        <date-picker :date="startTime" :option="option" required></date-picker>
                    </div>
                </div>
            </div>
            <div class="form-group text-center">
                <label v-bind:style="orStyle" for="eventVenue" class="col-form-label">EVENT VENUE</label>
                <div class="row justify-content-md-center">
                    <input v-bind:style="inputStyle" required type="text" class="col-sm-5 form-control" id="eventVenue" placeholder="Enter Event Venue">
                </div>
            </div>
            <div class="text-center">
                <button type="button" class="col-sm-5 btn btn-primary" v-on:click="organizerDetail">NEXT</button>
            </div>
        </form>
      </div>
    </v-card>
    <div v-bind:style="footerStyle" class="text-center">
        <img v-bind:style="infinityIconStyle" :src="image" />
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Create Event  Index Page
   * ============
   *
   * The create event index page.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';
  import myDatepicker from 'vue-datepicker';
  import image from '../../assets/images/payments.png';
  import Vue from 'vue';

  export default {
    /**
     * The name of the page.
     */
    name: 'create-event-index',

    data () {
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
            inputStyle: {
                borderRadius: '25px',
                border: '1px solid #999',
            },
            startTime: {
                time: ''
            },
            orStyle: {
                textAlign: 'center',
                color: 'black',
                marginTop: '1rem',
                fontWeight: 'bold'
            },
            option: {
                type: 'min',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format: 'YYYY-MM-DD HH:mm',
                placeholder: 'YYYY-MM-DD HH:mm',
                inputStyle: {
                    display: 'inline-block',
                    width : '100%',
                    padding: '6px',
                    lineHeight: '22px',
                    fontSize: '16px',
                    border: '1px solid #999',
                    borderRadius: '25px',
                    color: '#666666'
                },
                color: {
                    header: '#666666',
                    headerText: '#fff'
                },
                buttons: {
                    ok: 'Ok',
                    cancel: 'Cancel'
                },
                overlayOpacity: 0.5, // 0.5 as default 
                dismissible: true, // as true as default 
                timeoption: {
                    type: 'min',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD HH:mm'
                },
                limit: [{
                    type:'fromto',
                    from:'2017-12-23',
                    to:'2019-01-30'
                }],
            },
            
        }
    },

    methods : {

        organizerDetail : function(event) {
            Vue.router.push({
                name: 'organizerDetails.index',
            });
        }

    },
        
    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      'date-picker': myDatepicker,
    },
  };
</script>