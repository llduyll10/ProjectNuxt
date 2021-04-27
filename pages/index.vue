<template>
  <div id="homepage">
    <Header />
    <!-- Start Banner -->
    <div class="banner"></div>
    <!-- End Banner -->
    <!-- Start Categories  -->
    <div class="category pt-40px">
      <div class="category-title mb-40px">
        <p class="f-24">HẠNG MỤC DỰ ÁN</p>
        <div class="line"></div>
      </div>
      <div class="container caterogry-list">
        <div class="row">
          <div class="col-md-4 col-sm-12 cat-item">
              <div class="content item-1">
                <div class="item-detail d-flex">
                  <img src="@/assets/img/icon-house.png" style="margin-bottom:3px" />
                  <p>
                   THI CÔNG XÂY DỰNG
                  </p>
                </div>
              </div>
          </div>
          <div class="col-md-4 col-sm-12 cat-item">
             <div class="content item-2">
              <div class="item-detail d-flex">
                <img src="@/assets/img/icon-decoration.png" />
                <p>
                  TRANG TRÍ NỘI THẤT
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 cat-item">
            <div class="content item-3">
              <div class="item-detail d-flex">
                <img src="@/assets/img/icon-pen.png" />
                <p>
                  THIẾT KẾ 2D/3D
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Start Categories  -->
    <div class="describe pt-40px mt-40px">
      <div class="content-describe container">
        <div class="row">
          <!-- Describe LEFT -->
          <div class="col-md-6 col-sm-12 describe-left">
            <p class="slogan">
              <span>Kết nối</span> bạn với nhà thầu <span>uy tín</span> và <span>chuyên nghiệp</span> nhất
            </p>
            <!-- Block 1 -->
            <div class="block-content">
              <div class="block-title d-flex">
                <img src="@/assets/img/icon-chart.png" />
                <p>Nhận ngay báo giá & hồ sơ từ nhiều đơn vị uy tín</p>
              </div>
              <div class="content">
                <p>
                  Chỉ cần bỏ ra <span> 5 phút</span> đăng yêu cầu dự án của bạn. Các nhà thầu của chúng tôi sẽ gửi ngay <span> hồ sơ năng lực, báo giá tạm tính </span> và <span> đề xuất giải pháp </span> ban đầu phù hợp cho công trình của bạn.
                </p>
              </div>
            </div>
            <!-- Block 2 -->
            <div class="block-content">
              <div class="block-title d-flex">
                <img src="@/assets/img/icon-chart.png" />
                <p>Nhận ngay báo giá & hồ sơ từ nhiều đơn vị uy tín</p>
              </div>
              <div class="content">
                <p>
                  Chỉ cần bỏ ra <span> 5 phút</span> đăng yêu cầu dự án của bạn. Các nhà thầu của chúng tôi sẽ gửi ngay <span> hồ sơ năng lực, báo giá tạm tính </span> và <span> đề xuất giải pháp </span> ban đầu phù hợp cho công trình của bạn.
                </p>
              </div>
            </div>
            <!-- Block 3 -->
            <div class="block-content">
              <div class="block-title d-flex">
                <img src="@/assets/img/icon-chart.png" />
                <p>Nhận ngay báo giá & hồ sơ từ nhiều đơn vị uy tín</p>
              </div>
              <div class="content">
                <p>
                  Chỉ cần bỏ ra <span> 5 phút</span> đăng yêu cầu dự án của bạn. Các nhà thầu của chúng tôi sẽ gửi ngay <span> hồ sơ năng lực, báo giá tạm tính </span> và <span> đề xuất giải pháp </span> ban đầu phù hợp cho công trình của bạn.
                </p>
              </div>
            </div>
            <!-- Block 4 -->
            <div class="block-content">
              <div class="block-title d-flex">
                <img src="@/assets/img/icon-chart.png" />
                <p>Nhận ngay báo giá & hồ sơ từ nhiều đơn vị uy tín</p>
              </div>
              <div class="content">
                <p>
                  Chỉ cần bỏ ra <span> 5 phút</span> đăng yêu cầu dự án của bạn. Các nhà thầu của chúng tôi sẽ gửi ngay <span> hồ sơ năng lực, báo giá tạm tính </span> và <span> đề xuất giải pháp </span> ban đầu phù hợp cho công trình của bạn.
                </p>
              </div>
            </div>
            <!-- Btn  -->
            <div class="btn-registration mt-4 mb-2">
              <span>ĐĂNG DỰ ÁN NGAY</span>
            </div>
          </div>
          <!-- Describe RIGHT -->
          <div class="col-md-6 col-sm-12 describe-right">
            <div class="row">
              <div class="col-12 mb-5">
                <img src="@/assets/img/describe-1.png" />
              </div>
              <div class="col-12">
                 <img src="@/assets/img/describe-2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal ref="modal">
      <template v-slot:content>
        <div class="modal-login">
          <div class="text-center w-100">
            <img src="@/assets/img/black-logo.png" style="height:52px" />
          </div>
          <form>
            <div class="form-group mb-3 mt-5">
              <label class="f-13" for="exampleInputEmail1"
                >Email hoặc Số điện thoại
                <span style="color:red">*</span></label
              >
              <input
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
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
import Header from '@/components/Header';
import Modal from "@/components/Modal";
export default {
  watch: {
    "$route.query": "$fetch",
  },
  async asyncData(context) {},
  async fetch() {
    console.log("haha fetch", this.$store);
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 10000) {
      this.$fetch();
    }
  },
  components: {
    Modal,
    Header
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
