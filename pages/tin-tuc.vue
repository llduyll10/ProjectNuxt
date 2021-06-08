<template>
    <div >
        <Header />
        <BannerInfo />
        <section id="block" class="pt-45px pb-50px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 title mb-40px">
                        <p class="f-24">THÔNG TIN THỊ TRƯỜNG</p>
                        <div class="line"></div>
                    </div>
                    <div class="col-12">
                        <div class="blockinfo">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="left">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <!-- list off info -->
                                                <div class="box" v-for="(item , i) in 6" :key="i">
                                                    <div  class="cover-img"
                                                        :style="{
                                                            'background-image': 'url(' + `${house}` + ')',
                                                        }"
                                                    >
                                                    </div>
                                                        <div class="content">
                                                            <NuxtLink to="/chi-tiet">
                                                            <div class="name f-16">
                                                                Bỏ túi ngay bí quyết trang trí phòng khách hiện đại với Phố Xinh 
                                                            </div>
                                                            </NuxtLink>
                                                            <div class="general">
                                                                <div class="see f-13">
                                                                    Thị Trường 
                                                                </div>
                                                                <ul class="list">
                                                                    <li>20/04/2021</li>
                                                                    <li>Bùi Kim Long</li>
                                                                </ul>
                                                            </div>
                                                                <div class="sub f-13">Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất...Econs được thành lập và phát triển suốt 8 năm</div>
                                                        </div>
                                                </div>
                                                <!-- end list info -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <NewSiderbar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- input register -->
        <ReceiveInfo />
        <!-- end input register -->
        <Footer />
    </div>

</template>


<script>
import house from "@/assets/svg/house1.svg"
import letter from "@/assets/svg/email.svg";
export default {
    data(){
        return{
            house : house,
            letter : letter,
        }
    },
    mounted(){

    },
    methods:{
        
    }
}
</script>