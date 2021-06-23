<template>
    <Modal ref="popupSurveyUpdate" id="modal-survey-update">
      <template v-slot:content>
        <div class="modal-contact formCore" v-if="objCompany">
          <div class="content">
            <p v-if="isCompany" class="title f-14 fw-600" >
                Khách hàng <span class="text-main">{{objCompany.projectOwner.name}}</span> đã gửi yêu cầu thương lượng giá/tiến độ với bạn. Bạn sẽ tốn <span class="text-main">500 Tokens</span>  khi xác nhận đồng ý và bắt đầu công trình
            </p>
            <p v-else class="title f-14 fw-600" >
                Chọn <span class="text-main">{{objCompany.auctionBy.company}}</span> làm đơn vị thi công và yêu cầu thương lượng
            </p>
            <form @submit.prevent="submitForm()">
                <div class="group-infor">
                    <div class="row mb-15px mr-60px">
                        <div class="col-md-3">
                            <span class="key">Tên dự án:</span>
                        </div>
                        <div class="col-md-9">
                            <span class="f-16 fw-600" :class="getClassCategory(mapImgFromCategory(rawCategory))">
                                {{detailProject.name}}
                            </span>
                        </div>
                    </div>

                    <div class="row mb-15px mr-60px">
                        <div class="col-md-3">
                            <span v-if="isCompany" class="key">Tin nhắn của khách <span class="text-red">*</span></span>
                            <span v-else class="key">Soạn tin nhắn <span class="text-red">*</span> </span>
                        </div>
                        <div class="col-md-9">
                            <template v-if="(isCompany && objCompany.deal[0]) || surveryUpdate">
                                <textarea v-model="objCompany.deal[0].message"
                                        required id="customPlaceholder"
                                        class="form-control fw-600"
                                        rows="5"
                                        :readonly=!surveryUpdate
                                >
                                </textarea>
                            </template>
                            <template v-else>
                                <textarea v-model="objSurvey.message"
                                        required id="customPlaceholder"
                                        class="form-control fw-600"
                                        rows="5"
                                >
                                </textarea>
                            </template>

                        </div>
                    </div>

                    <div class="row mb-15px mr-60px">
                        <div class="col-md-3">
                            <span class="key">Đơn giá dự thầu</span>
                        </div>
                        <div class="col-md-3">
                            <span class="f-13 text-main fw-600">{{formatNamePrice(objCompany.price)}}</span>
                        </div>
                        <div class="col-md-3">
                            <span class="key">Đơn giá thương lượng</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-3 ">
                            <div v-if="(isCompany && objCompany.deal[0]) || surveryUpdate" class="input-group" >
                                <currency-input
                                    type="text"
                                    class="form-control fw-600"
                                    required
                                    placeholder="200,000,000"
                                    v-model="objCompany.deal[0].price"
                                    :readonly=!surveryUpdate
                                />
                                <div class="input-group-append">
                                    <span class="input-group-text f-12">VND</span>
                                </div>
                            </div>

                            <div v-else class="input-group" >
                                <currency-input
                                    type="text"
                                    class="form-control fw-600"
                                    required
                                    placeholder="200,000,000"
                                    v-model="objSurvey.price"
                                />
                                <div class="input-group-append">
                                    <span class="input-group-text f-12">VND</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-15px mr-60px">
                        <div class="col-md-3">
                            <span class="key">Tiến độ thi công</span>
                        </div>
                        <div class="col-md-3">
                            <span class="f-13 text-main fw-600">{{objCompany.day}} ngày</span>
                        </div>
                        <div class="col-md-3">
                            <span class="key">Tiến độ mong muốn</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-3 ">
                            <div v-if="(isCompany && objCompany.deal[0]) || surveryUpdate" class="input-group" >
                                <input
                                    type="text"
                                    class="form-control"
                                    required
                                    v-model="objCompany.deal[0].day"
                                    :readonly=!surveryUpdate
                                />
                                <div class="input-group-append">
                                    <span class="input-group-text f-12">Ngày</span>
                                </div>
                            </div>

                            <div v-else class="input-group" >
                                <input
                                    type="text"
                                    class="form-control"
                                    required
                                    v-model="objSurvey.day"
                                />
                                <div class="input-group-append">
                                    <span class="input-group-text f-12">Ngày</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Company Or Update Survey -->
                    <template v-if="(isCompany && objCompany.deal[0]) || (surveryUpdate && objCompany.deal[0])">
                        <div class="row mb-15px mr-60px" >
                            <div class="col-6" v-if="objCompany.payments">
                                <template v-for="(item,idx) in objCompany.payments">
                                    <div class="row mb-15px" :key="idx">
                                        <div class="col-6">
                                            <span class="key">Thanh toán đợt {{idx+1}}</span>
                                        </div>
                                        <div class="col-6">
                                            <span class="f-13 text-main fw-600">{{item.value}}</span>
                                        </div>
                                    </div>

                                </template>
                            </div>

                            <div class="col-6" v-if="objCompany.deal[0] &&  objCompany.deal[0].payments">
                                <template v-for="(item,idx) in objCompany.deal[0].payments">
                                    <div class="row mb-15px" :key="idx+10">
                                        <div  class="col-6">
                                            <span class="key">Thanh toán đợt {{idx+1}}</span><span class="text-red">*</span>
                                        </div>
                                        <div class="col-6">
                                            <input
                                                type="text"
                                                class="form-control"
                                                required
                                                v-model="item.value"
                                                :readonly=!surveryUpdate
                                            />
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>

                    <template v-else>
                        <div class="row mb-15px mr-60px" >
                            <div class="col-6" v-if="objCompany.payments">
                                <template v-for="(item,idx) in objCompany.payments">
                                    <div class="row mb-15px" :key="idx">
                                        <div class="col-6">
                                            <span class="key">Thanh toán đợt {{idx+1}}</span>
                                        </div>
                                        <div class="col-6">
                                            <span class="f-13 text-main fw-600">{{item.value}}</span>
                                        </div>
                                    </div>

                                </template>
                            </div>

                            <div class="col-6" >
                                <template v-for="(item,idx) in objCompany.payments">
                                    <div class="row mb-15px" :key="idx+10">
                                        <div  class="col-6">
                                            <span class="key">Thanh toán đợt {{idx+1}}</span><span class="text-red">*</span>
                                        </div>
                                        <div class="col-6">
                                            <input
                                                type="text"
                                                class="form-control"
                                                required
                                                v-model="item.newValue"
                                            />
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>

                    <div class="row mb-15px mr-60px">
                        <div class="col-md-3">
                            <span class="key">Yêu cầu báo cáo</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <treeselect
                                    v-if="isCompany && objCompany.deal[0]"
                                    class="option-search"
                                    :options="optionSearch"
                                    :value="objCompany.deal[0].report"
                                    v-model="objCompany.deal[0].report"
                                    placeholder=""
                                    :clearable=false
                                    disabled
                            />
                            <treeselect
                                    v-else
                                    class="option-search"
                                    :options="optionSearch"
                                    :value="objSurvey.report"
                                    v-model="objSurvey.report"
                                    placeholder=""
                                    :clearable=false
                            />
                        </div>
                    </div>

                    <div class="row mb-15px mr-60px">
                        <div class="f-13  col-md-3 col-sm-12 ">
                            <span class="key">Tài liêu đính kèm:</span>
                        </div>
                        <div v-if="!isCompany" class="col-md-9 ">
                            <InputFile ref="akjklak" :accept="acceptFile" key="file" @input="getFile" :multiple="true" :label="'Thêm tài liệu'" />
                        </div>

                        <div v-if="!isCompany" class="col-md-3"></div>
                        <div class="col-md-9 " >
                             <template v-if="(isCompany &&  objCompany.deal[0] && objCompany.deal[0].attachments) || surveryUpdate">
                                <template v-for="(item,idx) in objCompany.deal[0].attachments">
                                     <p :key="idx" class="f-11 text-main ">
                                        <span v-html="returnTypeFile(item)"></span>
                                         {{spliceURLFile(item,'--')}}
                                        <span v-if="surveryUpdate" class="cursor-pointer ml-5px" @click="clearFileOld(item)">
                                            <i class="fas fa-times text-red"></i>
                                        </span>
                                    </p>
                                </template>
                            </template>
                            <!-- Attachment New -->
                            <template v-if="arrFile.length" >
                                <template v-for="(item,idx) in arrFile">
                                    <p :key="idx + 30" class="f-11 text-main ">
                                        <span v-html="returnTypeFile(item.name)"></span>
                                        {{item.name}}
                                        <span class="cursor-pointer ml-5px" @click="clearFile(item)">
                                            <i class="fas fa-times text-red"></i>
                                        </span>
                                    </p>
                                </template>
                            </template>
                        </div>
                    </div>

                    <div v-if="isCompany" class="row mb-15px mr-60px">
                        <div class="col-md-3">
                            <span  class="key">Phản hồi của bạn<span class="text-red">*</span></span>
                        </div>
                        <div class="col-md-9">
                            <template >
                                <textarea v-model="objSurvey.feedback"
                                        required
                                        id="customPlaceholder"
                                        class="form-control fw-600"
                                        rows="5"
                                >
                                </textarea>
                            </template>
                        </div>
                    </div>

                    <div class="form-group group-checkbox mb-0">
                        <b-form-checkbox
                            v-model="objSurvey.agree"
                            :checked="objSurvey.agree"
                            name="checkbox-agree"
                            required
                            class="f-13"
                            >
                            Tôi đồng ý với <span class="text-main">điều khoản</span> của Econs <span style="color:red">*</span>
                        </b-form-checkbox>
                    </div>

                </div>
                <div class="footer" >
                    <template v-if="isCompany">
                        <div class="d-flex">
                            <button ref="btnConfirm" type="submit" class="d-none"></button>
                            <button type="button" @click="confirmSurvey('ACCEPT')" class="btn-confirm mr-15px">
                                <span>ĐỒNG Ý VÀ BẮT ĐẦU DỰ ÁN</span>
                            </button>
                            <button type="button" @click="confirmSurvey('CANCEL')" class="btn-confirm cancel">
                                <span>TỪ CHỐI YÊU CẦU THƯƠNG LƯỢNG</span>
                            </button>
                        </div>
                    </template>
                    <template v-else>
                        <button type="submit" class="btn-confirm">
                            <span>GỬI YÊU CẦU THƯƠNG LƯỢNG</span>
                        </button>
                    </template>

                </div>
            </form>
          </div>
        </div>
      </template>
    </Modal>
</template>
<script>
export default {
    props:['objCompany','detailProject','rawCategory','isCompany', 'surveryUpdate'],
    data(){
        return{
            optionSearch:[
                { id: 1, label: '1 tuần 1 lần' },
                { id: 2, label: '2 tuần 1 lần' },
                { id: 4, label: '1 tháng 1 lần' },
            ],
            acceptFile:["png", "jpg", "jpeg", "tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"],
            arrFile:[],
            objSurvey:{
                message:'',
                report:1,
                agree:false
            },
            statusCallAPI:''
        }
    },
    mounted(){
    },
    methods:{
        async submitForm(){
            try{
                // this.loader()


                var arrPayment = []

                if(this.surveryUpdate){
                    var fileNew = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
                    var fileOld = this.objCompany.deal[0].attachments || []
                    var arrFile = fileOld.concat(fileNew)
                    this.objCompany.deal[0].payments.forEach(item => {
                        var obj = {key:item.key, value: item.value}
                        arrPayment.push(obj)
                    })
                    var obj = {
                    ...this.objCompany.deal[0],
                    project:this.objCompany.survey[0].project,
                    auction:this.objCompany.survey[0].auction,
                    payments:arrPayment,
                    attachments:arrFile
                }
                }
                else{
                    this.objCompany.payments.forEach(item => {
                        var obj = {key:item.key, value: item.newValue}
                        arrPayment.push(obj)
                    })
                    var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
                    var obj = {
                    ...this.objSurvey,
                    project:this.objCompany.survey[0].project,
                    auction:this.objCompany.survey[0].auction,
                    payments:arrPayment,
                    attachments:arrFile
                }
                }

                let url = ''
                if(this.statusCallAPI == 'ACCEPT'){
                    url = 'member/auction/deal/confirmed'
                }
                else if(this.statusCallAPI == 'CANCEL'){
                    url = 'member/auction/deal/cancel'
                }
                else{
                    url = 'member/auction/deal'
                }


                let res = await this.$post(url,obj)
                console.log(res)
                this.hide()
                this.arrFile = []
                if(this.statusCallAPI == 'ACCEPT' || this.statusCallAPI == 'CANCEL')
                {
                    this.$emit('getListParent')
                }
                else{
                    this.$emit('activeCompany')
                }
            }
            catch(err){
                this.loader(0)
                console.log(err)
            }



        },
        confirmSurvey(status){
            this.statusCallAPI = status
            this.$refs.btnConfirm.click()
        },
        show() {
            console.log('objProject',this.objCompany)
            console.log('objProject',this.detailProject)
            console.log('objProject',this.rawCategory)
            this.$refs.popupSurveyUpdate.showModal();
        },
        hide(){
            this.$refs.popupSurveyUpdate.hideModal()
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
         clearFileOld(file){
            this.objCompany.deal[0].attachments = this.objCompany.deal[0].attachments.filter(item => item !== file)
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
    }

}
</script>