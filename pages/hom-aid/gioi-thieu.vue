<template>
    <div >
        <Header />
        <BannerInfo />
        <section id="homeAid" class="pt-45px pb-50px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="box">
                            <div class="top">
                                <HomeAidNav />
                            </div>
                            <div class="center">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="box-title">
                                            <img src="@/assets/svg/introHomIcon.svg" alt="">
                                            <img src="@/assets/svg/homeaidtext.svg" class="img-text" alt="">
                                        </div>
                                        <div class="box-center">
                                            <div class="text">Chào mừng bạn đã đến với  <span>Homaid.vn</span>, nền tảng kết nối chủ nhà và nhà thầu tại Việt Nam. Chúng tôi mong muốn cùng đồng hành với bạn trên từng dự án</div>
                                            <div class="heading f-17 mt-20px">
                                                 <span>Hom</span><span class="aid">Aid</span> kết nối bạn thông qua mô hình đấu thầu trực tuyến
                                            </div>
                                            <div class="text mt-20px">
                                                Nếu bạn xây nhà lần đầu tiên và đang do dự không biết bắt đầu từ đâu, hãy đăng yêu cầu trên nền tảng của chúng tôi và nhận ngay tư vấn giải pháp và kinh phí dự trù từ các đơn vị thi công chuyên nghiệp đã được sàng lọc cẩn thận từ đội ngũ <span class="home">Hom</span><span class="aid">Aid</span>. Nếu như bạn là đơn vị thi công, công ty nội thất hay kiến trúc sư tự do, hãy đăng ký, hoàn thiện hồ sơ năng lực và kết nối ngay với nhiều khách hàng tiềm năng.
                                            </div>
                                            <div class="heading f-17 mt-30px">
                                                 <span>Hom</span><span class="aid">Aid</span> giúp quản lý quá trình thi công nhẹ nhàng hơn
                                            </div>
                                            <ul class="mt-20px mb-30px">
                                                <li>
                                                    <span>CHỦ ĐẦU TƯ</span> - Đăng tải công việc hoàn toàn miễn phí, yêu cầu khảo sát, thương lượng trực tiếp với nhà thầu trên nền tảng <span class="home">Hom</span><span class="aid">Aid</span>; nhận báo cáo thi công hàng tuần, theo dõi tiến độ và nhận đề nghị thanh toán trực tiếp từ nhà thầu.
                                                </li>
                                                <li>
                                                    <span>ĐƠN VỊ THI CÔNG</span> - Lưu trữ hồ sơ thi công, thương lượng trực tiếp với chủ nhà, tạo báo cáo thi công & gửi đề nghị thanh toán trực tiếp trên <span class="home">Hom</span><span class="aid">Aid</span>
                                                </li>
                                            </ul>
                                            <div class="text">
                                                Với những tiêu chí trên, <span class="home">Hom</span><span class="aid">Aid</span> mong muốn tạo ra một môi trường làm việc thân thiện, an toàn, và đảm bảo công bằng cho cả chủ đầu tư & đơn vị thi công. Hãy đồng hành và cùng trải nghiệm các tiện ích tuyệt vời của chúng tôi ngay hôm nay.
                                            </div>
                                            <div class="heading-end f-15 mt-24px">Đội Ngũ <span class="home">Hom</span><span class="aid">Aid</span></div>
                                        </div>
                                        <div class="bottom d-flex">
                                                <div class="post f-20 mr-25px">ĐĂNG DỰ ÁN NGAY</div>
                                                <div class="report f-20">ĐĂNG KÝ BÁO GIÁ</div>
                                            <img src="@/assets/svg/introHomeAidimg.svg"  alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <Footer />
    </div>

</template>


<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){

    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    a.nuxt-link-exact-active {
        font-weight: bold;
        color: #00c58e;
    }
</style>