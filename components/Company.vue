<template>
    <section id="company" class="pb-50px">
        <div class="linepage mb-40px"></div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="title f-24">ĐƠN VỊ TIÊU BIỂU</p>
                    <div class="line"></div>
                </div>
            </div>
            <div class="all mt-40px">
                <!-- <ul class="mt-40px"> -->
                <Carousel
                    :arrows="true"
                    :dots="false"
                    :slidesToShow="6"
                    :slidesToScroll="3"
                    :infinite="true"
                    :numberShow="2"
                >
                    <template v-slot:content>
                        <template v-for="(item,idx) in listImg">
                            <div :key="idx" ref="all-img" class="cover-img">
                                <div
                                    :ref="`imgItem_${idx}`"
                                    class="img-slider"
                                    :style="{
                                        'background-image':
                                        'url(' + `${item.name}` + ')'
                                    }"
                                ></div>
                                <!-- <img :src="item.name" alt=""  class="img-slider"> -->
                            </div>
                        </template>
                    </template>
                </Carousel>

                    <!-- <li><img src="@/assets/svg/company1.svg" alt=""></li>
                    <li><img src="@/assets/svg/company2.svg" alt=""></li>
                    <li><img src="@/assets/svg/company3.svg" alt=""></li>
                    <li><img src="@/assets/svg/company1.svg" alt=""></li>
                    <li><img src="@/assets/svg/company2.svg" alt=""></li>
                    <li><img src="@/assets/svg/company3.svg" alt=""></li>
                </ul> -->
            </div>
        </div>
    </section>
</template>
<script>
import Carousel from '@/components/Carousel.vue'
import Company1 from '@/assets/svg/company1.svg'
import Company2 from '@/assets/svg/company2.svg'
import Company3 from '@/assets/svg/company3.svg'
export default {
    components:{
        Carousel
    },
    data(){
        return{
            listImg:[
                {id:1,name:Company1},
                {id:2,name:Company2},
                {id:3,name:Company3},
                {id:4,name:Company1},
                {id:5,name:Company2},
                {id:6,name:Company3},
                {id:6,name:Company1},
                {id:6,name:Company2},
                {id:6,name:Company3}
            ]
        }
    }
}
</script>
<style lang="scss">

</style>