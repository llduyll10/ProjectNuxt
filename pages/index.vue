<template>
  <div id="homepage">
    <Header />
    <!-- Start Banner -->
    <div class="banner">
      <Carousel
        :arrows="false"
        :dots="true"
        :slidesToShow="1"
        :slidesToScroll="1"
        :infinite="true"
      >
        <template v-slot:content>
          <template v-for="(item, idx) in 5">
            <div  :key="idx" ref="all-img" class="cover-img" >
              <div
                :ref="`imgItem_${idx}`"
                class="img-slider"
                :style="{
                  'background-image': 'url(' + `${bannerImg}` + ')',
                }"
              >
                <div class="content-banner">
                  <p class="mb-15px">Bạn cần tìm công ty <span>Xây Dựng</span> hoặc <span>Thiết Kế?</span></p>
                  <p class="mb-50px"><span>Nhận ngay</span> <span>báo giá & giải pháp</span> từ những đơn vị hàng đầu</p>
                  <div class="group-btn-banner d-flex">
                    <div class="btn-project mr-18px">
                      ĐĂNG DỰ ÁN NGAY
                    </div>
                    <div class="btn-project quote">
                      ĐĂNG KÝ BÁO GIÁ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </Carousel>
    </div>
    <!-- End Banner -->
    <!-- Start Categories  -->
    <section class="category pt-40px ">
      <div class="category-title mb-40px">
        <p class="f-24">HẠNG MỤC DỰ ÁN</p>
        <div class="line"></div>
      </div>
      <div class="container-fluid caterogry-list">
        <div class="row">
          <div @click="$router.push('tim-du-an?active=1')" class="col-md-4 col-sm-12 cat-item cursor-pointer">
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
          <div @click="$router.push('tim-du-an?active=2')" class="col-md-4 col-sm-12 cat-item cursor-pointer" >
            <div class="content item-2">
              <div class="item-detail d-flex">
                <img src="@/assets/img/icon-decoration.png" />
                <p>
                  TRANG TRÍ NỘI THẤT
                </p>
              </div>
            </div>
          </div>
          <div @click="$router.push('tim-du-an?active=3')" class="col-md-4 col-sm-12 cat-item cursor-pointer">
            <div class="content item-3">
              <div class="item-detail d-flex">
                <img src="@/assets/img/icon-pen.png" />
                <p>
                THIẾT KẾ KIẾN TRÚC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Start describe  -->
    <section class="describe pt-50px pb-50px mt-40px">
      <div class="content-describe container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-12 describe-left pr-0">
            <p class="slogan">
              <span>Kết nối</span> bạn với nhà thầu <span>uy tín</span> và
              <span>chuyên nghiệp</span> nhất
            </p>
            <!-- Block 1 -->
            <div class="block-content mt-40px">
              <div class="block-title d-flex align-items">
                <img src="@/assets/svg/iconblock1.svg" />
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
              <div class="block-title d-flex align-items">
               <img src="@/assets/svg/iconblock2.svg" />
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
              <div class="block-title d-flex align-items">
                <img src="@/assets/svg/iconblock3.svg" />
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
              <div class="block-title d-flex align-items">
                <img src="@/assets/svg/iconblock4.svg" />
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
            <div class="btn-registration mt-30px">
              <span>ĐĂNG DỰ ÁN NGAY</span>
            </div>
          </div>

          <div class="col-md-6 col-sm-12 describe-right">
            <div class="row">
              <div class="col-12">
                <p class="slogan slogan-mobile">
                  <span>Kết nối</span> bạn với nhà thầu <span>uy tín</span> và
                  <span>chuyên nghiệp</span> nhất
                </p>
              </div>
              <div class="col-12 mb-50px">
                <img class="pl-15px" src="@/assets/img/describe-1.png" />
              </div>
              <div class="col-12">
                <img class="pl-15px mobile" src="@/assets/img/describe-2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End describe -->

    <!-- Start Special Prodcut-->
    <section id="special-product" class="mt-40px pb-50px">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 title mb-40px">
            <p class="f-24">DỰ ÁN NỔI BẬT</p>
            <div class="line"></div>
          </div>
        </div>
        <div  class="list-item" v-if="listTop">
          <Carousel
            :arrows="true"
            :dots="false"
            :slidesToShow="3"
            :slidesToScroll="3"
            :infinite="true"
            :numberShow="1"
            :numberShowMd="2"
          >
            <template v-slot:content>
              <template v-for="(item, idx) in listTop">
                <div class="card-item cursor-pointer item-carousel" :key="idx">
                   <b-link :to="'/du-an/'+item.slug"  >
                  <div class="item">
                    <!-- Content 1 -->
                    <div class="show-img"
                        :style="{
                      'background-image': 'url(' + `${item.photos[0]}` + ')',
                      'background-color':'#f2f2f2'
                      }">
                      <div class="type-product" :class="getClassBageCategory(mapImgFromCategory(item.category ))">
                        <span v-if="mapImgFromCategory(item.category) == 1">Thi công xây dựng</span>
                        <span v-if="mapImgFromCategory(item.category) == 2">Trang trí nội thất</span>
                        <span v-if="mapImgFromCategory(item.category) == 3">Thiết kế</span>
                      </div>
                      <div class="location">
                        <img src="@/assets/svg/area.svg" />
                        <span>
                            {{item.address}}
                        </span>
                      </div>
                    </div>
                    <!-- Content 2 -->
                    <div class="item-infor">
                      <p class="mb-0 f-14">
                        {{item.description || 'Dự án'}}
                      </p>
                      <div class="d-flex group-infor">
                        <div class="left">
                          <img src="@/assets/svg/human.svg" />
                          <span>{{item.createBy.name}} </span>
                        </div>
                        <div class="right">
                          <span> Ngân sách</span> - <span>{{formatNamePrice(item.budget)}}</span>
                        </div>
                      </div>
                    </div>
                    <!-- Content 3 -->
                    <div class="audiance d-flex">
                      <p class="f-12">{{$moment(item.createdDate).format('DD/MM/YYYY')}}</p>
                      <p>
                        <span>{{item.auctionCount}}</span>
                        Chào Giá
                      </p>
                    </div>
                  </div>
                   </b-link>
                </div>

              </template>
            </template>
          </Carousel>
        </div>
        <div class="row">
          <div class="col-12">
            <p @click="$router.push('tim-du-an')" class="mb-0 text-right mt-30px f-13 seemore pr-15px">
              Xem thêm dự án
              <img class="ml-5px" src="@/assets/img/icon-right.png" />
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Special Prodcut-->

    <Company />
    <Market />
    <Block1 />
    <Block2 />
    <Footer />

  </div>
</template>

<script>

import BannerImg from "@/assets/img/banner.png";

export default {
  data() {
    return {
      bannerImg: BannerImg,
      listTop:null
    };
  },
  mounted(){
    this.getHighProject()
  },
  methods: {
    getHighProject(){
      this.$get('public/projects-top-6')
          .then(res => {
            console.log('res highlight',res)
            this.listTop = res.data
          })
          .catch(err =>{
            console.log(err)
          })
    },
    goDetail(itemSlide) {
      // let arrImg = Array.from(document.querySelectorAll('.item-carousel'));
      // arrImg.forEach(item => {
      //   let drag = false;
      //   item.addEventListener('mousedown', () => {
      //     drag = false;
      //   });
      //   item.addEventListener('mousemove', () => {
      //     drag = true;
      //   });
      //   item.addEventListener('mouseup', () => {
      //     if (!drag) {
      //       this.$router.push(`/du-an/${itemSlide.slug}`)
      //     }
      //   });
      // });
    },
  },
};
</script>
