<template>
  <div>
    <Header />
    <section id="chiTietDuAn" class="wrapSection pt-30px pb-80px">
      <div class="wrapBanner hosoWrap"></div>
      <div class="container-fluid">
        <div class="row noidungWrap">
          <div class="col-9">
            <!-- nội dung bài viết -->
            <div
              class="left inner-content-section px-36px pt-25px pb-50px mb-20px"
            >
              <h2 class="main-color f-20 font-weight-bold mb-15px">
                Tìm nhà thầu xây dựng nhà phố 5x20m tại Biên Hoà
              </h2>
              <span
                class="px-8px badge badge-primary main-bg-color py-2px text-12 custom-bage"
                >Thi công phần thô</span
              >
              <hr class="hr" />
              <div class="main-black text-13">
                <p class="text-16 font-weight-bold">Yêu cầu công việc</p>
                <p class="f-13 mb-0">
                Econs được thành lập và phát triển suốt 8 năm qua theo mô hình
                dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội
                thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô
                hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội
                thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô
                hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội
                thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô
                hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội
                thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô
                hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội
                thất...
                </p>
              </div>
              <hr class="hr" />
              <h3 class="font-bold text-16">Tài liệu đính kèm</h3>
              <div class="d-flex main-color mt-4 text-11">
                <div class="mr-3">
                  <span class="pr-1">
                    <img class="icon-red" src="@/assets/svg/icon-pdf-border.svg" />
                  </span>
                  Photo sổ nhà Gò Vấp
                </div>
                <div class="px-3">
                  <span class="pr-1">
                    <img src="@/assets/svg/icon-jpeg.svg" />
                  </span>
                  Ảnh tham khảo_01
                </div>
                <div class="px-3">
                  <span class="pr-1">
                    <img src="@/assets/svg/icon-jpeg.svg" />
                  </span>
                  Ảnh tham khảo_02
                </div>
              </div>
            </div>
            <!--  nội dung bài viết -->

            <!-- Form chào giá -->
            <div
              class="left inner-content-section px-36px pt-25px pb-50px mb-20px"
            >
              <h3 class="h5 main-black f-14 fw-700">
                Gửi chào giá cho dự án - Bạn sẽ tốn
                <span class="main-color">3 Tokens</span> khi tham gia chào giá
              </h3>
              <hr class="hr" />
              <div class="d-flex flex-wrap main-black">
                <div class="d-flex w-100 mb-25px">
                  <div class="col-md-3 col-12 text-13 font-weight-bold">
                    Chi phí ước tính <span class="red">*</span>
                  </div>
                  <div class="col-md-9 col-12 text-12">
                    <input type="text" class="form-control w-100" />
                    <p class="mb-0">
                      Phí hoa hồng nếu trúng thầu -
                      <span class="main-color font-weight-bold">500</span> <span class="font-weight-bold">Tokens</span>
                    </p>
                  </div>
                </div>
                <div class="d-flex w-100 mb-25px">
                  <div class="col-md-3 col-12 text-13 font-weight-bold">
                    Kinh nghiệm, Năng lực và giải pháp đề xuất<span class="red"
                      >*</span
                    >
                  </div>
                  <div class="col-md-9 col-12 text-12">
                    <textarea required id="customPlaceholder" class="form-control main-black" rows="5"
                                placeholder=
                                " 1. Mô tả kinh nghiệm & năng lực của bạn \n 2. Tại sao chủ đầu tư phải chọn bạn thi công công trình này? \n 3. Đề xuất giải pháp thi công của bạn sau khi xem xét yêu cầu của chủ đầu tư"
                            ></textarea>
                  </div>
                </div>
                <div class="d-flex w-100 mb-25px">
                  <div class="col-md-3 col-12 text-13 font-weight-bold">
                    Thời gian thi công dự trù<span class="red">*</span>
                  </div>
                  <div class="col-md-9 col-12 text-12">
                    <input
                      type="text"
                      class="form-control w-100"
                      placeholder="Ví dụ:  3 tháng"
                    />
                  </div>
                </div>
                <div class="d-flex w-100 mb-25px">
                  <div class="col-md-3 col-12 text-13 font-weight-bold">
                    Tài liệu đính kèm
                  </div>
                  <div class="col-md-9 col-12 text-12">
                    <button
                      class="btn btn-primary main-bg-color radius-5 py-5px px-16px text-11"
                    >
                      <img src="@/assets/svg/icon-upload.svg" />
                      <span>Thêm tài liệu</span>
                    </button>

                    <span class="main-color ml-1"
                      >png, jpg, tiff, pdf, xls, doc, ppt, zip, rar</span
                    >
                  </div>
                </div>
                <div class="d-flex w-100 mb-25px">
                  <div class="col-12 text-12 d-flex align-items-center">
                    <img src="@/assets/svg/icon-radio.svg" />
                    <span class="ml-2">
                      Tôi đồng ý với
                      <span class="main-color">điều khoản</span> của Econs
                      <span class="red">*</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-25px justify-content-xl-around">
                <button
                  class="btn btn-primary main-bg-color radius-5 w-100  text-16 ml-15px mr-15px"
                >
                  GỬI CHÀO GIÁ NGAY
                </button>
                <button
                  class="btn btn-primary main-bg-color radius-5 w-100  btn-brown text-16 ml-15px mr-15px"
                >
                  LƯU BẢN NHÁP
                </button>
              </div>
            </div>
            <!--  Form chào giá -->

            <!--Danh sách chào giá -->
            <div
              class="left inner-content-section px-36px pt-25px pb-50px mb-20px"
            >
              <h3 class="h5 main-black f-16 font-weight-bold">
                Gửi chào giá cho dự án - Bạn sẽ tốn
                <span class="main-color">3 Tokens</span> khi tham gia chào giá
              </h3>
              <hr class="hr" />
              <template v-for="id in 3">
                <div class="d-flex flex-wrap " :key="id">
                  <div class="col-12 d-flex pb-20px  px-0 justify-content-between">
                    <div class="col-7 d-flex align-items-center">
                      <div>
                        <img src="@/assets/img/logo-econs-black.png" />
                      </div>
                      <div class="ml-1 ml-16px">
                        <p class="mb-0 f-14 font-weight-bold main-black">Công ty cổ phần Econs</p>
                        <div class="d-inline-flex main-black py-11px">
                          <div
                            class="badge badge-warning d-inline-flex align-items-center text-white py-3px text-10 mr-1"
                          >
                            5.0
                          </div>
                          <template v-for="(item, idx) in 4">
                            <div :key="idx">
                              <i
                                class="fas fa-star mr-1px f-13 main-yellow"
                              ></i>
                            </div>
                          </template>
                          <span class="evaluate f-12 mb-0 mt-5px ml-4px">
                            (<span class="main-yellow">4</span> đánh giá)
                          </span>
                        </div>
                        <div class="text-11 color-grey">
                          <span
                            >Chi phí ước tính -
                            <span class="font-weight-bold main-color text-13"
                              >1 Tỷ</span
                            >
                          </span>
                          <span class="px-11px"> | </span>
                          <span
                            >Thời gian thi công -
                            <span class="font-weight-bold main-color text-13"
                              >90 ngày</span
                            ></span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <img src="@/assets/svg/icon-location.svg" />
                      <span class="main-color text-11">Hồ Chí Minh</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="main-black text-13">
                      Econs được thành lập và phát triển suốt 8 năm qua theo mô
                      hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn
                      thiện nội thất... <span class="main-color">Xem thêm</span>
                    </div>
                  </div>
                </div>
                <hr class="hr" :key="id" />
              </template>
            </div>
            <!--  Danh sách chào giá -->
          </div>
          <!--  Col Left -->

          <!--Col right -->
          <div class="col-3 right">
            <!-- Thông tin dự án -->
            <div
              class="left inner-content-section p-25px mb-20px thongTinDuAnWrapper main-black"
            >
              <h3 class="text-16 main-black mb-2">
                Thông tin dự án
              </h3>
              <hr class="hr my-15px" />
              <div class="box d-flex pb-12px">
                <div class="text-12 col-6 px-0 color-grey">
                  ID dự án
                </div>
                <div class="text-13 main-color col-6 px-0 font-weight-bold">
                  123456
                </div>
              </div>
              <div class="box d-flex pb-12px pt-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Ngân sách
                </div>
                <div class="text-13 col-6 px-0 ">
                  Thương lượng
                </div>
              </div>
              <div class="box d-flex pb-12px pt-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Ngày đăng
                </div>
                <div class="text-13 col-6 px-0 ">
                  01/04/2021
                </div>
              </div>
              <div class="box d-flex pb-12px pt-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Hạn chót chào giá
                </div>
                <div class="text-13 main-color px-0 font-weight-bold">
                  15 ngày
                </div>
              </div>
              <div class="box d-flex pb-12px pt-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Địa điểm
                </div>
                <div class="text-13 px-0 ">
                  Biên Hoà, Đồng Nai
                </div>
              </div>
              <div class="box d-flex pb-12px pt-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Phí chào giá
                </div>
                <div class="text-13 main-color px-0 font-weight-bold">
                  3 Tokens
                </div>
              </div>
            </div>
            <!-- Thông tin dự án -->

            <!-- Thông tin khách hàng -->
            <div
              class="left inner-content-section px-24px pt-25px pb-50px mb-20px thongTinDuAnWrapper main-black"
            >
              <!-- Hard some css display none for re-using profile component -->
              <Profile class="profile" />
            </div>
            <!-- Thông tin khách hàng -->

            <!-- Dự án tương tự -->
            <div class="text-center">
              <h3 class=" font-weight-bold f-16 main-color mb-5px">DỰ ÁN TƯƠNG TỰ</h3>
              <div class="line mb-15px"></div>
              <template v-for="(item, idx) in 3">
                <div
                  class="d-flex flex-column w-100 item-related mb-20px"
                  :key="idx"
                >
                  <div class="position-relative ">
                    <img
                      class="w-100"
                      src="@/assets/img/du-an-tuong-tu-demo.png"
                    />
                    <span
                      class="mt-20px end-0 position-absolute bg-yellow-8 text-light px-3 text-12 py-6px font-weight-bold"
                      >Nội thất</span
                    >
                  </div>
                  <div class="bg-white px-15px py-18px">
                    <h3 class="text-14 main-color font-weight-bold mb-25px">
                      Tìm đơn vị thi công nội thất chung cư Hà Đô Centrosa
                      (60m2/2pn)
                    </h3>
                    <div class="d-flex justify-content-between">
                      <span class="text-12">
                        <img src="@/assets/svg/human.svg" />
                        Bùi Kim Long
                      </span>
                      <span class="text-12">
                        Ngân sách -
                        <span class="text-13 main-color font-weight-bold">300 Triệu</span>
                      </span>
                    </div>
                  </div>
                  <div
                    class="d-flex blue-bg-color justify-content-between text-white border-5 px-15px text-12 py-1"
                  >
                    <span>01/04/2021</span>
                    <span><span class="main-yellow">4</span> Chào Giá</span>
                  </div>
                </div>
              </template>
              <p class="f-12 main-color mb-0 text-right">Xem thêm dự án <i class="fas fa-caret-down ml-5px f-14"></i></p>
            </div>
            <!-- Dự án tương tự -->
          </div>
          <!--  Col right -->
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Profile from "@/components/profile/profile";
import Description from "@/components/profile/des";
import Project from "@/components/profile/project";
import Rating from "@/components/profile/rating";
export default {
  // middleware: 'auth',
  components: {
    Header,
    Footer,
    Profile,
    Description,
    Project,
    Rating,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
