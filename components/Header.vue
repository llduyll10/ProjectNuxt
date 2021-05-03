<template>
  <div class="cover-header">
    <div class="container">
      <b-navbar toggleable="lg" >
        <b-navbar-brand href="#">
          <template>
            <img src="@/assets/img/black-logo.png" alt="Logo" class="logo" />
          </template>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" ref="btnToggle"></b-navbar-toggle>
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
                    <b-nav-item :key="index" class="sub-menu px-20px mt-10px">
                        <span class="f-13">{{item.name}}</span>
                    </b-nav-item>
                </template>
                <b-nav-item class="cover-btn">
                  <div class="btn-findjob ml-4" @click="hideMenu()">
                      <span class="f-13">Đăng Việc</span>
                  </div>
                </b-nav-item>
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
  methods:{
    hideMenu(){
    }
  }
};
</script>

