<template>
  <div>
    <b-modal ref="my-modal" :no-close-on-backdrop="true" centered hide-footer title="" :id='id'>
        <slot name="content"></slot>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props:['id'],
    methods: {
      showModal() {
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
