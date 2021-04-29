<template>
  <div id="homepage">
    <Header />
    <!-- Start Banner -->
    <div class="banner"></div>
    <!-- End Banner -->
    <!-- Start Categories  -->
    <section class="category pt-40px ">
      <div class="category-title mb-40px">
        <p class="f-24">HẠNG MỤC DỰ ÁN</p>
        <div class="line"></div>
      </div>
      <div class="container caterogry-list">
        <div class="row">
          <div class="col-md-4 col-sm-12 cat-item">
            <div class="content item-1">
              <div class="item-detail d-flex">
                <img
                  src="@/assets/img/icon-house.png"
                  style="margin-bottom:3px"
                />
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
    </section>
    <!-- Start Categories  -->
    <section class="describe pt-50px pb-50px mt-40px">
      <div class="content-describe container">
        <div class="row">
          <div class="col-md-5 col-sm-12 describe-left pr-0">
            <p class="slogan">
              <span>Kết nối</span> bạn với nhà thầu <span>uy tín</span> và
              <span>chuyên nghiệp</span> nhất
            </p>
            <!-- Block 1 -->
            <div class="block-content mt-40px">
              <div class="block-title d-flex">
                <img src="@/assets/img/icon-people.png" />
                <p>Nhận ngay báo giá & hồ sơ từ nhiều đơn vị uy tín</p>
              </div>
              <div class="content mt-15px">
                <p>
                  Chỉ cần bỏ ra <span> 5 phút</span> đăng yêu cầu dự án của bạn.
                  Các nhà thầu của chúng tôi sẽ gửi ngay
                  <span> hồ sơ năng lực, báo giá tạm tính </span> và
                  <span> đề xuất giải pháp </span> ban đầu phù hợp cho công
                  trình của bạn.
                </p>
              </div>
            </div>
            <!-- Block 2 -->
            <div class="block-content mt-40px">
              <div class="block-title d-flex">
                <img src="@/assets/img/icon-labyrinth.png" />
                <p>Giá cả cạnh tranh & giải pháp tối ưu</p>
              </div>
              <div class="content mt-15px">
                <p>
                  Các đơn vị cùng <span> cạnh tranh báo giá </span> và đề xuất
                  nhiều giải pháp khác nhau, giúp bạn
                  <span> tiết kiệm vài chục </span> đến
                  <span> vài trăm triệu đồng.</span>
                </p>
              </div>
            </div>
            <!-- Block 3 -->
            <div class="block-content mt-40px">
              <div class="block-title d-flex">
                <img src="@/assets/img/icon-chart.png" />
                <p>Đánh giá năng lực & tương tác trực tiếp</p>
              </div>
              <div class="content mt-15px">
                <p>
                  Năng lực của nhà thầu được<span> đánh giá minh bạch</span> từ
                  chủ đầu tư các dự án trước. Ngoài ra, bạn sẽ được chọn<span>
                    tương tác trực tiếp </span
                  >với <span>2-3</span> đơn vị & nhận báo giá chính xác nhất
                  trước khi đưa ra quyết định cuối cùng.
                </p>
              </div>
            </div>
            <!-- Block 4 -->
            <div class="block-content mt-40px">
              <div class="block-title d-flex">
                <img src="@/assets/img/icon-contract.png" />
                <p>Chúng tôi hỗ trợ xuyên suốt dự án</p>
              </div>
              <div class="content mt-15px">
                <p>
                  <span>Ký hợp đồng</span> và <span>thanh toán</span> cho nhà
                  thầu trực tiếp qua hệ thống của Econs.
                  <span>Theo dõi tiến độ</span> và nhận
                  <span>báo cáo thi công</span> hằng ngày.
                </p>
              </div>
            </div>
            <!-- btn register -->
            <div class="btn-registration mt-30px mb-2">
              <span>ĐĂNG DỰ ÁN NGAY</span>
            </div>
          </div>
          <div class="col-md-7 col-sm-12 describe-right">
            <div class="row">
              <div class="col-12 mb-50px">
                <img class="pl-15px" src="@/assets/img/describe-1.png" />
              </div>
              <div class="col-12">
                <img class="pl-15px" src="@/assets/img/describe-2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Categories -->
    <!-- Start Special Prodcut-->
    <section id="special-product" class="mt-40px pb-50px">
      <div class="container">
        <div class="row">
          <div class="col-12 title mb-40px">
            <p class="f-24">DỰ ÁN NỔI BẬT</p>
            <div class="line"></div>
          </div>
        </div>
        <div class="row list-item">
          <div class="col-md-4 card-item">
            <div class="item">
              <!-- Content 1 -->
              <div class="show-img">
                <div class="type-product">
                  <span>
                    XÂY DỰNG
                  </span>
                </div>
                <div class="location">
                  <img src="@/assets/img/icon-area.png" />
                  <span>
                    Quận 7, TP. Hồ Chí Minh
                  </span>
                </div>
              </div>
              <!-- Content 2 -->
              <div class="item-infor">
                <p class="mb-0 f-14">
                  Tìm nhà thầu XD thi công cặp nhà phố 3 tầng (5x16m/lô)
                </p>
                <div class="d-flex group-infor">
                  <div class="left">
                    <img src="@/assets/img/icon-human.png" />
                    <span>Bùi Kim Long </span>
                  </div>
                  <div class="right">
                    <span> Ngân sách</span> - <span>3 Tỷ</span>
                  </div>
                </div>
              </div>
              <!-- Content 3 -->
              <div class="audiance d-flex">
                <p>01/04/2021</p>
                <p>
                  <span>4</span>
                  Chào Giá
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 card-item">
            <div class="item">
              <!-- Content 1 -->
              <div class="show-img">
                <div class="type-product">
                  <span>
                    XÂY DỰNG
                  </span>
                </div>
                <div class="location">
                  <img src="@/assets/img/icon-area.png" />
                  <span>
                    Quận 7, TP. Hồ Chí Minh
                  </span>
                </div>
              </div>
              <!-- Content 2 -->
              <div class="item-infor">
                <p class="mb-0 f-14">
                  Tìm nhà thầu XD thi công cặp nhà phố 3 tầng (5x16m/lô)
                </p>
                <div class="d-flex group-infor">
                  <div class="left">
                    <img src="@/assets/img/icon-human.png" />
                    <span>Bùi Kim Long </span>
                  </div>
                  <div class="right">
                    <span> Ngân sách</span> - <span>3 Tỷ</span>
                  </div>
                </div>
              </div>
              <!-- Content 3 -->
              <div class="audiance d-flex">
                <p>01/04/2021</p>
                <p>
                  <span>4</span>
                  Chào Giá
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 card-item">
            <div class="item">
              <!-- Content 1 -->
              <div class="show-img">
                <div class="type-product">
                  <span>
                    XÂY DỰNG
                  </span>
                </div>
                <div class="location">
                  <img src="@/assets/img/icon-area.png" />
                  <span>
                    Quận 7, TP. Hồ Chí Minh
                  </span>
                </div>
              </div>
              <!-- Content 2 -->
              <div class="item-infor">
                <p class="mb-0 f-14">
                  Tìm nhà thầu XD thi công cặp nhà phố 3 tầng (5x16m/lô)
                </p>
                <div class="d-flex group-infor">
                  <div class="left">
                    <img src="@/assets/img/icon-human.png" />
                    <span>Bùi Kim Long </span>
                  </div>
                  <div class="right">
                    <span> Ngân sách</span> - <span>3 Tỷ</span>
                  </div>
                </div>
              </div>
              <!-- Content 3 -->
              <div class="audiance d-flex">
                <p>01/04/2021</p>
                <p>
                  <span>4</span>
                  Chào Giá
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="mb-0 text-right mt-36px f-13 seemore">
              Xem thêm dự án
              <img class="ml-5px" src="@/assets/img/icon-right.png">
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Special Prodcut-->
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
    <Block1 />
    <Block2 />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";
import Block1 from "@/components/Block1";
import Block2 from "@/components/Block2";

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
    Header,
    Block1,
    Block2,
    Footer,
  },
  methods: {
    openModal() {
      this.$refs.modal.showModal();
    },
  },
};
</script>
<style lang="scss">
.content-left {
  height: 100%;
}
</style>
