<template>
  <div class="cover-header">

    <div class="container-fluid">
      <b-navbar toggleable="lg" class="p-0" >
        <b-navbar-brand :to="'/'">
          <template>
            <img src="@/assets/img/black-logo.png" alt="Logo" class="logo" />
          </template>
        </b-navbar-brand>




        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
               <template v-for="(item, index) in objMenu">
                    <b-nav-item :to="'/'+item.link" :key="index" class="sub-menu px-36px">
                        <span>{{item.name}}</span>
                    </b-nav-item>
                </template>
          </b-navbar-nav>

          <!-- Right aligned nav items -->

        </b-collapse>

        <b-navbar-toggle  v-if="!$auth.loggedIn" class="actionMenu ml-auto" target='null' @click="showMenuMobile"></b-navbar-toggle>

        <b-navbar-nav class="ml-auto">
                <!-- IS LOGIN -->
                <template v-if="$auth.loggedIn">
                  <div class="isLogin mt-7px mb-7px">
                    <img class="mt-15px" src="@/assets/svg/bell.svg" />
                    <div class="group-infor">
                      <template v-if="$auth.user.photo">
                        <img class="mt-5px border" :src="$auth.user.photo" />
                      </template>
                      <template v-else>
                        <div class="not-avatar">
                          <span>
                            {{$auth.user.name.slice(0,1).toUpperCase()}}
                          </span>
                        </div>
                      </template>
                      <div class="group-right ml-13px d-flex">
                        <b-dropdown id="dropdown-infor" variant="link" toggle-class="text-decoration-none" class="custom-infor pb-5px" no-caret>
                          <template #button-content>
                            <div class="d-flex mt-10px">
                              <span class="text-black">
                              {{$auth.user.name}}
                              </span>
                              <div class="height"></div>
                              <div class="cover-infor">
                                <p class="f-12">
                                  <span class="text-main">{{$auth.user.coin || 0}}</span>
                                  <span class="text-black">Tokens</span>
                                  <i class="fas fa-caret-down ml-5px f-16 text-black"></i>
                                </p>
                              </div>
                            </div>
                          </template>
                           <b-dropdown-text class="verify">
                            <span class="f-16">{{$auth.user.name}}</span>
                            <br>
                            <template v-if="$auth.user.isVerified" >
                              <img src="@/assets/img/check.png" alt="">
                              <span class="f-13">Đã xác thực</span>
                            </template>
                            <template v-else>
                              <i class="fas fa-times text-danger f-12"></i>
                              <span class="f-13 text-danger">Chưa xác thực</span>
                            </template>
                          </b-dropdown-text>
                          <b-dropdown-text class="title pt-16px">
                             <span class="f-13">Tài khoản</span>
                          </b-dropdown-text>
                          <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=1'" class="f-12">Hồ sơ cá nhân </b-dropdown-item>
                          <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=2'" class="f-12">Hồ sơ làm việc</b-dropdown-item>
                          <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=4'" class="f-12">Xác thực thông tin</b-dropdown-item>
                          <b-dropdown-divider class="divider"></b-dropdown-divider>

                          <b-dropdown-text class="title">
                            <span class="f-13">Quản lý tài chính</span>
                          </b-dropdown-text>
                          <b-dropdown-item :to="'/member/quan-ly-tai-chinh?tab=1'" class="f-12">Nạp thêm Token</b-dropdown-item>
                          <b-dropdown-item :to="'/member/quan-ly-tai-chinh?tab=2'" class="f-12">Lịch sử giao dịch</b-dropdown-item>
                          <!-- <b-dropdown-item class="f-12">Yêu cầu rút tiền</b-dropdown-item> -->
                          <b-dropdown-divider class="divider"></b-dropdown-divider>

                          <b-dropdown-item class="f-12">Hỗ trợ</b-dropdown-item>
                          <b-dropdown-item class="mb-30px f-12" @click="logout()">Đăng xuất</b-dropdown-item>
                        </b-dropdown>

                      </div>
                    </div>


                  </div>



                </template>
                <!-- NOT LOGIN -->
                <template v-else>
                  <template v-for="(item, index) in objBtn">
                      <b-nav-item :key="index" class="sub-menu menu-right px-20px mt-10px d-none d-lg-block" @click="item.methods">
                          <span class="f-12" >{{item.name}}</span>
                      </b-nav-item>
                  </template>
                  <b-nav-item class="cover-btn d-none d-lg-block" @click="openModalLogin">
                    <div  class="btn-findjob" >
                         <span class="f-12 fw-500">Đăng Việc</span>
                    </div>
                  </b-nav-item>
                 </template>
        </b-navbar-nav>

        <b-navbar-toggle  v-if="$auth.loggedIn" class="actionMenu ml-auto" target='null' @click="showMenuMobile"></b-navbar-toggle>



      </b-navbar>
    </div>
    <!-- Subnavbar if login -->
    <div v-if="$auth.loggedIn" class="navbar-login">
      <div class="container-fluid">
        <div class="cover-navbar-login">
          <p class="f-12 mr-30px fw-500">
          <b-link :to="'/member/quan-ly-du-an?tab=1'" class="text-white">
            <img src="@/assets/img/my-project.png" alt="">
            Dự Án Của Tôi
          </b-link>
          </p>
          <p class="f-12 mr-30px fw-500">
            <b-link :to="'/member/quan-ly-tin-nhan'" class="text-white">
              <img class="icon-email" src="@/assets/img/email.png" alt="">
              Hộp Thư <span>(1)</span>
            </b-link>
          </p>
          <b-link class="btn-findjob" :to="'/member/dang-viec'">
            <span class="f-12 fw-500">Đăng Việc</span>
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
          <div class="row" v-if="!$auth.loggedIn">
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
            <h5 class="fw-600">XÁC NHẬN</h5>
            <p class="f-13 ">
              Chúng tôi đã gửi cho bạn qua <span class="typeOtp">{{confirmObj.username}}</span>  với mã xác minh OTP. Vui lòng kiểm tra {{confirmObj.isPhone?'số điện thoại':'email'}} và nhập mã xác nhận
            </p>
            <div class="mb-25px">
              <input v-on:keyup="nextCode($event)" @keypress="isNumber($event)" v-model="codeObj.code1" type="text" class="form-control verifyOTP" required maxlength="1">
              <input v-on:keyup="nextCode($event)" @keypress="isNumber($event)" v-model="codeObj.code2" type="text" class="form-control verifyOTP" required maxlength="1">
              <input v-on:keyup="nextCode($event)" @keypress="isNumber($event)" v-model="codeObj.code3" type="text" class="form-control verifyOTP" required maxlength="1">
              <input v-model="codeObj.code4" @keypress="isNumber($event)" type="text" class="form-control verifyOTP" required maxlength="1">
              <div class="w-100 text-center mt-16px">
                <button @click="login" class="btn btn-theme theme-blue">XÁC NHẬN</button>
              </div>
            </div>
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
            <div class="form-group">
              <label class="f-13"
                >Tài khoản đăng ký
                <span style="color:red">*</span></label
              >
               <treeselect
                    class=""
                    :options="optionsType"
                    :value="objUser.accountType"
                    v-model="objUser.accountType"
                    :clearable=false
                    placeholder="Loại tài khoản"
                    required
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
      confirmObj: null,
      isShowMobile:false,
      optionsType:this.getTypeAccountSignup(),
      objMenu: [
        { name: "Thuê Nhà Thầu", link:'thue-nha-thau' },
        { name: "Tìm Dự Án", link:'tim-du-an'},
        { name: "Hướng Dẫn" },
      ],
      objBtn: [{ name: "Đăng Ký ",methods:this.openModalRegister }, { name: "Đăng Nhập ",methods:this.openModalLogin }],
      objUser:{},
      objLogin:{},
      codeObj:{},
    };
  },
  created(){

  },
  mounted(){

  },
  methods:{
    nextCode(evt){
      const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const keyPressed = evt.key;
      if (!keysAllowed.includes(keyPressed)){
        return
      }
      evt.target.nextElementSibling.focus()
    },
    logout(){
      this.$auth.logout();
    },
    async createUser(){
      try{
        let res =  await this.$post('signup', this.objUser)
        if(res.data.status === true){
          this.hideModalRegister()
          this.openModalLogin()
        }
      }
      catch(err){
        console.log(err)
      }
    },
    resetLogin(){
      this.error = null;
      this.confirmObj = null;
      this.codeObj = {}
    },
    async loginPre(){
      this.resetLogin();
      this.loader()
      try {
        let res = await this.$post('auth/login/pre',this.objLogin);
        if(res.data.status){
           this.confirmObj = res.data.data;
        }else{
            this.error = res.data.msg;
        }
        this.loader(0)
      } catch (err) {
        console.log(err)
        this.loader(0)
      }
    },
    getCodeObj(){
       var code = '';
       var object = this.codeObj;
        for (const key in object) {
          if (Object.hasOwnProperty.call(object, key)) {
            code = code + object[key]+'';
          }
        }
        return code;
    },
    async login(){
      var data = {
         loginCode : this.getCodeObj(),
         username : this.confirmObj.username
      }

      this.loader()
      try {
        let response = await this.$auth.loginWith('local', { data: data})
        var data = response.data;
        if(data.status){
          this.$auth.setUser(data.user);
          this.$auth.setUserToken(data.token, data.token);
          this.hideModalLogin()
        }else{

        }
        this.loader(0)
      } catch (err) {
        console.log(err)
         this.loader(0)
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

