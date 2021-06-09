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
                                            <div class="heading mt-20px">
                                                 <span>Hom</span><span class="aid">Aid</span> kết nối bạn thông qua mô hình đấu thầu trực tuyến
                                            </div>
                                            <div class="text mt-20px">
                                                Nếu bạn xây nhà lần đầu tiên và đang do dự không biết bắt đầu từ đâu, hãy đăng yêu cầu trên nền tảng của chúng tôi và nhận ngay tư vấn giải pháp và kinh phí dự trù từ các đơn vị thi công chuyên nghiệp đã được sàng lọc cẩn thận từ đội ngũ HomAid. Nếu như bạn là đơn vị thi công, công ty nội thất hay kiến trúc sư tự do, hãy đăng ký, hoàn thiện hồ sơ năng lực và kết nối ngay với nhiều khách hàng tiềm năng.
                                            </div>
                                            <div class="heading mt-30px">
                                                 <span>Hom</span><span class="aid">Aid</span> giúp quản lý quá trình thi công nhẹ nhàng hơn
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