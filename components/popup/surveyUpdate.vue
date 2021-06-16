<template>
    <Modal ref="popupSurveyUpdate" id="modal-survey-update">
      <template v-slot:content>
        <div class="modal-contact formCore" v-if="objCompany">
          <div class="content">
            <p class="title f-14" >
                Chọn Công ty cổ phần <span class="text-main">{{objCompany.auctionBy.company}}</span> làm đơn vị thi công và yêu cầu thương lượng
            </p>
            <form @submit.prevent="submitForm()">
                <div class="group-infor">
                    <div class="row mb-15px mr-60px">
                        <div class="col-md-3">
                            <span class="key">Tên dự án:</span>
                        </div>
                        <div class="col-md-9">
                            <span class="f-16" :class="getClassCategory(mapImgFromCategory(rawCategory))">
                                {{detailProject.name}}
                            </span>
                        </div>
                    </div>

                    <div class="row mb-15px mr-60px">
                        <div class="col-md-3">
                            <span class="key">Soạn tin nhắn</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <textarea v-model="objCompany.message"
                                    required id="customPlaceholder"
                                    class="form-control"
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
                            <span class="f-13 text-main">{{formatNamePrice(objCompany.price)}}</span>
                        </div>
                        <div class="col-md-3">
                            <span class="key">Đơn giá thương lượng</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-3 ">
                            <div class="input-group" >
                                <currency-input
                                    type="text"
                                    class="form-control"
                                    required
                                    placeholder="200,000,000"
                                    v-model="objCompany.surveyValue"
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
                            <span class="f-13 text-main">{{objCompany.day}} ngày</span>
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
                                    v-model="objCompany.day"
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
                                    <span class="f-13 text-main">{{item.value}}</span>
                                </div>
                                <div class="col-md-3">
                                    <span class="key">Thanh toán đợt {{idx+1}}</span><span class="text-red">*</span>
                                </div>
                                <div class="col-md-3 ">
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                        placeholder="200,000,000"
                                        v-model="item.value"
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
                                    :value="objCompany.requireReport"
                                    v-model="objCompany.requireReport"
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
                            <!-- Attachment Old -->
                            <template v-if="objCompany.attachments" >
                                <template v-for="(item,idx) in objCompany.attachments">
                                    <p :key="idx + 20" class="f-11 text-main ">
                                        <span v-html="returnTypeFile(item)"></span>
                                        {{spliceURLFile(item,'--')}}
                                        <span class="cursor-pointer ml-5px" @click="clearFileOld(item)">
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

                    <div class="form-group group-checkbox">
                        <b-form-checkbox
                            v-model="objCompany.agree"
                            :checked="objCompany.agree"
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
                        <span>HOÀN TẤT</span>
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
                { id: 1, label: '2 lần 1 tuần' },
                { id: 2, label: '2 lần 1 tuần' },
                { id: 3, label: '2 lần 1 tuần' },
            ],
            acceptFile:["png", "jpg", "jpeg", "tiff", "pdf", "xls", "doc", "ppt", "zip", "rar"],
            arrFile:[],
        }
    },
    methods:{
        submitForm(){
            var obj = {...this.objCompany}
            console.log('obj',obj)
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
            this.objCompany.attachments = this.objCompany.attachments.filter(item => item !== file)
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
    }

}
</script>