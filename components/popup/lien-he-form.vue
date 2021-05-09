<template>
    <Modal ref="modalLienForm" id="modal-cotact-form-submit">
      <template v-slot:content>
        <div class="modal-contact formCore">
          lam cai form o day
        </div>
      </template>
    </Modal>
</template>

<script>
export default {
    methods:{
        show() {
            this.$refs.modalLienForm.showModal();
        },
        hide(){
            this.$refs.modalLienForm.hideModal()
        },
    }
}
</script>