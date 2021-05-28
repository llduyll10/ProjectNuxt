<template>
    <div>
        <Header />
        <section id="managerMessage" class="wrapSection pt-30px pb-80px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex">
                            <div class="boxMessage mr-20px">
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
                                    <div class="messageItem d-flex" v-for="(item , i) in 6" :key="i+10">
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
                            <div class="contentWrap">
                                <div class="contentTop d-flex">
                                    <div class="title">Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa</div>
                                    <div class="wrapDate">
                                        <img src="@/assets/svg/point-black.svg" alt="">
                                        <div class="date ml-20px f-12">Đăng ngày  <span>20/04/2021</span></div>
                                    </div>
                                </div>
                                <div class="message">
                                    <div v-for="(item , i ) in 3" :key="i+20">
                                        <div class="dateMessage">20/04/201 - 8:25 PM</div>
                                        <div class="send d-flex">
                                            <img src="@/assets/svg/messageLong.svg" alt="">
                                            <div class="d-flex flex-column">
                                                <div class="contentSend">Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất.</div>
                                                <div class="contentSend">How do you feeling?</div>
                                            </div>
                                        </div>
                                        <div class="receive d-flex">
                                            <div class="d-flex flex-column">
                                                <div class="contentReceive">Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất</div>
                                                <div class="contentReceive">Econs nội thất.</div>
                                                <div class="contentReceive">Econs nội thất.</div>
                                            </div>
                                            <img src="@/assets/svg/messageLong.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="wrapFill d-flex">
                                    <input type="text" placeholder="Soạn tin nhắn...">
                                    <img src="@/assets/svg/happy.svg" alt="">
                                    <img src="@/assets/svg/file.svg" alt="">
                                    <div class="sending">Gửi tin nhắn</div>
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
    middleware: 'auth',
    components:{
    },
    data(){
        return{

        }
    },
    mounted(){
        this.getListMess()

    },
    methods:{
        getListMess(){
            this.loader()
            this.$get('member/rooms')
                .then(res => {
                    console.log('messs', res)
                    this.loader(0)
                })
                .catch(err =>{
                    console.log(err)
                    this.loader(0)
                })
        }
    }
}
</script>