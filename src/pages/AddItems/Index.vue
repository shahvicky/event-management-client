<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Enter Items To Event
      </span>
      <div slot="body">
        <div class="row justify-content-md-center">
            <div class="col-md-6">
                <form id="form"  v-on:submit="validateForm">
                    <div class="form-group text-center">
                        <label v-bind:style="orStyle" for="itemName" class="col-form-label">ITEM NAME</label>
                        <input v-bind:style="inputStyle" required type="text" class="form-control" id="itemName" placeholder="Enter Item Name">
                        <div class="invalid-feedback">This field is required.</div>
                    </div>
                    <div class="form-group text-center">
                        <label v-bind:style="orStyle" for="itemCost" class="col-form-label">ITEM COST</label>
                        <input v-bind:style="inputStyle" required type="number" v-bind:class="{ 'is-invalid': attemptSubmit && wrongNumber }" class="form-control" id="number" placeholder="Enter Item Cost">
                        <div class="invalid-feedback">This field is required.</div>
                    </div>
                    <div class="form-group text-center">
                        <label v-bind:style="orStyle" for="inventory" class="col-form-label">TOTAL INVENTORY QUANTITY</label>
                        <input v-bind:style="inputStyle" required type="number" class="form-control" id="inventory" placeholder="Enter Inventory Quantity">
                        <div class="invalid-feedback">This field is required.</div>
                    </div>
                    <div class="form-group text-center">
                        <label v-bind:style="orStyle" for="description" class="col-form-label">DESCRIPTION</label>
                        <textarea rows="2" cols="50" v-bind:style="inputStyle" class="form-control" id="description" placeholder="Enter Description"/>
                    </div>
                    
                    <div class="text-center">
                        <button type="button" class="col-md-3 btn btn-basic" @click="backToAllItems()">BACK</button>
                        <button type="submit" class="col-md-3 btn btn-primary">ADD ITEM</button>
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

  export default {
    /**
     * The name of the page.
     */
    name: 'organizer-index',

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
            orStyle: {
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold'
            },
            inputStyle: {
                borderRadius: '25px',
                border: '1px solid #999',
            },

            attemptSubmit: false,
            number:'',
            name:'',
        }
    },

    computed: {
        wrongNumber() {
            return (this.isNumeric(this.number) === false || this.number < 0)
        }
    },

    methods: {

        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },

        validateForm: function (event) {
            this.attemptSubmit = true;
            if (this.missingName || this.wrongNumber) event.preventDefault();
        },

        backToAllItems() {
            this.$router.push({path:'/itemslist'});
        }

    },
        
    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard
    },
  };
</script>