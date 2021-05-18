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
                {{detailProject.name}}
              </h2>

              <div>
              <template v-for="(item) in arrNameCategory">
                <span
                  :key="item.id"
                  class="px-8px badge badge-primary main-bg-color py-2px text-12 custom-bage mr-8px mb-8px"
                >
                  {{item.label}}
                </span
                >
              </template>
              </div>

              <hr class="hr"/>
              <div class="main-black text-13">
                <p class="text-16 font-weight-bold">Yêu cầu công việc</p>
                <div class="f-13 mb-0 break-line">{{detailProject.description}} </div>
              </div>

              <template v-if="detailProject.attachment && detailProject.attachment.length">
              <hr class="hr" />
              <h3 class="font-bold text-16 mb-0">Tài liệu đính kèm</h3>
              <div class="d-flex main-color mt-20px text-11">
                    <template v-for="(item,idx) in detailProject.attachment">
                        <p :key="idx+1" class="f-11 mb-0 text-main cursor-pointer mr-15px"
                          @click="downloadFile(item,)"
                        >
                            <span v-html="returnTypeFile(spliceURLFile(item,'--'))"></span>
                            {{spliceURLFile(item,'--')}}
                        </p>
                    </template>
              </div>
              </template>
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
               <form @submit.prevent="getForm()" class="group-content">
                 <div class="form-group row mb-25px">
                      <label class="f-13 col-md-3 col-sm-12 font-weight-bold">
                        Chi phí ước tính
                        <span style="color:red">*</span>
                    </label>
                    <div class="col-md-9 col-sm-12">
                      <input type="text" class="form-control " />
                      <p class="mb-0 mt-5px f-12 main-black">
                        Phí hoa hồng nếu trúng thầu -
                        <span class="main-color font-weight-bold">500</span> <span class="font-weight-bold">Tokens</span>
                      </p>
                    </div>
                </div>
                 <div class="form-group row mb-25px">
                   <label class="f-13 col-md-3 col-sm-12 font-weight-bold">
                      Kinh nghiệm, Năng lực và giải pháp đề xuất
                      <span style="color:red">*</span>
                  </label>
                  <div class="col-md-9 col-sm-12">
                    <textarea required id="customPlaceholder" class="form-control main-black " rows="5"
                              placeholder=
                              " 1. Mô tả kinh nghiệm & năng lực của bạn \n 2. Tại sao chủ đầu tư phải chọn bạn thi công công trình này? \n 3. Đề xuất giải pháp thi công của bạn sau khi xem xét yêu cầu của chủ đầu tư"
                          ></textarea>
                  </div>
                 </div>
                 <div class="form-group row mb-25px">
                      <label class="f-13 col-md-3 col-sm-12 font-weight-bold">
                        Thời gian thi công dự trù
                        <span style="color:red">*</span>
                    </label>
                    <div class="col-md-3 col-sm-12">
                      <input type="text" class="form-control " placeholder="Ví dụ:  3 tháng"/>
                    </div>
                </div>
                 <div class="form-group row mb-25px">
                      <label class="f-13 col-md-3 col-sm-12 font-weight-bold">
                        Tài liệu đính kèm
                        <span style="color:red">*</span>
                    </label>
                    <div class="col-md-9 col-sm-12">
                      <button
                        class="btn btn-primary main-bg-color radius-5 py-5px px-16px text-11"
                      >
                        <img src="@/assets/svg/icon-upload.svg" />
                        <span>Thêm tài liệu</span>
                      </button>
                      <span class="main-color ml-1 f-11">png, jpg, tiff, pdf, xls, doc, ppt, zip, rar</span>
                    </div>

                </div>
                <div class="form-group mb-50px group-checkbox">
                    <b-form-checkbox
                        v-model="objForm.status"
                        name="checkbox-agree"
                        required
                        >
                        Tôi đồng ý với <span class="main-color">điều khoản</span> của Econs <span style="color:red">*</span>
                    </b-form-checkbox>
                </div>
                <div class="group-btn">
                  <div class="d-flex mt-25px justify-content-xl-around row">
                    <div class="col-md-6 col-sm-12">
                      <button
                        class=" btn btn-primary main-bg-color radius-5 w-100  text-16 fw-700"
                      >
                        GỬI CHÀO GIÁ NGAY
                      </button>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <button
                        class=" btn btn-primary main-bg-color radius-5 w-100  btn-brown text-16 pr-0 fw-700"
                      >
                        LƯU BẢN NHÁP
                      </button>
                    </div>
                    </div>
                </div>
               </form>
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
              <template v-for="(id,index) in 3">
                <div class="d-flex flex-wrap " :key="index+20">
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
                            <div :key="idx+10">
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
              <h3 class="text-16 font-weight-bold main-black mb-2">
                Thông tin dự án
              </h3>
              <hr class="hr my-15px" />
              <div class="box d-flex pb-12px">
                <div class="text-12 col-6 px-0 color-grey">
                  ID dự án
                </div>
                <div class="text-13 main-color col-6 px-0 font-weight-bold">
                  {{detailProject.number}}
                </div>
              </div>
              <div class="box d-flex pb-12px pt-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Ngân sách
                </div>
                <div v-if="detailProject.budget" class="text-13 col-6 px-0 main-black">
                  {{formatNamePrice(detailProject.budget)}}
                </div>
              </div>
              <div class="box d-flex pb-12px pt-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Ngày đăng
                </div>
                <div v-if="detailProject.createdDate" class="text-13 col-6 px-0 main-black">
                  {{checkIsToday(detailProject.createdDate)}}
                </div>
              </div>
              <div class="box d-flex pb-12px pt-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Hạn chót chào giá
                </div>
                <div v-if="detailProject.dueDate" class="text-13 main-color px-0 font-weight-bold">
                  {{checkDueDate(detailProject.dueDate)}}
                </div>
              </div>
              <div class="box d-flex pb-12px pt-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Địa điểm
                </div>
                <div class="text-13 px-0 main-black">
                  {{detailProject.address}}
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
              class="left inner-content-section px-24px pt-20px pb-40px mb-20px thongTinDuAnWrapper main-black"
              v-if="detailProject && detailProject.createBy"
            >
              <!-- Hard some css display none for re-using profile component -->
              <Customer :id="detailProject.createBy._id" class="profile" />
            </div>
            <!-- Thông tin khách hàng -->

            <!-- Dự án tương tự -->
            <div class="text-center">
              <h3 class=" font-weight-bold f-16 main-color mb-5px">DỰ ÁN TƯƠNG TỰ</h3>
              <div class="line mb-15px"></div>
              <template v-for="(item, idx) in 3">
                <div
                  class="d-flex flex-column w-100 item-related mb-20px"
                  :key="idx + 100"
                >
                  <div class="position-relative ">
                    <img
                      class="w-100"
                      src="@/assets/img/du-an-tuong-tu-demo.png"
                    />
                    <span
                      class="mt-20px end-0 position-absolute bg-yellow-8 text-light text-12 pl-30px pr-16px py-5px line-height-15 font-weight-bold"
                      >NỘI THẤT</span
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
export default {
  data() {
    return {
      objForm:{
        status:false,
      },
      slug:this.$nuxt.$route.params.slug,
      detailProject:{},
      listCategory: this.getCategory(),
      arrNameCategory:[]
    };
  },
  mounted() {
    this.getDetailProject()
  },
  methods: {
    getDetailProject(){
      this.$get(`public/projects/${this.slug}`)
        .then(res =>{
          this.detailProject = res.data
          this.arrNameCategory = this.mapCategory(this.detailProject.category)
          console.log(this.detailProject)
        })
        .catch(err =>{
          console.log(err)
        })
    },
    downloadFile(url){
      var link = document.createElement('a')
      var name = this.spliceURLFile(url,'--')
      if(name && name !== ''){
        link.download = name
        link.href = url
        link.click()
      }

    }
  },
};
</script>
