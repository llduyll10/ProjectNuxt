<template>
  <div class="cover-header">
    <div class="container">
      <b-navbar toggleable="lg" >
        <b-navbar-brand href="#">
          <template>
            <img src="@/assets/img/black-logo.png" alt="Logo" class="logo" />
          </template>
        </b-navbar-brand>

        <b-navbar-toggle class="actionMenu" target='null' @click="showMenuMobile"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
               <template v-for="(item, index) in objMenu">
                    <b-nav-item :key="index" class="sub-menu px-36px">
                        <span class="f-13">{{item.name}}</span>
                    </b-nav-item>
                </template>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
                <template v-for="(item, index) in objBtn">
                    <b-nav-item :key="index" class="sub-menu px-20px mt-10px" @click="item.methods">
                        <span class="f-13" >{{item.name}}</span>
                    </b-nav-item>
                </template>
                <b-nav-item class="cover-btn">
                  <div class="btn-findjob ml-4" >
                      <span class="f-13">Đăng Việc</span>
                  </div>
                </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="mobileMenu" v-if="isShowMobile">
        <div class="menuItem">
          <div class="row">
            <div class="col-12 d-flex px-50px py-16px">
              <img src="@/assets/img/black-logo.png" alt="Logo" class="logo" />
              <div class="menuItemBar ml-auto">
                <div class="mt-10px" @click="isShowMobile=false">
                  <i class="fas fa-times"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="group-btn d-flex p-16px">
                <div class="btn-register">
                    <span class="f-13">Đăng Nhập</span>
                </div>
                <div class="btn-register signin">
                  <span class="f-13">Đăng Ký</span>
              </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <ul class="item-list">
                <template v-for="(item, idx) in objMenu">
                  <li :key="idx">
                    <span class="f-13">{{item.name}}</span>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
    </div>
    <Modal ref="modal" id="modal-custom-form-login">
      <template v-slot:content>
        <div class="modal-login">
          <div class="text-center w-100">
            <img src="@/assets/img/black-logo.png" style="height:52px" />
          </div>
          <form @submit="">
            <div class="form-group mb-3 mt-5">
              <label class="f-13" for="exampleInputEmail1"
                >Email hoặc Số điện thoại
                <span style="color:red">*</span></label
              >
              <input
                type="email"
                class="form-control"
                required
                placeholder="Nhập email hoặc số điện thoại của bạn"
              />
            </div>
            <div class="w-100 text-center">
              <button class="btn btn-theme theme-blue">Đăng nhập</button>
            </div>
          </form>
          <div class="mt-4 w-100 option">
            <hr />
            <div class="child w-100 text-center">
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

</template>
<script>
export default {
  data() {
    return {
      isShowMobile:false,
      objMenu: [
        { name: "Thuê Nhà Thầu" },
        { name: "Tìm Dự Án" },
        { name: "Hướng Dẫn" },
      ],
      objBtn: [{ name: "Đăng Ký ",methods:this.openModal }, { name: "Đăng Nhập ",methods:this.openModal }],
    };
  },
  methods:{
    showMenuMobile(){
      this.isShowMobile = true;
    },
    openModal() {
      this.$refs.modal.showModal();
    },
  }
};
</script>

