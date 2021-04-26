<template>
  <div id="homepage" class="container">
    <button class="tn btn-danger" @click="openModal">Test bootstrap</button>
    <div class="container">
      <div class="row">
        <div class="col-md-6 content-left">
          <Modal ref="modal">
            <template v-slot:content>
              <div class="modal-login p-4">
                <form>
                  <div class="form-group mb-3 mt-5">
                    <label for="exampleInputEmail1"
                      >Email hoặc Số điện thoại <span>*</span></label
                    >
                    <input
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="w-100 text-center">
                    <button class="btn btn-theme theme-blue">Đăng nhập</button>
                  </div>
                   <div class="w-100 text-center mt-4">
                    <button class="btn btn-theme theme-blue">Đăng nhập với google</button>
                  </div>
                   <div class="w-100 text-center mt-4">
                    <button class="btn btn-theme theme-blue">Đăng nhập với facebook</button>
                  </div>
                </form>

              </div>
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
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
  },
  methods: {
    openModal() {
      this.$refs.modal.showModal();
    },
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/main.scss";
.content-left {
  height: 100%;
}
</style>
