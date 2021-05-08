<template>
    <Modal ref="modalLien">
      <template v-slot:content>
        <div class="modal-login">
           nkjksjkss
        </div>
      </template>
    </Modal>
</template>

<script>
export default {
    methods:{
        show() {
            this.$refs.modalLien.showModal();
        },
        hide(){
            this.$refs.modalLien.hideModal()
        },
    }
}
</script>