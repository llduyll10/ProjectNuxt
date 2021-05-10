<template>
  <div class="cover-header">

    <div class="container-fluid">
      <b-navbar toggleable="lg" class="px-0" >
        <b-navbar-brand :to="'/'">
          <template>
            <img src="@/assets/img/black-logo.png" alt="Logo" class="logo" />
          </template>
        </b-navbar-brand>




        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
               <template v-for="(item, index) in objMenu">
                    <b-nav-item :to="'/'+item.link" :key="index" class="sub-menu px-36px">
                        <span  class="f-13">{{item.name}}</span>
                    </b-nav-item>
                </template>
          </b-navbar-nav>

          <!-- Right aligned nav items -->

        </b-collapse>

        <b-navbar-toggle class="actionMenu" target='null' @click="showMenuMobile"></b-navbar-toggle>

        <b-navbar-nav class="ml-auto">
                <!-- IS LOGIN -->
                <template v-if="isLogin">
                  <div class="isLogin mt-7px mb-7px">
                    <img class="mt-15px" src="@/assets/svg/bell.svg" />
                    <div class="group-infor">
                      <img class="mt-5px" src="@/assets/img/user-logo.png" />
                      <div class="group-right ml-13px">
                        <b-dropdown id="dropdown-infor" variant="link" toggle-class="text-decoration-none" class="custom-infor pb-5px" no-caret>
                          <template #button-content>
                            Long Bui  <i class="fas fa-caret-down ml-13px f-16"></i>
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
                          <b-dropdown-item class="f-12">Hồ sơ cá nhân </b-dropdown-item>
                          <b-dropdown-item class="f-12">Hồ sơ làm việc</b-dropdown-item>
                          <b-dropdown-item class="f-12">Xác thực thông tin</b-dropdown-item>
                          <b-dropdown-divider class="divider"></b-dropdown-divider>

                          <b-dropdown-text class="title">
                            <span class="f-13">Quản lý tài chính</span>
                          </b-dropdown-text>
                          <b-dropdown-item class="f-12">Nạp thêm Token</b-dropdown-item>
                          <b-dropdown-item class="f-12">Lịch sử giao dịch</b-dropdown-item>
                          <b-dropdown-item class="f-12">Yêu cầu rút tiền</b-dropdown-item>
                          <b-dropdown-divider class="divider"></b-dropdown-divider>

                          <b-dropdown-item class="f-12">Hỗ trợ</b-dropdown-item>
                          <b-dropdown-item class="mb-30px f-12">Đăng xuất</b-dropdown-item>
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
                  <b-nav-item class="cover-btn" :to="'/member/dang-viec'">
                    <div  class="btn-findjob ml-4" >
                         <span class="f-13">Đăng Việc</span>
                    </div>
                  </b-nav-item>
                 </template>
        </b-navbar-nav>


      </b-navbar>
    </div>
    <!-- Subnavbar if login -->
    <div v-if="isLogin" class="navbar-login">
      <div class="container-fluid">
        <div class="cover-navbar-login  pt-13px pb-13px">
          <p class="f-13 mr-30px">
            <img src="@/assets/img/my-project.png" alt="">
            Dự Án Của Tôi
          </p>
          <p class="f-13 mr-30px">
            <img class="icon-email" src="@/assets/img/email.png" alt="">
            Hộp Thư <span>(1)</span>
          </p>
          <b-link class="btn-findjob" :to="'/member/dang-viec'">
            <span class="f-13 font-weight-bold">Đăng Việc</span>
          </b-link>
        </div>
      </div>
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
    <!-- Modal Login -->
    <Modal ref="modalLogin" id="modal-custom-form-login">
      <template v-slot:content>
        <!-- Confirm OTP -->
         <div class="modal-login text-center" v-if="confirmObj">
          <div class="wrapperPhoneOTP">
            <h5 class="font-weight-bold">XÁC NHẬN</h5>
            <p class="f-13 ">
              Chúng tôi đã gửi cho bạn qua <span class="typeOtp">{{confirmObj.username}}</span>  với mã xác minh OTP. Vui lòng kiểm tra {{confirmObj.isPhone?'số điện thoại':'email'}} và nhập mã xác nhận
            </p>
            <form action="" class="mb-25px">
              <input type="text" class="form-control verifyOTP" required>
              <input type="text" class="form-control verifyOTP" required>
              <input type="text" class="form-control verifyOTP" required>
              <input type="text" class="form-control verifyOTP" required>
              <div class="w-100 text-center mt-16px">
                <button type="submit" class="btn btn-theme theme-blue">XÁC NHẬN</button>
              </div>
            </form>
            <a class="anotherAccount" @click="resetLogin" >Đăng nhập bằng tài khoản khác</a>
          </div>
         </div>
        <!-- End confirm OTP -->
        <div class="modal-login" v-else>
          <div class="text-center w-100">
            <img src="@/assets/img/black-logo.png" style="height:52px" />
          </div>
          <form @submit.prevent="loginPre" >
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
                v-model="objLogin.username"
              />
            </div>
            <div class="w-100 text-center">
              <button type="submit" class="btn btn-theme theme-blue">Đăng nhập</button>
            </div>
            <small class="text-danger" v-if="error">{{error}}</small>
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
      error:null,
      confirmObj: {username:'009028121',isPhone:true},
      isShowMobile:false,
      objMenu: [
        { name: "Thuê Nhà Thầu", link:'thue' },
        { name: "Tìm Dự Án", link:'du-an'},
        { name: "Hướng Dẫn" },
      ],
      objBtn: [{ name: "Đăng Ký ",methods:this.openModalRegister }, { name: "Đăng Nhập ",methods:this.openModalLogin }],
      objUser:{},
      objLogin:{},
      isLogin:this.$store.state.isLogin
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
    resetLogin(){
      this.error = null;
      this.confirmObj = null;
    },
    async loginPre(){
      this.resetLogin();
      try {
        let res = await this.$post('/auth/login/pre',this.objLogin);
        if(res.data.status){
           this.confirmObj = res.data.data;
        }else{
            this.error = res.data.msg;
        }
      } catch (err) {
        console.log(err)
      }
    },
    async login(){
      var data = {
         loginCode : this.confirmObj.loginCode,
         username : this.confirmObj.username
      }
      try {
        let response = await this.$auth.loginWith('local', { data: data})
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    showMenuMobile(){
      this.isShowMobile = true;
    },
    openModalLogin() {
      this.$refs.modalLogin.showModal();
    },
    hideModalLogin(){
      this.resetLogin();
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

