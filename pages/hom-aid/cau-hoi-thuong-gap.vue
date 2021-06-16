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
                                        <div class="box-tab">
                                            <ul class="nav">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#">Thông tin chung</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Khách hàng</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Nhà thầu</a>
                                                </li>
                                            </ul>
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