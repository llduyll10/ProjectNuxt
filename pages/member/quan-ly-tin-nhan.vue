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
                                                <div class="name f-12">
                                                    {{findUserChat(item.users).name}}
                                                </div>
                                                <div class="company f-12">
                                                    {{item.name}}
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
                                </div>
                            </div>
                            <div class="contentWrap">
                                <div  v-if="currentRoom" class="contentTop d-flex">
                                    <div  class="title">{{currentRoom.name}}</div>
                                    <div class="wrapDate">
                                        <img src="@/assets/svg/point-black.svg" alt="">
                                        <div class="date ml-20px f-12">Đăng ngày  <span>{{$moment(currentRoom.createdDate).format('DD/MM/YYYY')}}</span></div>
                                    </div>
                                </div>
                                <div class="message" v-if="listChatDetail">
                                    <div v-for="(item , i ) in listChatDetail" :key="i+20">
                                        <div class="dateMessage">{{$moment(item.createdDate).format('DD/MM/YYYY, hh:mm A')}}</div>
                                        <!-- It me -->
                                        <template v-if="$auth && $auth.user">
                                            <div v-if="$auth.user._id != item.user._id"  class="send d-flex">
                                                <img :src="item.user.photo" alt="">
                                                <div class="d-flex flex-column">
                                                    <div class="contentSend">{{item.message}}</div>
                                                </div>
                                            </div>
                                            <div v-else class="receive d-flex">
                                                <div class="d-flex flex-column">
                                                    <div class="contentReceive">{{item.message}}</div>
                                                </div>
                                                <img :src="item.user.photo" alt="">
                                            </div>
                                        </template>

                                    </div>
                                </div>
                                <form @submit.prevent="sendMessage" class="wrapFill d-flex">
                                    <input v-model="objMessage.message" type="text" placeholder="Soạn tin nhắn...">
                                    <img src="@/assets/svg/happy.svg" alt="">
                                    <img src="@/assets/svg/file.svg" alt="">
                                    <button  class="sending" type="submit">Gửi tin nhắn</button>
                                </form>
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
            objMessage:{
                category:[],
                attachments:[]
            },
            currentRoom:null,
            listMess:null,
            listChatDetail:null
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
        sendMessage(){
            var obj = {...this.objMessage,room:this.currentRoom._id}
            this.$post(`member/message`,obj)
                .then(res =>{
                    console.log('up mess',res)
                    this.objMessage.message = null
                    this.getListMess()
                    this.getDetailMess(this.currentRoom)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        findUserChat(arr){
            var res = arr.filter(item => item._id != this.$auth.user._id)
            return res[0]
        }
    }
}
</script>