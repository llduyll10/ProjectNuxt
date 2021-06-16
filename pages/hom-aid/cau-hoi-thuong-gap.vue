<template>
    <div >
        <Header />
        <BannerHomeAid />
        <section id="homeAid" class="pt-40px pb-50px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="box">
                            <div class="top">
                                <HomeAidNav />
                            </div>
                            <div class="center homAidQuestion">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="box-title d-flex">
                                            <img src="@/assets/svg/homquestion.svg" alt="">
                                            <div class="title f-30 ml-5px">Câu hỏi thường gặp</div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div id="box-tab">
                                            <b-tabs content-class="mt-3">
                                                <b-tab title="First" active>
                                                    
                                                </b-tab>
                                                <b-tab title="Second"><p>I'm the second tab</p></b-tab>
                                                <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
                                            </b-tabs>
                                        </div>
                                    <template>
                                        <div class="accordion" role="tablist">
                                            <div no-body class="wrap">
                                                <div role="tab">
                                                    <div v-b-toggle.accordion-1>
                                                        <div class="titledown d-flex">
                                                            <div class="text">
                                                                <span>HomAid</span> kết nối bạn thông qua mô hình đấu thầu trực tuyến 
                                                            </div>
                                                            <img src="@/assets/svg/accordiondown.svg" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <b-collapse id="accordion-1"  accordion="my-accordion" role="tabpanel">
                                                    <div>
                                                    <div>{{ text }}</div>
                                                    </div>
                                                </b-collapse>
                                            </div>
                                            <div no-body class="wrap">
                                                <div role="tab">
                                                    <div v-b-toggle.accordion-2>
                                                        <div class="titledown d-flex">
                                                            <div class="text">
                                                                <span>HomAid</span> kết nối bạn thông qua mô hình đấu thầu trực tuyến 
                                                            </div>
                                                            <img src="@/assets/svg/accordiondown.svg" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <b-collapse id="accordion-2"  accordion="my-accordion" role="tabpanel">
                                                    <div>
                                                    <div>{{ text }}</div>
                                                    </div>
                                                </b-collapse>
                                            </div>
                                            <div no-body class="wrap">
                                                <div role="tab">
                                                    <div v-b-toggle.accordion-3>
                                                        <div class="titledown d-flex">
                                                            <div class="text">
                                                                <span>HomAid</span> kết nối bạn thông qua mô hình đấu thầu trực tuyến 
                                                            </div>
                                                            <img src="@/assets/svg/accordiondown.svg" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <b-collapse id="accordion-3"  accordion="my-accordion" role="tabpanel">
                                                    <div>
                                                    <div>{{ text }}</div>
                                                    </div>
                                                </b-collapse>
                                            </div>
                                        </div>
                                        </template>
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
            text: `
          Nếu bạn xây nhà lần đầu tiên và đang do dự không biết bắt đầu từ đâu, hãy đăng yêu cầu trên nền tảng của chúng tôi và nhận ngay tư vấn giải pháp và kinh phí dự trù từ các đơn vị thi công chuyên nghiệp đã được sàng lọc cẩn thận từ đội ngũ HomAid. Nếu như bạn là đơn vị thi công, công ty nội thất hay kiến trúc sư tự do, hãy đăng ký, hoàn thiện hồ sơ năng lực và kết nối ngay với nhiều khách hàng tiềm năng. 
        `
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