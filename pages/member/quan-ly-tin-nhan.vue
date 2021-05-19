<template>
    <div>
        <Header />
        <section id="managerMessage" class="wrapSection pt-30px pb-80px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="boxMessage mr-20"> 
                            <div class="wrapGeneral">
                                <div class="search-top d-flex">
                                    <input type="text" class="f-12" placeholder="Tìm kiếm">
                                    <div class="button">Tìm kiếm</div>
                                </div>
                                <div class="general d-flex">
                                    <div class="item active f-13">
                                        Tất cả tin nhắn
                                    </div>
                                    <div class="item f-13">
                                        Tin chưa đọc (<span>2</span>)
                                    </div>
                                    <div class="item f-13">
                                        Lưu trữ
                                    </div>
                                </div>
                            </div>
                            <div class="wrapMessage">
                                <div class="messageItem d-flex active" v-for="(item , i) in 2" :key="i">
                                    <img src="@/assets/svg/messageLong.svg" alt="" class="header__cart-img">
                                    <div class="content">
                                        <div class="top d-flex">
                                            <div class="name f-12">
                                                Long Bui
                                            </div>
                                            <div class="company f-12">
                                                Công ty cổ phần Epoint
                                            </div>
                                            <div class="time f-11">7:50 PM</div>
                                        </div>
                                        <div class="bottom d-flex">
                                            <div class="content-message f-12">
                                                Dear anh, em có chút thắc mắc anh, em có chút thắc mắc
                                            </div>
                                            <div class="isMessage f-12">
                                                <img src="@/assets/svg/isMessage.svg" alt="">
                                                <div class="notify f-10">1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="messageItem d-flex" v-for="(item , i) in 6" :key="i">
                                    <img src="@/assets/svg/messageLong.svg" alt="" class="header__cart-img">
                                    <div class="content">
                                        <div class="top d-flex">
                                            <div class="name f-12">
                                                Long Bui
                                            </div>
                                            <div class="company f-12">
                                                Công ty cổ phần Epoint
                                            </div>
                                            <div class="time f-11">7:50 PM</div>
                                        </div>
                                        <div class="bottom d-flex">
                                            <div class="content-message f-12">
                                                Dear anh, em có chút thắc mắc anh, em có chút thắc mắc
                                            </div>
                                            <div class="isMessage f-12">
                                                <img src="@/assets/svg/isMessage.svg" alt="">
                                                <div class="notify f-10">1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="content-message">
                            fsdfs
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
    middleware: 'auth',
    components:{
    },
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