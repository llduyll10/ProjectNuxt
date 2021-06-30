<template>
    <Modal ref="modalCreateReport" id="modal-payment-report">
      <template v-slot:content>
        <div class="modal-contact formCore" >
          <div class="content">
            <p class="title f-20 fw-600" >
                TẠO BÁO CÁO TIẾN ĐỘ THI CÔNG {{activeReport}}
            </p>
            <form action="" @submit.prevent="getForm()">
                <div class="group-infor no-border pr-60px">
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Tên dự án</span>
                        </div>
                        <div class="col-md-9">
                            <span class="value text-red"  :class="getClassCategory(mapImgFromCategory(project.category))">
                                {{project.name}}
                            </span>
                        </div>
                    </div>
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Nhân viên báo cáo</span> <span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <input type="text" required class="form-control" v-model="objPayment.nameStaff" />
                        </div>
                    </div>
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Thời gian</span> <span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <input type="text" required class="form-control" v-model="objPayment.time" />
                        </div>
                    </div>

                    <div class="row mb-25px">
                        <div class="col-md-3">
                            <span class="key">Nhật ký công việc</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <textarea type="text" required class="form-control" rows="5" v-model="objPayment.note"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <span class="key">Hình ảnh đính kèm</span>
                        </div>
                        <div class="col-md-9">
                            <InputFile  :accept="acceptFile" key="file" @input="getFile" :multiple="true" :label="'Thêm hình ảnh'" />
                            <div class="col-md-3" v-if="arrFile.length"></div>
                            <div class="col-md-9 pl-0" v-if="arrFile.length">
                                <template v-for="(item,idx) in arrFile">
                                    <p :key="idx" class="f-11 text-main ">
                                        <span class="mr-5px" v-html="returnTypeFile(item.name)"></span>
                                        {{item.name}}
                                        <span class="cursor-pointer ml-5px" @click="clearFile(item)">
                                            <i class="fas fa-times text-red"></i>
                                        </span>
                                    </p>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer d-flex">
                    <button ref="btnSubmitReport" class="d-none" type="submit"></button>
                    <div @click="triggerForm('OK')" class="btn-confirm flex-1">
                        <span>TẠO BÁO CÁO THI CÔNG</span>
                    </div>
                    <div @click="triggerForm('DRAFT')" class="btn-confirm update flex-1 ml-25px" >
                        <span>LƯU BẢN NHÁP</span>
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
    props:['project','activeReport'],
    data(){
        return{
            acceptFile:['png','jpg','jpeg','tiff'],
            objPayment:{
            },
            arrFile:[],
        }
    },
    watch:{
        activeReport(){
            this.objPayment.time = 'Tuần ' + Number(this.activeReport)
        }
    },
    methods:{
        async getForm(){
            var arrFile = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
            var obj = {
                ...this.objPayment,
                reportId: this.activeReport-1,
                attachment:arrFile
            }
            console.log('getForm',obj)
        },
        triggerForm(status){
            this.objPayment.status = status
            this.$refs.btnSubmitReport.click()
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        show() {
            this.$refs.modalCreateReport.showModal();
        },
        hide(){
            this.$refs.modalCreateReport.hideModal()
        },
    }

}
</script>