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
                        <span @click="$router.push('/'+item.link)" class="f-13">{{item.name}}</span>
                    </b-nav-item>
                </template>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
                <!-- IS LOGIN -->
                <template v-if="$store.state.isLogin">
                  <div class="isLogin mt-7px mb-7px">
                    <img class="mt-15px" src="@/assets/img/notify.png" />
                    <div class="group-infor">
                      <img class="mt-5px" src="@/assets/img/user-logo.png" />
                      <div class="group-right ml-13px">
                        <b-dropdown id="dropdown-infor" variant="link" toggle-class="text-decoration-none" class="custom-infor pb-5px" no-caret>
                          <template #button-content>
                            Long Bui  <i class="fas fa-caret-down ml-13px"></i>
                          </template>
                           <b-dropdown-text class="verify">
                            <span class="f-16">Long Bui</span>
                            <br>
                            <img src="@/assets/img/check.png" alt="">
                            <span class="f-13">Đã xác thực</span>
                          </b-dropdown-text>
                          <b-dropdown-text class="title pt-16px">
                             <span class="f-13">Tài khoản</span>
                          </b-dropdown-text>
                          <b-dropdown-item>Hồ sơ cá nhân </b-dropdown-item>
                          <b-dropdown-item>Hồ sơ làm việc</b-dropdown-item>
                          <b-dropdown-item>Xác thực thông tin</b-dropdown-item>
                          <b-dropdown-divider class="divider"></b-dropdown-divider>

                          <b-dropdown-text class="title">
                            <span class="f-13">Quản lý tài chính</span>
                          </b-dropdown-text>
                          <b-dropdown-item>Nạp thêm Token</b-dropdown-item>
                          <b-dropdown-item>Lịch sử giao dịch</b-dropdown-item>
                          <b-dropdown-item>Yêu cầu rút tiền</b-dropdown-item>
                          <b-dropdown-divider class="divider"></b-dropdown-divider>

                          <b-dropdown-item>Hỗ trợ</b-dropdown-item>
                          <b-dropdown-item class="mb-30px">Đăng xuất</b-dropdown-item>
                        </b-dropdown>
                        <div class="d-flex cover-infor">
                          <p class="f-13">ID. 123456</p>
                          <p class="f-13"><span>100</span> Tokens</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <!-- NOT LOGIN -->
                <template v-else>
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
                 </template>
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
                <div class="btn-register" @click="openModalLogin">
                    <span class="f-13">Đăng Nhập</span>
                </div>
                <div class="btn-register signin" @click="openModalLogin">
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
    <!--  -->
    <Modal ref="modalLogin" id="modal-custom-form-login">
      <template v-slot:content>
        <div class="modal-login">
          <div class="text-center w-100">
            <img src="@/assets/img/black-logo.png" style="height:52px" />
          </div>
          <form @submit.prevent="login" >
            <div class="form-group mb-3 mt-5">
              <label class="f-13"
                >Email hoặc Số điện thoại
                <span style="color:red">*</span></label
              >
              <input
                type="text"
                class="form-control"
                required
                placeholder="Nhập email hoặc số điện thoại của bạn"
                v-model="objLogin.name"
              />
            </div>
            <div class="w-100 text-center">
              <button type="submit" class="btn btn-theme theme-blue">Đăng nhập</button>
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
            <span @click="hideModalLogin(),openModalRegister()">Đăng ký ngay</span>
          </p>
        </div>
      </template>
    </Modal>
    <!-- Modal Register -->
    <Modal ref="modalRegister" id="modal-custom-form-login">
      <template v-slot:content>
        <div class="modal-login">
          <div class="w-100">
            <h5>TẠO TÀI KHOẢN</h5>
          </div>
          <form @submit.prevent="createUser">
            <div class="form-group">
              <label class="f-13" for="exampleInputEmail1"
                >Họ và tên
                <span style="color:red">*</span></label
              >
              <input
                type="text"
                class="form-control"
                required
                placeholder="Nhập họ tên của bạn"
                v-model="objUser.name"
              />
            </div>
            <div class="form-group">
              <label class="f-13"
                >Số điện thoại
                <span style="color:red">*</span></label
              >
              <input
                type="tel"
                class="form-control"
                required
                placeholder="Nhập số điện thoại của bạn"
                v-model="objUser.phone"
                pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
              />
            </div>
            <div class="form-group">
              <label class="f-13"
                >Email
                <span style="color:red">*</span></label
              >
              <input
                type="email"
                class="form-control"
                required
                placeholder="Nhập email của bạn"
                v-model="objUser.email"
              />
            </div>
            <div class="w-100 text-center">
              <button type="submit" class="btn btn-theme theme-blue">Đăng ký</button>
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
            Đã có tài khoản?
            <span @click="hideModalRegister(),openModalLogin()">Đăng nhập ngay</span>
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
        { name: "Thuê Nhà Thầu", link:'thue' },
        { name: "Tìm Dự Án" },
        { name: "Hướng Dẫn" },
      ],
      objBtn: [{ name: "Đăng Ký ",methods:this.openModalRegister }, { name: "Đăng Nhập ",methods:this.openModalLogin }],
      objUser:{},
      objLogin:{},
    };
  },

  created(){

  },
  mounted(){

  },
  methods:{
    createUser(){
      // console.log(this.objUser)
    },
    login(){
      // console.log(this.objLogin)
      return this.$get('search?q=apollo 11&page=1',{abc:'haha'});
    },
    showMenuMobile(){
      this.isShowMobile = true;
    },
    openModalLogin() {
      this.$refs.modalLogin.showModal();
    },
    hideModalLogin(){
      this.$refs.modalLogin.hideModal()
    },
    openModalRegister() {
      this.$refs.modalRegister.showModal();
    },
    hideModalRegister(){
      this.$refs.modalRegister.hideModal()
    }

  }
};
</script>

