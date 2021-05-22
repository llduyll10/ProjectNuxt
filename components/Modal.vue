<template>
  <div>
    <b-modal ref="my-modal" :no-close-on-backdrop="true" centered hide-footer :id='id'>
       <template #modal-header="{ close }">
         <h5 class="modal-title text-main">
           <b>{{title}}</b>
         </h5>
         
         <button type="button" aria-label="Close" class="close" @click="close();closeEmit()">×</button>
       </template>
   
        <slot name="content"></slot>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props:['id','title'],
    methods: {
      closeEmit(){
        this.$emit('close');
      },
      showModal() {
        console.log(this.title)
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    }
  }
</script>
