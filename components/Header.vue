<template>
  <div class="cover-header">
    <div class="container">
      <b-navbar toggleable="lg" >
        <b-navbar-brand href="#">
          <template>
            <img src="@/assets/img/black-logo.png" alt="Logo" class="logo" />
          </template>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
                    <b-nav-item :key="index" class="sub-menu px-20px">
                        <span class="f-13">{{item.name}}</span>
                    </b-nav-item>
                </template>
                <div class="btn-findjob ml-4">
                    <span class="f-13">Đăng Việc</span>
                </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      objMenu: [
        { name: "Thuê Nhà Thầu" },
        { name: "Tìm Dự Án" },
        { name: "Hướng Dẫn" },
      ],
      objBtn: [{ name: "Đăng Ký " }, { name: "Đăng Nhập " }],
    };
  },
};
</script>
<style scoped lang="scss">
.cover-header {
  .logo{
      height: 42px;
  }
  .sub-menu{
    cursor: pointer;
    height: 25px;
    border-right: 1px solid rgba(130, 130, 130, 0.5);
    &:last-child {
        border-right: 0;
    }
    span {
        font-weight: bold;
        line-height: 17px;
        color: rgba(0, 0, 0, 0.84);
    }
    a{
        padding: 0;
    }
  }
  .btn-findjob {
    cursor: pointer;
    width: 100px;
    height: 30px;
    padding: 2px 15px 0 16px;
    text-align: center;
    background: #198ac6;
    color: #f2f2f2;
    border-radius: 5px;
    outline: none;
  }
}




// LG
@media screen and (min-width:1200px) {

}
//lg -> xl
@media screen and (min-width:992px) and (max-width:1199px){
  .cover-header{
    .sub-menu{
      border-right: none;
      padding: 0 10px !important;
    }
    .btn-findjob{
      margin-left: 0 !important;
    }
  }

}
// md -> lg
@media screen and (min-width:768px) and (max-width:991px) {
  .cover-header{
    .sub-menu{
      padding: 0 !important;
      border-right: none;
      padding: 0 !important;
    }
    .btn-findjob{
      margin-left: 0 !important;
    }
  }

}
// sm -> md
@media screen and (min-width:576px) and (max-width:767px) {
  .cover-header{
    .sub-menu{
      padding: 0 !important;
      border-right: none;
      padding: 0 !important;
    }
    .btn-findjob{
      margin-left: 0 !important;
    }
  }

}
@media screen and (max-width:575px)  {
  .cover-header{
    .sub-menu{
      padding: 0 !important;
      border-right: none;
      padding: 0 !important;
    }
    .btn-findjob{
      margin-left: 0 !important;
    }
  }

}


</style>
