<template>
  <div id="homepage" class="container">
    <button class="tn btn-danger" @click="openModal">Test bootstrap</button>
    <div class="container">
      <div class="row">
        <div class="col-md-6 content-left">
          <Modal ref="modal">
            <template v-slot:content>
              <div class="modal-login">
                <div class="text-center w-100">
                  <img src="@/assets/img/black-logo.png"  style="height:52px"/>
                </div>
                <form>
                  <div class="form-group mb-3 mt-5">
                    <label class="f-13" for="exampleInputEmail1"
                      >Email hoặc Số điện thoại <span style="color:red">*</span></label
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
                </form>
                <div class="mt-4 w-100 option">
                  <hr />
                  <div
                    class="child w-100 text-center">
                    <span class="f-13">Hoặc</span>
                  </div>
                </div>
                <div class="w-100 text-center mt-4">
                  <button class="btn btn-theme theme-gg">
                    Đăng nhập với google
                    <img src="@/assets/img/gg.png" />
                  </button>
                </div>
                <div class="w-100 text-center mt-4">
                  <button class="btn btn-theme theme-fb">
                    Đăng nhập với facebook
                    <img src="@/assets/img/fb.png" style="width:28px" />
                  </button>
                </div>
                <p class="text-center w-100 mt-4 f-13">
                  Chưa có tài khoản?
                  <span>Đăng ký ngay</span>
                </p>
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
