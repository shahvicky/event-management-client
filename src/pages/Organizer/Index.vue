<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Enter Organizer Details
      </span>
      <div slot="body">
        <form>
            <div class="form-group required text-center">
                <label v-bind:style="orStyle" for="fullName" class="col-form-label">FULL NAME</label>
                <div class="row justify-content-md-center">
                    <input v-bind:style="inputStyle" type="text" class="col-sm-5 form-control" id="fullName" placeholder="Enter Full Name">
                </div>
            </div>
            <div class="form-group required text-center">
                <label v-bind:style="orStyle" for="contact" class="col-form-label">CONTACT NUMBER</label>
                <div class="row justify-content-md-center">
                    <input v-bind:style="inputStyle" type="tel" class="col-sm-5 form-control" id="eventTitle" placeholder="Enter Contact Number">
                </div>
            </div>
            <div class="form-group required text-center">
                <label v-bind:style="orStyle" for="emailId" class="col-form-label">EMAIL</label>
                <div class="row justify-content-md-center">
                    <input v-bind:style="inputStyle" type="email" class="col-sm-5 form-control" id="emailId" placeholder="Enter Email">
                </div>
            </div>
            <div class="form-group required text-center">
                <label v-bind:style="orStyle" for="passwordId" class="col-form-label">PASSWORD</label>
                <div class="row justify-content-md-center">
                    <input v-bind:style="inputStyle" type="password" class="col-sm-5 form-control" id="passwordId" placeholder="Enter Password">
                </div>
            </div>
            
            <div class="text-center">
                <button type="submit" class="col-sm-5 btn btn-primary">CREATE NEW EVENT</button>
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
        
    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard
    },
  };
</script>