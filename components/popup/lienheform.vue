<template>
    <Modal ref="modalLienForm" id="modal-cotact-form-submit">
      <template v-slot:content>
        <div class="modal-contact formCore" v-if="objInfor">
          <div class="content">
            <p class="title f-20" :class="isService ? '' : 'hide-border' ">
                Gửi tin nhắn cho
                <span v-if="isService">{{objInfor.auctionBy.company || objInfor.auctionBy.name}}</span>
                <span v-else>Công ty cổ phần Epoint</span>
            </p>
            <p v-if="!isService" class="f-13 description pl-60px">Vui lòng điền vào thông tin dưới đây. Bạn sẽ tốn
                <span>3 Tokens</span> khi gửi tin nhắn cho
                <span v-if="isService">{{objInfor.auctionBy.company || objInfor.auctionBy.name}}</span>
                <span v-else>Công ty cổ phần Epoint</span>
            </p>
            <form @submit.prevent="sendMessage()" class="group-content mt-20px">
                <div v-if="isService" class="form-group row">
                     <label class="f-13 col-md-3 col-sm-12 ">
                        Tên dự án
                    </label>
                    <span class="col-md-9 col-sm-12 pl-0 name-project"
                        :class="getClassCategory(mapImgFromCategory(rawCategory))"
                    >
                        {{title}}
                    </span>
                </div>
                <div v-else class="form-group row">
                        <label class="f-13 col-md-3 col-sm-12 ">
                        Dịch vụ yêu cầu
                        <span style="color:red">*</span>
                        </label>
                        <treeselect
                            class="pl-0 pr-0 col-md-9 col-sm-12"
                            :options="options"
                            :disable-branch-nodes="true"
                            :clearable=false
                            :value="objResearch.category"
                            v-model="objResearch.category"
                            :multiple="true"
                            required
                            placeholder="Chọn dịch vụ"
                        />
                </div>
                <div class="form-group row">
                        <label class="f-13 col-md-3 col-sm-12 ">
                        Soạn tin nhắn
                        <span style="color:red">*</span>
                        </label>
                        <textarea required id="customPlaceholder" class="form-control col-md-9 col-sm-12" rows="5"
                            :placeholder="placeholder"
                            v-model="objResearch.message"
                        >
                        </textarea>
                </div>
                <div class="form-group row">
                    <label class="f-13  col-md-3 col-sm-12 mt-1">
                        Tài liệu đính kèm
                    </label>
                    <div class="col-md-9 col-sm-12 pl-0">
                        <InputFile :accept="accepFile" @input="getFile" :multiple="true" :label="'Thêm tài liệu'"/>
                            <!-- file -->
                            <div class="col-md-3" v-if="arrFile.length"></div>
                            <div class="col-md-9 pl-0" v-if="arrFile.length">
                                <template v-for="(item,idx) in arrFile">
                                    <p :key="idx" class="f-11 text-main ">
                                        <span v-html="returnTypeFile(item.name)" class="mr-5px"></span>
                                        {{item.name}}
                                        <span class="cursor-pointer ml-5px" @click="clearFile(item)">
                                            <i class="fas fa-times text-red"></i>
                                        </span>
                                    </p>
                                </template>
                            </div>
                    </div>
                </div>
                <div class="form-group mb-50px group-checkbox d-flex">
                    <b-form-checkbox
                        v-model="objResearch.agree"
                        name="checkbox-agree"
                        required
                    >
                    </b-form-checkbox>
                     <span class="f-12 main-black mt-2px ml-5px">Tôi đồng ý với <span class="main-color">điều khoản</span> của Econs <span style="color:red">*</span></span>
                </div>
                <div class="group-btn row">
                    <div v-if="!$auth.loggedIn"  class="col-md-12">
                        <button @click="hide()" type="button" class="btn-now">
                            VUI LÒNG ĐĂNG NHẬP
                        </button>
                    </div>
                    <div v-else class="col-md-12">
                        <button type="submit" class="btn-now">
                            GỬI TIN NHẮN
                        </button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </template>
    </Modal>
</template>

<script>
export default {
    props:['isService','title','rawCategory'],
    data(){
        return{
            objResearch:{
                agree:false
            },
            objInfor:null,
            arrFile:[],
            accepFile:["png", "jpg", "jpeg" , "tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"],
            options: this.getCategory(),
            date: new Date(),
            placeholder:'Xin chào, mình có xem qua hồ sơ năng lực của công ty. Mình cần công ty tư vấn hỗ trợ xây dựng nhà phố 1 trệt 4 lầu tại Gò Vấp Diện tích đất: 5x20 Ngân sách dự trù: 3 tỷ Mong nhận được phản hồi sớm từ công ty'
        }
    },
    mounted(){
    },
    methods:{
        async sendMessage(){
            try{
                this.loader()
                var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
                var obj = {
                            ...this.objResearch,
                            attachments:arrFile,
                            to: this.isService ? this.objInfor.auctionBy._id : this.objInfor._id,
                            title: this.isService ? (this.objInfor.auctionBy.company ? this.objInfor.auctionBy.company : this.objInfor.auctionBy.name) : (this.objInfor.company ? this.objInfor.company : this.objInfor.name)
                        }
                let res = await this.$post(`/member/rooms`,obj)
                this.loader(0)
                this.resetForm()
                this.hide()
            }
            catch(err){
                console.log(err)
                this.loader(0)
            }

        },
        resetForm(){
            this.objResearch = {}
            this.arrFile = []
            this.objInfor = null
        },
        getInforPerchant(infor){
            this.objInfor = infor
            console.log('ingo',infor)
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        show() {
            this.$refs.modalLienForm.showModal();
        },
        hide(){
            this.$refs.modalLienForm.hideModal()
        },
    }
}
</script>