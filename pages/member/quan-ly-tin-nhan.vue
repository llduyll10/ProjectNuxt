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
                    <div class="col-lg-8 pl-5px">
                        <div class="contentWrap">
                            <div class="contentTop d-flex">
                                <div class="title">Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa</div>
                                <div class="wrapDate">
                                   <img src="@/assets/svg/point-black.svg" alt="">
                                   <div class="date ml-20px f-12">Đăng ngày  <span>20/04/2021</span></div>
                                </div>
                            </div>
                            <div class="message">
                                <div class="dateMessage">20/04/201 - 8:25 PM</div>
                                <div class="send d-flex">
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                    <div class="contentSend">Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất.</div>
                                </div>
                                <div class="receive d-flex">
                                    <div class="contentReceive">Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất.</div>
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                </div>
                                <div class="dateMessage">20/04/201 - 8:25 PM</div>
                                <div class="send d-flex">
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                    <div class="contentSend">Econs nội thất.</div>
                                </div>
                                <div class="receive d-flex">
                                    <div class="contentReceive">Econs nội thất.</div>
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                </div>
                                <div class="dateMessage">20/04/201 - 8:25 PM</div>
                                <div class="send d-flex">
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                    <div class="contentSend">Econs nội thất.</div>
                                </div>
                                <div class="receive d-flex">
                                    <div class="contentReceive">Econs nội thất.</div>
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                </div>
                                <div class="send d-flex">
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                    <div class="contentSend">Econs nội thất.</div>
                                </div>
                                <div class="receive d-flex">
                                    <div class="contentReceive">Econs nội thất.</div>
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                </div>
                                <div class="send d-flex">
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                    <div class="contentSend">Manager.</div>
                                </div>
                                <div class="receive d-flex">
                                    <div class="contentReceive">Ban nội thất.</div>
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                </div>
                                <div class="dateMessage">20/04/201 - 8:25 PM</div>
                                <div class="send d-flex">
                                    <img src="@/assets/svg/messageLong.svg" alt="">
                                    <div class="contentSend">Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất.</div>
                                </div>
                                <div class="receive d-flex">
                                    <div class="contentReceive">Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất...Econs được thành lập và phát triển suốt 8 năm qua theo mô hình dịch vụ trọn gói trong lĩnh vực thiết kế và hoàn thiện nội thất.</div>
                                    <img src="@/assets/svg/messageLong.svg" alt="">
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