<template>
  <div class="container">
    <button class="tn btn-danger" @click="openModal">Test bootstrap</button>
    <div class="container">
      <div class="row">
        <div class="col-md-6 content-left">

          <Modal ref="modal">
            <template v-slot:content >
              <p>Content modal</p>
            </template>
          </Modal>
        </div>
        <div class="col-md-6">
          Right
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  components:{
    Modal
  },
  methods:{
    openModal(){
      this.$refs.modal.showModal()
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/scss/main.scss";
.content-left {
  height: 100%;
}
</style>
