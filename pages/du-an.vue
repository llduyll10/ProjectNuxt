<template>
    <div>
        <Header />
        <section id="project" class="pt-30px pb-80px">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12">
                        <div class="left">
                            <div class="top">
                                <div class="title f-16">
                                    LĨNH VỰC CÔNG VIỆC
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="list">
                                <div class="d-flex item-title f-14">
                                    <img src="@/assets/svg/homeproject.svg" alt="">
                                    <span>Thi công xây dựng</span>
                                </div>
                                <div class="list-item f-13">
                                    <ul>
                                        <li>Thi công phần thô</li>
                                        <li>Thi công hoàn thiện</li>
                                        <li>Sửa chữa cải tạo</li>
                                        <li>Thi công trọn gọi</li>
                                        <li>Thi công nhà tiền chế</li>
                                        <li>Thi công toà nhà</li>
                                        <li>Hạng mục thi công khác</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="list">
                                <div class="d-flex item-title f-14">
                                    <img src="@/assets/svg/sofa.svg" alt="">
                                    <span>Trang trí nội thất</span>
                                </div>
                                <div class="list-item f-13">
                                    <ul>
                                        <li>Nội thất căn hộ/nhà phố</li>
                                        <li>Nội thất biệt thự</li>
                                        <li>Nội thất văn phòng
                                        <li>Nội thất nhà hàng</li>
                                        <li>Nội thất quan bar/karaoke</li>
                                        <li>Hạng mục nội thất khác</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="list">
                                <div class="d-flex item-title f-14">
                                    <img src="@/assets/svg/pen.svg" alt="">
                                    <span>Thiết kế 2D/3D</span>
                                </div>
                                <div class="list-item f-13">
                                    <ul>
                                        <li>Thiết kế kiến trúc</li>
                                        <li>Thiết kế nội thất</li>
                                        <li>Bản vẽ kỹ thuật</li>
                                        <li>Thiết kế kết cấu</li>
                                        <li>Lập hồ sơ dự toán/hoàn công</li>
                                        <li>Hạng mục thiết kế khác</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="left">
                            <div class="top">
                                <div class="title f-16">
                                    LĨNH VỰC CÔNG VIỆC
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="list">
                                <div class="checkbox">
                                    <div class="gr-check">
                                        <input type="checkbox" class="">
                                        <label>Toàn quốc</label>
                                    </div>
                                    <div class="gr-check">
                                        <input style="background-color:red!important" type="checkbox" class="">
                                        <label>Hà Nội</label>
                                    </div>
                                    <div class="gr-check">
                                        <input type="checkbox" class="">
                                        <label>Tp. Hồ Chí Minh</label>
                                    </div>
                                </div>
                                <div class="seemore f-12">
                                    Xem thêm
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 col-sm-12">
                        <div class="right">
                            <!-- search -->
                            <div class="top">
                                <div class="search-top">
                                    <label>
                                        <img src="@/assets/svg/search-top.svg" alt="">
                                    </label>
                                    <input type="text" class="f-12" placeholder="Tìm kiếm đơn vị thi công/thiết kế">
                                </div>
                                <div class="button">Tìm kiếm</div>
                            </div>
                            <div class="line"></div>
                            <!-- list off member -->
                            <div class="center" v-for="(item, j) in 2" :key="j">
                                <div class="boxinfo">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-12 col-sm-12">
                                            <div class="introduce">
                                                <div  class="cover-img"
                                                    :style="{
                                                        'background-image': 'url(' + `${imgProfile}` + ')',
                                                    }"
                                                >
                                                </div>
                                                <div class="content">
                                                    <div class="title">
                                                        <div class="sub f-14">Công ty cổ phần Epoint {{item}}</div>
                                                        <div class="icon">
                                                            <img src="@/assets/svg/icon-location.svg" alt="">
                                                            <span class="name f-11">Hồ Chí Minh</span>
                                                        </div>
                                                    </div>
                                                    <div class="description f-13">Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thấtEcons được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất</div>
                                                    <div class="group">
                                                        <div class="choose active">Nội thất căn hộ</div>
                                                        <div class="choose">Thiết kế kiến trúc</div>
                                                        <div class="choose">Thiết kế nội thất</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-12 col-sm-12">
                                            <div class="rate">
                                                <div class="star">
                                                    <div class="d-flex">
                                                        <div class="limit f-10">5.0</div>
                                                        <img src="@/assets/svg/star.svg" alt="">
                                                    </div>
                                                    <div class="st f-13">(<span>4</span> đánh giá)</div>
                                                </div>
                                                <div class="contact">
                                                    <div class="phone" @click="openLienHe">
                                                        <img src="@/assets/svg/phone.svg" alt="">
                                                        <span>Liên hệ trực tiếp</span>
                                                    </div>
                                                    <div class="email">
                                                        <img src="@/assets/svg/email.svg" alt="">
                                                        <span>Gửi tin nhắn</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="line"></div>
                            </div>
                            
                        </div>      
                    </div>
                </div>
            </div>
        </section>
        <LienHePop ref="refLienHe"/>
        <Footer />
    </div>

</template>


<script>
import ImgProfile from '@/assets/svg/longb.svg'
import logoDuan from '@/assets/svg/logo-duan.svg'
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import LienHePop from "@/components/popup/lien-he"
export default {
    // middleware: 'auth',
    components:{
        Header,
        Footer,
        LienHePop
    },
    data(){
        return{
            imgProfile: ImgProfile,
            logoDuan :logoDuan,
            dataFake:[1,2,3,4,5,6,7]
        }
    },
    mounted(){

    },
    methods:{
        openLienHe(){
            this.$refs.refLienHe.show();
        }
    }
}
</script>