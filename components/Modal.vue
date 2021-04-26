<template>
  <div>
    <b-modal ref="my-modal" centered hide-footer title="">
        <slot name="content"></slot>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props:[],
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
<style  lang="scss">
.modal-header{
    border-bottom: 0 !important;
    padding-bottom: 0;
}
</style>
