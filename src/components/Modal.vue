<template> 
    <transition name="modal">
        <div class="modal" style="display: block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" v-if="hasSlot('header')">
                        <slot name="header"></slot>
                    </div>  

                    <div class="modal-body" v-if="hasSlot('body')">
                        <slot name="body"></slot>
                    </div>
                    
                    <div class="modal-footer" v-if="hasSlot('footer')">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition> 
</template>

<script>

import SlotMixin from '@/mixins/slot';

export default {
    name: 'modal',

    mixins: [
      SlotMixin,
    ],
}
    
</script>