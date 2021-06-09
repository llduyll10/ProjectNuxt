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
                            <div class="center homAidContact">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <div class="left">
                                            <img src="@/assets/svg/homeaidcontact.svg" alt="">
                                            <div class="content">
                                                <div class="name f-20">
                                                    Công Ty Cổ Phần Epoint
                                                </div>
                                                <div class="address">
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div class="title">Địa chỉ:</div>
                                                        </div>
                                                        <div class="col-8">
                                                            <div class="sub">Đường 2C, khu CIQ4 P. Phú Mỹ, Q.7, Tp. Hồ Chí Minh</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hotline row">
                                                    <div class="col-4">
                                                        <div class="title">Hotline:</div>
                                                    </div>
                                                    <div class="col-8">
                                                        <div class="sub">1 900 12345</div>
                                                    </div>
                                                </div>
                                                <div class="email row">
                                                     <div class="col-4">
                                                        <div class="title">Email:</div>
                                                    </div>
                                                    <div class="col-8">
                                                        <div class="sub email">Support@homaid.vn</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="form">
                                            <div class="heading d-flex">
                                                <img src="@/assets/svg/homaidcontacticon.svg" alt="">
                                                <div class="text f-30 ml-9px">Liên hệ <span>Hom</span><span class="aid">Aid</span> </div>
                                            </div>
                                            <form>
                                                <div class="form-group mb-15px mt-25px">
                                                    <label class="f-14">Họ và tên</label>
                                                    <input type="text" class="form-control" required placeholder="Họ và tên"/>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label class="f-14">Số điện thoại</label>
                                                            <input type="text" class="form-control" required placeholder="Số điện thoại"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label class="f-14">Email</label>
                                                            <input type="text" class="form-control" required placeholder="Email"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <p class="f-14 mt-2px mb-7px">Lời nhắn</p>
                                                    <textarea placeholder="Lời nhắn" class="form-control" name="message"></textarea>
                                                </div>
                                            </form>
                                            <div class="send f-20">
                                                GỬI THÔNG TIN
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