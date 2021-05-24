<template>
  <section id="block2">
    <div class="container-fluid">
      <Carousel
        :arrows="true"
        :dots="false"
        :slidesToShow="2"
        :slidesToScroll="2"
        :infinite="true"
      >
        <template v-slot:content>
          <template v-for="(item, idx) in 6">
            <div :key="idx">
              <div class="boxinfo"> 
                <div class="top d-flex">
                  <img src="@/assets/svg/longb.svg" alt="">
                  <div class="text ml-18px">
                    <div class="name f-17">
                      Anh Bùi Kim Long 
                    </div>
                    <div class="company f-13">
                      Công trình biệt thự Phú Mỹ, Q.7 
                    </div>
                  </div>
                </div>
                <div class="bot">
                  <p class="f-14">“Sau khi đăng ký với Econs, mình tìm được ngay đơn vị xây dựng chỉ trong vòng 5 ngày. Công trình hoàn thành vượt tiến độ, và không bị phát sinh. Lần sau chắc chắn sẽ sử dụng dịch vụ của công ty.”</p>
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
