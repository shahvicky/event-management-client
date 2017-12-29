<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Enter Event Details
      </span>
      <div slot="body">
        <div class="row justify-content-md-center">
            <div class="col-md-6">
                <form>
                    <div class="form-group text-center">
                        <label v-bind:style="orStyle" for="eventTitle" class="col-form-label" data-toggle="tooltip" title="Required">EVENT TITLE</label>
                        <input v-bind:style="inputStyle" required type="text" class="form-control" id="eventTitle" placeholder="Enter Event Title">
                    </div>
                    <div class="form-group text-center">
                        <label v-bind:style="orStyle" class="col-form-label" data-toggle="tooltip" title="Required">EVENT DATE AND TIME</label>
                        <date-picker v-model="dateRange" lang="en" v-bind:not-before="dateToday" type="datetime" range format="yyyy-MM-dd hh:mm:ss" confirm></date-picker>
                    </div>

                    <div class="form-group text-center">
                        <label v-bind:style="orStyle">TICKET CATEGORY AND COUNT</label>
                        <div class="row justify-content-md-center">
                            <div class="col-md-6">
                                <label v-bind:style="orStyle" class="col-form-label">CATEGORY:</label>
                                <div v-for="(input, index) in categories">
                                    <input v-bind:style="inputStyle" type="text" class="form-control" id="eventCategory" placeholder="Ticket Category Type">
                                    <div v-bind:style="smallGapStyle"></div>
                                    <button type="button" class="btn btn-danger" v-if="index != 0" @click="deleteCategory(index)">Remove</button>
                                    <div v-bind:style="smallGapStyle"></div>
                                </div>
                                <div v-bind:style="smallGapStyle"></div>
                                <button type="button" class="btn btn-basic" @click="addCategory()">Add Category</button>
                            </div>
                            <div class="col-md-6">
                                <label v-bind:style="orStyle" class="col-form-label">COUNT:</label>
                                <input v-bind:style="inputStyle" type="number" v-bind:class="{ 'is-invalid': attemptSubmit && wrongNumber }" class="form-control" id="number" placeholder="Ticket count">
                            </div>
                        </div>
                    </div>


                    <div class="form-group text-center">
                        <label v-bind:style="orStyle" for="eventVenue" class="col-form-label" data-toggle="tooltip" title="Required">EVENT VENUE</label>
                        <input v-bind:style="inputStyle" required type="text" class="form-control" id="eventVenue" placeholder="Enter Event Venue">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="col-sm-5 btn btn-primary" @click="addEvent()">ADD EVENT</button>
                    </div>
                </form>
            </div>
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
   * Create Event  Index Page
   * ============
   *
   * The create event index page.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';
  import image from '../../assets/images/payments.png';
  import Vue from 'vue';
  import DatePicker from 'vue2-datepicker'


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
            
            orStyle: {
                textAlign: 'center',
                color: 'black',
                marginTop: '1rem',
                fontWeight: 'bold'
            },
            attemptSubmit: false,
            categories: [{category:''}],
            smallGapStyle: {
                height: '5px'
            },
            dateRange:'',
            dateToday: (new Date).toLocaleString(),

            
        }
    },

    computed: {
        wrongNumber() {
            return (this.isNumeric(this.number) === false || this.number < 0)
        }
    },

    methods : {

        addEvent: function(){
            console.log(this.dateRange == '')
        },
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },

        addCategory: function() {
            this.categories.push({
                category:''
            })
        },
        deleteCategory(index) {
            this.categories.splice(index,1)
        }

    },
        
    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      DatePicker,
    
    },
  };
</script>