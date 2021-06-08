<template>
  <div class="right">
    <div class="row">
      <div class="col-12">
        <div class="register">
          <div class="row">
            <div class="col-lg-12 col-sm-5 col-12">
              <!-- letter -->
              <div class="cover-letter">
                <div class="icon mt-24px">
                  <div
                    class="letter-img"
                    :style="{
                      'background-image': 'url(' + `${letter}` + ')',
                    }"
                  ></div>
                </div>
                <div class="text mt-14px">
                  <div class="letter-name f-18 mb-15px">
                    Đăng kí nhận thông tin
                  </div>
                  <div class="letter-sub f-13">
                    Vui lòng đến email của quý khách và nhận được thông tin truy
                    cập về tình hình thị trường BĐS từ đội ngũ Epoint
                  </div>
                </div>
                <div class="check mt-14px">
                  <input type="text" placeholder="Đăng kí Email" />
                  <div class="letter-search f-12 mt-14px d-flex">ĐĂNG KÝ</div>
                </div>
              </div>
              <!-- end letter -->
            </div>
            <div class="col-lg-12 col-sm-7 col-12">
              <!-- post top  -->
              <div class="sub-title f-16">BÀI VIẾT NỔI BẬT</div>
              <div class="line"></div>
              <div class="list mt-13px">
                <div class="row">
                  <div class="col-12" v-for="(item, i) in 4" :key="i">
                    <div class="boxsmall">
                      <div
                        class="small-img"
                        :style="{
                          'background-image': 'url(' + `${house}` + ')',
                        }"
                      ></div>
                      <div class="text">
                        <div class="top f-13">
                          Bỏ túi ngay bí quyết trang trí phòng khách hiện đại
                          với Phố Xinh
                        </div>
                        <div class="bot f-12">20/04/2021</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end post top -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import house from "@/assets/svg/house1.svg";
import letter from "@/assets/svg/email.svg";
export default {
  data() {
    return {
      house: house,
      letter: letter,
    };
  },
  mounted() {},
  methods: {},
};
</script>