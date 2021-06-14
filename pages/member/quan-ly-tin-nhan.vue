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
                                        <div @click="typeRoom = 1" class="item cursor-pointer f-13" :class="typeRoom == 1 ? 'active' : ''" >
                                            Tất cả tin nhắn
                                        </div>
                                        <div @click="typeRoom = 2" class="item cursor-pointer f-13" :class="typeRoom == 2 ? 'active' : '' " >
                                            Tin chưa đọc (<span>2</span>)
                                        </div>
                                        <div @click="typeRoom = 3" class="item cursor-pointer f-13" :class="typeRoom == 3 ? 'active' : ''" >
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
                                </div>
                            </div>
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
                            <template v-else>
                                <div class="contentWrap">
                                    <p>dbc</p>
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
            typeRoom:1, //1,2: chat; 3:support
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