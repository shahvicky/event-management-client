<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        View All Items
      </span>
      <div slot="body">
        <table class="table table-striped table-bordered text-center">
          <thead>
            <tr>
              <th class="text-center">
                SELECT ITEM
              </th>
              <th class="text-center">
                ITEM NAME
              </th>
              <th class="text-center">
                ITEM COST
              </th>
              <th class="text-center">
                INVENTORY
              </th>
              <th class="text-center">
                DESCRIPTION
              </th>
              <th class="text-center">
                IMAGE
              </th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="row in data">
            <td class="text-center">
              <input type="checkbox">
            </td>
            <td>
              {{row.itemName}}
            </td>
            <td>
              {{row.itemCost}}
              <!-- {{$store.state.account.firstName}} -->
            </td>
            <td>
              {{row.inventory}}
              <!-- {{$store.state.account.lastName}} -->
            </td>
            <td>
              {{row.description}}
             <!-- {{$store.state.account.email}} -->
            </td>
            <td>
              <a href='#'>Click to View</a>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col-md-6">
            <div class="row justify-content-md-center">
              <div class="col-md-6">
                <button type="button" class="btn btn-block btn-light">EDIT ITEM</button>
              </div>
            </div>
            <div class="row" v-bind:style="gapStyle">
            </div>
            <div class="row justify-content-md-center">
              <div class="col-md-6">
                <button type="button" class="btn btn-block btn-danger" @click="openModal()">DELETE ITEMS</button>
                  <modal v-if="showModal"> 
                    <div slot="head">
                      Delete Item
                    </div>
                    
                    <div slot="body">
                      <div class="row justify-content-md-center">
                        Delete this item?
                      </div>
                      <div class="row justify-content-md-center">
                        Note: You will need to create this item again.
                      </div>
                    </div>
                      
                    <div slot="footer">
                      <div class="justify-content-md-center">
                        <button type="button" class="btn btn-sm btn-outline-info" @click="closeModal()"> Close </button>
                        <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal" @click="submitAndClose()"> Submit </button>
                      </div>
                    </div>
                  </modal>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row" v-bind:style="gapBig">
            </div>
            <div class="row justify-content-md-center">
              <div class="col-md-8">
                <button type="button" class="btn btn-block btn-secondary btn-lg" @click="addItems()">ADD MORE ITEMS</button>
              </div>
            </div>
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
   * Account Index Page
   * ============
   *
   * Page where the user can view the account information.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';
  import image from '../../assets/images/payments.png';
  import Modal from '@/components/Modal';

  export default {
    /**
     * The name of the page.
     */
    name: 'itemsList-index',

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
          height: "20px"
        },
        gapBig: {
          height: "30px"
        },
        data: [
          {itemName:"BEER", itemCost:50, inventory:5000, description:"CORONA LIGHT", image:"put here link to image"},
          {itemName:"WHISKEY", itemCost:150, inventory:5000, description:"J D", image:"put here link to image"},
          {itemName:"SHOTS", itemCost:100, inventory:5000, description:"TEQUILLA", image:"put here link to image"},
          {itemName:"COCKTAIL", itemCost:80, inventory:5000, description:"SEX ON BEACH", image:"put here link to image"},
          {itemName:"RUM", itemCost:60, inventory:5000, description:"OLD MONK", image:"put here link to image"}
        ],
        showModal:false,
      }
    },

    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      submitAndClose() {
        this.showModal = false;
      },

      addItems() {
        this.$router.push({path:'/additems'});
      },

    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      Modal,
    },
  };
</script>
