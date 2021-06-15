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
                                        <div @click="setTypeRoom(1)" class="item cursor-pointer f-13" :class="typeRoom == 1 ? 'active' : ''" >
                                            Tất cả tin nhắn
                                        </div>
                                        <div @click="setTypeRoom(2)" class="item cursor-pointer f-13" :class="typeRoom == 2 ? 'active' : '' " >
                                            Tin chưa đọc (<span>2</span>)
                                        </div>
                                        <div @click="setTypeRoom(3)" class="item cursor-pointer f-13" :class="typeRoom == 3 ? 'active' : ''" >
                                            Hỗ trợ (<span>2</span>)
                                        </div>
                                    </div>
                                </div>
                                <!-- List message -->
                                <div v-if="listMess" class="wrapMessage">
                                    <div @click="getDetailMess(item)"
                                        class="messageItem d-flex  cursor-pointer"
                                        :class="(currentRoom && currentRoom._id == item._id) ? 'active' :'' "
                                        v-for="(item , i) in listMess" :key="i"
                                    >
                                        <img v-if="findUserChat(item.users).photo" :src="findUserChat(item.users).photo" alt="" class="header__cart-img">
                                        <div v-else class="not-avatar">
                                            <span>{{findUserChat(item.users).name.slice(0,1).toUpperCase()}}</span>
                                        </div>
                                        <div class="content">
                                            <div class="top d-flex">
                                                <!-- <div class="name f-12">
                                                    {{findUserChat(item.users).name}}
                                                </div> -->
                                                <div class="company f-12">
                                                    {{item.title}}
                                                </div>
                                                <div class="time f-11">{{$moment(item.createdDate).format('hh:mm A')}}</div>
                                            </div>
                                            <div class="bottom d-flex">
                                                <div class="content-message f-12">
                                                   {{item.message}}
                                                </div>
                                                <!-- <div class="isMessage f-12">
                                                    <img src="@/assets/svg/isMessage.svg" alt="">
                                                    <div class="notify f-10">1</div>
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="line"></div>
                                </div>
                            </div>
                            <!-- Type room chat -->
                            <template v-if="typeRoom == 1 || typeRoom == 2">
                                <div v-if="currentRoom" class="contentWrap">
                                    <div  class="contentTop d-flex">
                                        <div  class="title">{{currentRoom.title}}</div>
                                        <div class="wrapDate">
                                            <img src="@/assets/svg/point-black.svg" alt="">
                                            <div class="date ml-20px f-12">Đăng ngày  <span>{{$moment(currentRoom.createdDate).format('DD/MM/YYYY')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="message mt-25px" v-if="listChatDetail" :class="arrFile.length ? 'fixHeight' :''">
                                        <div v-for="(item , i ) in listChatDetail" :key="i+20">
                                            <div class="dateMessage">{{$moment(item.createdDate).format('DD/MM/YYYY, hh:mm A')}}</div>
                                            <!-- It me -->
                                            <template v-if="$auth && $auth.user">
                                                <div v-if="$auth.user._id != item.user._id"  class="send d-flex">
                                                    <img v-if="item.user.photo" :src="item.user.photo" alt="">
                                                    <div v-else class="not-avatar mr-15px">
                                                        <span>{{item.user.name.slice(0,1).toUpperCase()}}</span>
                                                    </div>
                                                    <div class="d-flex flex-column">
                                                        <div class="contentSend">
                                                            {{item.message}}
                                                            <br/>
                                                            <template v-if="item.attachments">
                                                                <template v-for="(file,idx) in item.attachments">
                                                                    <div :key="idx+101" class="mt-5px cursor-pointer" @click="downloadFile(file)">
                                                                        <span  v-html="returnTypeFile(spliceURLFile(file,'--'))"></span>
                                                                        <span class="f-11">{{spliceURLFile(file,'--')}}</span>
                                                                    </div>
                                                                </template>
                                                            </template>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="receive d-flex">
                                                    <div class="d-flex flex-column">
                                                        <div class="contentReceive">
                                                            {{item.message}}
                                                            <br />
                                                            <template v-if="item.attachments">
                                                                <template v-for="(file,idx) in item.attachments">
                                                                    <div :key="idx+11" class="mt-5px cursor-pointer"  @click="downloadFile(file)">
                                                                        <span  v-html="returnTypeFile(spliceURLFile(file,'--'))"></span>
                                                                        <span class="f-11">{{spliceURLFile(file,'--')}}</span>
                                                                    </div>
                                                                </template>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <img v-if="item.user.photo" :src="item.user.photo" alt="">
                                                    <div v-else class="not-avatar ml-15px">
                                                        <span>{{item.user.name.slice(0,1).toUpperCase()}}</span>
                                                    </div>
                                                </div>
                                            </template>

                                        </div>
                                    </div>
                                    <form @submit.prevent="sendMessage" class="wrapFill d-flex">
                                        <input v-model="objMessage.message" type="text" placeholder="Soạn tin nhắn...">
                                        <img src="@/assets/svg/happy.svg" alt="">
                                        <!-- <img src="@/assets/svg/file.svg" alt=""> -->
                                        <InputFile :accept="accepFile" @input="getFile" :isChat="true" :multiple="true" :label="'Thêm tài liệu'"/>

                                        <button  class="sending" type="submit">Gửi tin nhắn</button>
                                    </form>
                                    <div  v-if="arrFile.length">
                                        <div  class="listFile">
                                            <template v-for="(item,idx) in arrFile">
                                                    <p :key="idx" class="f-11 text-main mr-10px item-file">
                                                        <span class="f-11" v-html="returnTypeFile(item.name)"></span>
                                                        {{item.name}}
                                                        <span class="cursor-pointer ml-5px" @click="clearFile(item)">
                                                            <i class="fas fa-times text-red"></i>
                                                        </span>
                                                    </p>

                                            </template>
                                        </div>

                                    </div>
                                </div>
                            </template>
                            <!-- Type room support -->
                            <template v-else>
                                <div v-if="currentRoom" class="contentWrap">
                                    <!-- top -->
                                    <div  class="contentTop d-flex">
                                        <div v-if="typeSupport == 1" class="title titleSupport">Phạm Yên vừa gửi tin nhắn cho bạn</div>
                                        <div v-if="typeSupport == 2" class="title titleSupport">Phạm Yên vừa cập nhật thông tin dự án <span class="text-main"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>
                                        <div v-if="typeSupport == 3" class="title titleSupport">Phạm Yên mời bạn khảo sát dự án  <span class="text-main"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>
                                        <div v-if="typeSupport == 4" class="title titleSupport">Phạm Yên yêu cầu thương lượng dự án <span class="text-main"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>
                                        <div v-if="typeSupport == 5" class="title titleSupport">Phạm Yên chọn bạn thi công dự án  <span class="text-main"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>
                                        <div v-if="typeSupport == 6" class="title titleSupport">Phạm Yên xác nhận thanh toán cho dự án  <span class="text-main"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>
                                        <div v-if="typeSupport == 7" class="title titleSupport">Phạm Yên vừa đánh giá chất lượng thi công dự án <span class="text-main"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>
                                        <div v-if="typeSupport == 8" class="title titleSupport">Phạm Yên vừa kết thúc dự án <span class="text-main"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa </span></div>


                                        <div class="wrapDate">
                                            <img src="@/assets/svg/point-black.svg" alt="">
                                            <div class="date ml-20px f-12">Đăng ngày  <span>{{$moment(currentRoom.createdDate).format('DD/MM/YYYY')}}</span></div>
                                        </div>
                                    </div>
                                    <!-- middle -->
                                    <div class="message isSuuport mt-25px px-25px" v-if="listChatDetail">
                                        <template v-if="typeSupport == 1">
                                            <span class="f-13 main-black">Chào bạn,</span> <br>
                                            <span class="f-13 main-black">
                                                Khách hàng <span class="f-13 text-main">Phạm Yên</span> vừa gửi tin nhắn cho bạn về dự án <span class="text-main"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span> Bạn sẽ tốn <span class="text-main"> 5 Tokens </span> nếu mở tin nhắn. <span class="main-black font-weight-bold"> Lưu ý</span>, đây là chi phí thanh toán một lần duy nhất khi lần đầu bạn làm việc với khách hàng.
                                            </span>
                                            <div class="btn-project">
                                                <span>Xem tin nhắn</span>
                                            </div>
                                            <span class="f-13 main-black">Chân thành cám ơn, </span> <br>
                                            <span class="f-13 main-black"> Đội ngũ <span class="text-main">HomAid</span>,</span>
                                        </template>

                                        <template v-if="typeSupport == 2">
                                            <span class="f-13 main-black">Chào bạn,</span> <br>
                                            <span class="f-13 main-black">
                                                Khách hàng <span class="f-13 text-main">Phạm Yên</span> vừa cập nhật thông tin dự án <span class="f-13 text-main font-weight-bold"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span>
                                            </span>
                                            <div class="btn-project">
                                                <span>Xem dự án</span>
                                            </div>
                                            <span class="f-13 main-black">Chân thành cám ơn, </span> <br>
                                            <span class="f-13 main-black"> Đội ngũ <span class="text-main">HomAid</span>,</span>
                                        </template>

                                        <template v-if="typeSupport == 3">
                                            <span class="f-13 main-black">Chào bạn,</span> <br>
                                            <span class="f-13 main-black">
                                                Khách hàng <span class="f-13 text-main">Phạm Yên</span>  mời bạn tham gia khảo sát và cập nhật báo giá dự án<span class="f-13 text-main font-weight-bold"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span>
                                            </span>
                                            <div class="btn-project">
                                                <span>Xem yêu cầu khảo sát</span>
                                            </div>
                                            <span class="f-13 main-black">Chân thành cám ơn, </span> <br>
                                            <span class="f-13 main-black"> Đội ngũ <span class="text-main">HomAid</span>,</span>
                                        </template>

                                        <template v-if="typeSupport == 4">
                                            <span class="f-13 main-black">Chào bạn,</span> <br>
                                            <span class="f-13 main-black">
                                                Khách hàng <span class="f-13 text-main">Phạm Yên</span> vừa gửi yêu cầu thượng lượng cho dự án <span class="f-13 text-main font-weight-bold"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span>
                                            </span>
                                            <div class="btn-project">
                                                <span>Xem yêu cầu thương lượng</span>
                                            </div>
                                            <span class="f-13 main-black">Chân thành cám ơn, </span> <br>
                                            <span class="f-13 main-black"> Đội ngũ <span class="text-main">HomAid</span>,</span>
                                        </template>

                                        <template v-if="typeSupport == 5">
                                            <span class="f-13 main-black">Chào bạn,</span> <br>
                                            <span class="f-13 main-black">
                                                Khách hàng <span class="f-13 text-main">Phạm Yên</span> vừa chọn bạn làm đơn vị thi công cho dự án <span class="f-13 text-main font-weight-bold"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span>
                                            </span>
                                            <div class="btn-project">
                                                <span>Xem dự án</span>
                                            </div>
                                            <span class="f-13 main-black">Chân thành cám ơn, </span> <br>
                                            <span class="f-13 main-black"> Đội ngũ <span class="text-main">HomAid</span>,</span>
                                        </template>


                                        <template v-if="typeSupport == 6">
                                            <span class="f-13 main-black">Chào bạn,</span> <br>
                                            <span class="f-13 main-black">
                                                Khách hàng <span class="f-13 text-main">Phạm Yên</span> vừa xác nhận đã thanh toán theo yêu cầu Thanh Toán Đợt 1 cho dự án  <span class="f-13 text-main font-weight-bold"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span>
                                            </span>

                                            <span class="f-13 main-black">Chân thành cám ơn, </span> <br>
                                            <span class="f-13 main-black"> Đội ngũ <span class="text-main">HomAid</span>,</span>
                                        </template>

                                        <template v-if="typeSupport == 7">
                                            <span class="f-13 main-black">Chào bạn,</span> <br>
                                            <span class="f-13 main-black">
                                                Khách hàng <span class="f-13 text-main">Phạm Yên</span> vừa đánh giá chất lượng thi công theo báo cáo tiến độ thi công Tuần 1 cho dự án   <span class="f-13 text-main font-weight-bold"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span>
                                            </span>
                                            <div class="btn-project">
                                                <span>Xem đánh giá</span>
                                            </div>
                                            <span class="f-13 main-black">Chân thành cám ơn, </span> <br>
                                            <span class="f-13 main-black"> Đội ngũ <span class="text-main">HomAid</span>,</span>
                                        </template>

                                        <template v-if="typeSupport == 8">
                                            <span class="f-13 main-black">Chào bạn,</span> <br>
                                            <span class="f-13 main-black">
                                                Khách hàng <span class="f-13 text-main">Phạm Yên</span> vừa kết thúc và hoàn tất đánh giá chất lượng thi công cho dự án <span class="f-13 text-main font-weight-bold"> Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa.</span>
                                            </span>
                                            <div class="btn-project">
                                                <span>Xem đánh giá</span>
                                            </div>
                                            <span class="f-13 main-black">Chân thành cám ơn, </span> <br>
                                            <span class="f-13 main-black"> Đội ngũ <span class="text-main">HomAid</span>,</span>
                                        </template>

                                    </div>
                                    <!-- bottom -->
                                    <div class="content-bottom">
                                        <div class="cover-bttom">
                                            <div class="group-icon">
                                                <img src="@/assets/svg/icon-fb-black.svg" />
                                                <img src="@/assets/svg/icon-linked-black.svg" />
                                                <img src="@/assets/svg/icon-gg-black.svg" />
                                                <img src="@/assets/svg/icon-pinterest-black.svg" />
                                                <img src="@/assets/svg/icon-youtube-black.svg" />
                                            </div>
                                            <p class="coppyright">Copyright © 2017 Epoint. All rights reserved.</p>

                                            <div class="group-address">
                                                <p class="font-weight-bold">Địa chỉ văn phòng</p>
                                                <p>873 Huỳnh Tấn Phát, Q.7, TPHCM</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </template>
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
            objMessage:{
                category:[],
                attachments:[]
            },
            accepFile:["png", "jpg", "tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"],
            currentRoom:null,
            listMess:null,
            listChatDetail:null,
            arrFile:[],
            typeRoom:1, //1,2: chat; 3:support,
            typeSupport:4
        }
    },
    mounted(){
        this.getListMess()
    },
    methods:{
        setTypeRoom(type){
            this.typeRoom = type
        },
        getListMess(){
            this.loader()
            this.$get('member/rooms')
                .then(res => {
                    this.listMess = res.data
                    this.loader(0)
                })
                .catch(err =>{
                    this.loader(0)
            })
        },
        getDetailMess(room){
            this.currentRoom = room
            console.log('currentRoom',this.currentRoom)
            this.$get(`member/room/${room._id}`)
                .then(res => {
                    this.listChatDetail = res.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async sendMessage(){
            try{
                var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
                var obj = {...this.objMessage,room:this.currentRoom._id,attachments:arrFile}
                let res = await this.$post(`member/message`,obj)
                this.objMessage.message = null
                this.arrFile = []
                this.getListMess()
                this.getDetailMess(this.currentRoom)
            }
            catch(err){
                console.log(err)
            }
        },
        findUserChat(arr){
            var res = arr.filter(item => item._id != this.$auth.user._id)
            return res[0]
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
    }
}
</script>