<template>
  <section id="block2">
    <div class="container">
      <Carousel
        :arrows="true"
        :dots="false"
        :slidesToShow="1"
        :slidesToScroll="1"
        :infinite="true"
      >
        <template v-slot:content>
          <template v-for="(item, idx) in 5">
            <div class="row" :key="idx">
              <div class="col-lg-10 offset-lg-1 d-flex boxinfo">
                <img src="@/assets/svg/longb.svg" alt="" />
                <div class="text ml-40px">
                  <div class="info">
                    Anh Bùi Kim Long
                    <span>- công trình biệt thự Phú Mỹ, Q.7 </span>
                  </div>
                  <p>
                    “Sau khi đăng ký với Econs, mình tìm được ngay đơn vị xây
                    dựng chỉ trong vòng 5 ngày. Công trình hoàn thành vượt tiến
                    độ, và không bị phát sinh. Lần sau chắc chắn sẽ sử dụng dịch
                    vụ của công ty.”
                  </p>
                </div>
              </div>
            </div>
          </template>
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script>
import Carousel from "@/components/Carousel";
export default {
  components: {
    Carousel,
  },
};
</script>
