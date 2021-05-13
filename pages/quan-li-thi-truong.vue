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
                                                        <div class="name f-16">
                                                            Bỏ túi ngay bí quyết trang trí phòng khách hiện đại với Phố Xinh 
                                                        </div>
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
                                    <div class="right">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="register">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-sm-5 col-12">
                                                            <!-- letter -->
                                                            <div  class="cover-letter">
                                                                <div class="icon mt-24px">
                                                                    <div  class="letter-img"
                                                                            :style="{
                                                                                'background-image': 'url(' + `${letter}` + ')'
                                                                            }"
                                                                        >
                                                                    </div>
                                                                </div>
                                                                <div class="text mt-14px">
                                                                    <div class="letter-name f-18 mb-15px">Đăng kí nhận thông tin</div>
                                                                    <div class="letter-sub f-13">Vui lòng đến email của quý khách và nhận được thông tin truy cập về tình hình thị trường BĐS từ đội ngũ Epoint</div>
                                                                </div>
                                                                <div class="check mt-14px">
                                                                    <input type="text" placeholder="Đăng kí Email">
                                                                    <div class="letter-search f-12 mt-14px d-flex">TÌM NGAY</div>
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
                                                                    <div class="col-12" v-for="(item , i) in 4" :key="i">
                                                                        <div class="boxsmall">
                                                                            <div  class="small-img"
                                                                                :style="{
                                                                                    'background-image': 'url(' + `${house}` + ')',
                                                                                }"
                                                                            >
                                                                            </div>
                                                                            <div class="text ">
                                                                                <div class="top f-13 ">Bỏ túi ngay bí quyết trang trí phòng khách hiện đại với Phố Xinh </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- input register -->
        <section id="receiveInfo" class="pt-24px pb-40px">
            <div class="container-fluid">
                <div class="box">
                    <div class="row">
                    <div class="col-12">
                        <div class="info">
                            <div class="title f-20">ĐĂNG KÍ NHẬN THÔNG TIN</div>
                            <div class="sub f-13 mt-2">Đăng ký nhận thông tin mới nhất về thị trường xây dựng và những mẫu thiết kế đẹp và chất qua email của bạn hàng tuần</div>
                            <div class="search">
                                <input type="text" placeholder="Longb@econs.vn">
                                <div class="button f-13">Đăng ký</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <!-- end input register -->
        <Footer />
    </div>

</template>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import BannerInfo from "@/components/BannerInfo"
import house from "@/assets/svg/house1.svg"
import letter from "@/assets/svg/email.svg";


export default {
    // middleware: 'auth',
    components:{
        Header,
        Footer,
    },
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