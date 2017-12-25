<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Enter Items To Event
      </span>
      <div slot="body">
        <form>
            <div class="form-group text-center">
                <label v-bind:style="orStyle" for="itemName" class="col-form-label">ITEM NAME</label>
                <div class="row justify-content-md-center">
                    <input v-bind:style="inputStyle" required type="text" class="col-sm-5 form-control" id="itemName" placeholder="Enter Item Name">
                </div>
            </div>
            <div class="form-group text-center">
                <label v-bind:style="orStyle" for="itemCost" class="col-form-label">ITEM COST</label>
                <div class="row justify-content-md-center">
                    <input v-bind:style="inputStyle" required type="number" class="col-sm-5 form-control" id="itemCost" placeholder="Enter Item Cost">
                </div>
            </div>
            <div class="form-group text-center">
                <label v-bind:style="orStyle" for="inventory" class="col-form-label">TOTAL INVENTORY QUANTITY</label>
                <div class="row justify-content-md-center">
                    <input v-bind:style="inputStyle" required type="number" class="col-sm-5 form-control" id="inventory" placeholder="Enter Inventory Quantity">
                </div>
            </div>
            <div class="form-group text-center">
                <label v-bind:style="orStyle" for="description" class="col-form-label">DESCRIPTION</label>
                <div class="row justify-content-md-center">
                    <textarea rows="2" cols="50" v-bind:style="inputStyle" class="col-sm-5 form-control" id="description" placeholder="Enter Description"/>
                </div>
            </div>
            
            <div class="text-center">
                
                   <!-- <div class="col-md-4">
                    </div> -->
                        <button type="button" class="col-md-3 btn btn-basic" @click="backToAllItems()">BACK</button>
                    
                        <button type="submit" class="col-md-3 btn btn-primary">ADD ITEM</button>
               
                
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
        }
    },

    methods: {

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