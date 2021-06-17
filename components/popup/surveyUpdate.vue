<template>
    <Modal ref="popupSurveyUpdate" id="modal-survey-update">
      <template v-slot:content>
        <div class="modal-contact formCore" v-if="objCompany">
          <div class="content">
            <p class="title f-14 fw-600" >
                Chọn Công ty cổ phần <span class="text-main">{{objCompany.auctionBy.company}}</span> làm đơn vị thi công và yêu cầu thương lượng
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
                            <span class="key">Soạn tin nhắn</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <textarea v-model="objSurvey.message"
                                    required id="customPlaceholder"
                                    class="form-control fw-600"
                                    rows="5"
                            >
                            </textarea>
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
                            <div class="input-group" >
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
                            <div class="input-group" >
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

                    <template v-if="objCompany.payments.length">
                        <template v-for="(item,idx) in objCompany.payments">
                            <div class="row mb-15px mr-60px" :key="idx+100">
                                <div class="col-md-3">
                                    <span class="key">Thanh toán đợt {{idx+1}}</span>
                                </div>
                                <div class="col-md-3">
                                    <span class="f-13 text-main fw-600">{{item.value}}</span>
                                </div>
                                <div class="col-md-3" >
                                    <span class="key">Thanh toán đợt {{idx+1}}</span><span class="text-red">*</span>
                                </div>
                                <div class="col-md-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                        v-model="item.newValue"
                                    />
                                </div>
                            </div>
                        </template>
                    </template>

                    <div class="row mb-15px mr-60px">
                        <div class="col-md-3">
                            <span class="key">Yêu cầu báo cáo</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <treeselect
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
                        <div class="col-md-9 ">
                            <InputFile ref="akjklak" :accept="acceptFile" key="file" @input="getFile" :multiple="true" :label="'Thêm tài liệu'" />
                        </div>

                        <div class="col-md-3"></div>
                        <div class="col-md-9 " >
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
                <div class="footer">
                    <button type="submit" class="btn-confirm">
                        <span>GỬI YÊU CẦU THƯƠNG LƯỢNG</span>
                    </button>
                </div>
            </form>
          </div>
        </div>
      </template>
    </Modal>
</template>
<script>
export default {
    props:['objCompany','detailProject','rawCategory'],
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
            }
        }
    },
    mounted(){
    },
    methods:{
        async submitForm(){
            try{
                this.loader()
                var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : []

                var arrPayment = []
                this.objCompany.payments.forEach(item => {
                    var obj = {key:item.key, value: item.newValue}
                    arrPayment.push(obj)
                })

                var obj = {
                    ...this.objSurvey,
                    project:this.objCompany.survey[0].project,
                    auction:this.objCompany.survey[0].auction,
                    payments:arrPayment,
                    attachments:arrFile
                }

                let res = await this.$post('member/auction/deal',obj)
                console.log(res)
                this.hide()
                // call api gaaing
                this.$emit('activeCompany')
            }
            catch(err){
                this.loader(0)
                console.log(err)
            }



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
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
    }

}
</script>