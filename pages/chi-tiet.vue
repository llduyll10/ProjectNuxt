<template>
    <div >
        <Header />
        <BannerDetails />
        <section id="block" class="pt-45px pb-50px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="blockinfo">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="left">
                                        <div class="slogan f-25">
                                            Siêu điểm đến mới tại Nha Trang
                                        </div>
                                        <div class="sub-info">
                                            Ngay từ khi ra mắt, Vega City Nha Trang là "điểm sáng" của thị trường bất động sản nghỉ dưỡng bởi mô hình nghỉ dưỡng khép kín, cùng định hướng phát triển kinh tế đêm độc đáo, hứa hẹn đem đến một "thiên đường" giải trí, nghệ thuật sôi động bậc nhất, một kinh đô ánh sáng và lễ hội tưng bừng suốt 4 mùa. Do đó, những căn shophouse tại đây luôn có sức hút mạnh mẽ đối với các nhà đầu tư sành sỏi bởi tiềm năng du lịch và khai thác thương mại bất tận.
                                        </div>
                                        <img src="@/assets/svg/detailimage.svg" alt="">
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