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

              <hr class="hr my-10px"/>
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
              v-if="!checkStatusDueDate(detailProject.dueDate)"
            >
              <h3 class="h5 main-black f-14 fw-700">
                Gửi chào giá cho dự án - Bạn sẽ tốn
                <span class="main-color"><span class="f-20">3</span> Tokens</span> khi tham gia chào giá
              </h3>
              <hr class="hr" />
              <template v-if="detailProject && detailProject._id">
                <FormQuote :quoteName="detailProject.name"  :id="detailProject._id"  />
              </template>
            </div>
            <!--  Form chào giá -->

            <div
             
              class="left inner-content-section px-36px pt-25px pb-50px mb-20px"
            > 
              
              <h3 class="h5 main-black f-16 font-weight-bold">
                Danh sách chào giá (<span class="main-color">{{arrQuoteCompany && arrQuoteCompany.length}}</span> chào giá)
              </h3>
              <hr class="hr" />

                <template v-if="arrQuoteCompany && arrQuoteCompany.length" >
                  <template v-for="item in arrQuoteCompany">
                    <CompanyQuote :key="item._id" :company="item" />
                  </template>
                </template>

                <div v-else>
                  <p class="text-danger"><b>Chưa có chào giá</b></p>
                </div>


            </div>
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
              <div class="box d-flex py-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Ngân sách
                </div>
                <div v-if="detailProject.budget" class="text-13 col-6 px-0 main-black">
                  {{formatNamePrice(detailProject.budget)}}
                </div>
              </div>
              <div class="box d-flex py-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Ngày đăng
                </div>
                <div v-if="detailProject.createdDate" class="text-13 col-6 px-0 main-black">
                  {{checkIsToday(detailProject.createdDate)}}
                </div>
              </div>
              <div class="box d-flex py-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Hạn chót chào giá
                </div>
                <div v-if="detailProject.dueDate"
                    class="text-13 main-color px-0 font-weight-bold"
                    :class="checkStatusDueDate(detailProject.dueDate) ? 'text-red' :'' "
                  >
                  {{checkDueDate(detailProject.dueDate)}}
                </div>
              </div>
              <div class="box d-flex py-8px">
                <div class="text-12 col-6 px-0 color-grey">
                  Địa điểm
                </div>
                <div class="text-13 px-0 main-black">
                  {{detailProject.address}}
                </div>
              </div>
              <div class="box d-flex py-8px">
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
      slug:this.$nuxt.$route.params.slug,
      detailProject:{},
      arrNameCategory:[],
      arrQuoteCompany:null
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
          if(this.detailProject._id){
            this.getCompanyQuote(this.detailProject._id)
          }
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

    },
    getCompanyQuote(id){
      this.$get(`public/auction/project/${id}`)
          .then(res =>{
              console.log('company quotes',res)
              this.arrQuoteCompany = res.data
          })
          .catch(err =>{
              console.log(err)
          })
    }
  },
};
</script>
