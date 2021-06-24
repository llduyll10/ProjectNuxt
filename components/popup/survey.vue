<template>
    <Modal ref="popupSurvey" id="modal-survey">
      <template v-slot:content>
        <div class="modal-contact formCore" v-if="objInfor">
          <div class="content">
            <p v-if="isCancel" class="title f-19 isCancel" >
                Huỷ yêu cầu <span class="text-main">{{objInfor.auctionBy.company || objInfor.auctionBy.name}}</span> khảo sát hiện trạng và gửi báo giá cuối cùng
            </p>
            <p v-else class="title f-20" >
                CHỌN <span>{{objInfor.auctionBy.company || objInfor.auctionBy.name}}</span> KHẢO SÁT VÀ CẬP NHẬT GIÁ CẢ
            </p>
            <form @submit.prevent="sendMessage()" class="group-content mt-20px">
                <div class="form-group row">
                     <label class="f-13 col-md-3 col-sm-12 ">
                        Tên dự án
                    </label>
                    <span class="col-md-9 col-sm-12 pl-0 name-project"
                        :class="getClassCategory(mapImgFromCategory(rawCategory))"
                    >
                        {{detailProject.name}}
                    </span>
                </div>
                <div class="form-group row">
                        <label class="f-13 col-md-3 col-sm-12 ">
                        Soạn tin nhắn
                        <span style="color:red">*</span>
                        </label>
                        <textarea required id="customPlaceholder" class="form-control col-md-9 col-sm-12" rows="5"
                            :placeholder="placeholder"
                            v-model="objResearch.message"
                            :readonly="isCancel"
                        >
                        </textarea>
                </div>
                 <div class="form-group row">
                        <label class="f-13 col-md-3 col-sm-12 ">
                            Địa điểm khảo sát
                            <span style="color:red">*</span>
                        </label>
                        <input type="text"
                            class="form-control col-md-9 col-sm-12"
                            v-model="objResearch.address"
                            placeholder="Nhập địa chỉ công trình"
                            required
                            :readonly="isCancel"
                        >
                </div>
                 <div class="form-group row">
                        <label class="f-13 col-md-3 col-sm-12 ">
                            Thời gian khảo sát
                            <span style="color:red">*</span>
                        </label>
                        <div class="d-flex">
                            <template v-if="isCancel">
                                <div class="input-group custom-input-calendar" style="min-width:170px">
                                    <input type="text"
                                            class="form-control"
                                            :value="$moment(objResearch.date).format('DD/MM/YYYY')"
                                            readonly
                                            required>
                                    <div class="input-group-append">
                                        <span :class="isCancel ? 'disabled' : ''" class="input-group-text custom-time"><i class="fas fa-calendar-day"></i></span>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <v-date-picker
                                    ref="calendar"
                                    v-model="objResearch.date"
                                    :masks="{input: 'DD/MM/YYYY'}"
                                    :model-config="{type: 'number',}"
                                    >
                                    <template v-slot="{ inputValue, inputEvents }">
                                        <div class="input-group custom-input-calendar">
                                            <input type="text"
                                                    class="form-control"
                                                    :value="inputValue"
                                                    v-on="inputEvents"
                                                    :readonly="isCancel"
                                                    required>
                                            <div class="input-group-append" @click="triggerCalendar()">
                                                <span :class="isCancel ? 'disabled' : ''" class="input-group-text custom-time"><i class="fas fa-calendar-day"></i></span>
                                            </div>
                                        </div>
                                    </template>
                                </v-date-picker>
                            </template>
                            <input type="time" v-model="objResearch.time" :readonly="isCancel" class="ml-20px form-control">
                        </div>
                </div>
                <div class="form-group row">
                    <label class="f-13  col-md-3 col-sm-12 mt-1">
                        Tài liệu đính kèm
                    </label>
                    <div class="col-md-9 col-sm-12 pl-0">
                        <InputFile v-if="!isCancel" :accept="accepFile" @input="getFile" :multiple="true" :label="'Thêm tài liệu'"/>
                            <!-- new file file -->
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
                            <!-- old file -->
                            <div class="col-md-3" v-if="isCancel && objInfor.survey[0].attachments"></div>
                            <div class="col-md-9 pl-0" v-if="isCancel && objInfor.survey[0].attachments">
                                <template v-for="(item,idx) in objInfor.survey[0].attachments">
                                    <p :key="idx" class="f-11 text-main ">
                                        <span v-html="returnTypeFile(item)" class="mr-5px"></span>
                                         {{spliceURLFile(item,'--')}}
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
                        <button type="submit" class="btn-now" :class="isCancel ? 'delete' : ''">
                            {{isCancel ? `HUỶ YÊU CẦU KHẢO SÁT` :`CHỌN VÀ GỬI YÊU CẦU KHẢO SÁT`}}
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
    props:['isService','detailProject','rawCategory'],
    data(){
        return{
            objResearch:{
                agree:false,
                date:new Date().getTime(),
            },
            objInfor:null,
            arrFile:[],
            accepFile:["png", "jpg", "jpeg" , "tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"],
            options: this.getCategory(),
            date: new Date(),
            placeholder:'1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn\n2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất.\n3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác',
            isCancel:false
        }
    },
    mounted(){
    },
    methods:{
        triggerCalendar(){
            this.$refs.calendar.showPopover()
        },
        async sendMessage(){
            try{
                this.loader()
                var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
                var obj = {
                            ...this.objResearch,
                            attachments:arrFile,
                            project: this.detailProject._id,
                            auction: this.objInfor._id
                        }
                if(this.isCancel){
                    let res = await this.$post(`member/survey/cancel`,obj)
                    this.$notify({ group: 'all', text:`Bạn đã huỷ yêu cầu khảo sát với ${this.objInfor.auctionBy.company || this.objInfor.auctionBy.name}`,  type: 'dark'})
                }
                else{
                    let res = await this.$post('member/survey',obj)

                }
                this.$emit('activeCompany', true)
                this.resetForm()
                this.loader(0)
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
        },
        setCancelPopup(status){
            this.isCancel = status
            if(status){
                this.objResearch = this.objInfor.survey[0]
            }
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        show() {
            this.$refs.popupSurvey.showModal();
        },
        hide(){
            this.$refs.popupSurvey.hideModal()
        },
    }
}
</script>