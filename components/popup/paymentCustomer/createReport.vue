<template>
    <Modal ref="modalReportCustomer" id="modal-payment-report">
      <template v-slot:content>
        <div class="modal-contact formCore" >
          <div class="content">
            <p class="title f-20 fw-600" >
                <span class="text-main">{{auction.auctionBy.company}}</span> BÁO CÁO TIẾN ĐỘ THI CÔNG
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
                            <input type="text" required class="form-control" v-model="objReport.nameStaff" />
                        </div>
                    </div>
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Thời gian</span> <span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <input type="text" required class="form-control" v-model="objReport.time" />
                        </div>
                    </div>

                    <div class="row mb-25px">
                        <div class="col-md-3">
                            <span class="key">Nhật ký công việc</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <textarea type="text" required class="form-control" rows="5" v-model="objReport.note"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <span class="key">Hình ảnh đính kèm</span>
                        </div>
                        <div class="col-md-9">
                            <!-- file old -->
                            <div class="row cover-img">
                                <template  v-if="objReport.attachment && objReport.attachment.length">
                                    <template v-for="(item,idx) in objReport.attachment">
                                        <div class="col-6 img" :key="idx+100">
                                            <div
                                                class=" item-img"
                                                :style="{
                                                    'background-image': 'url(' + `${item}` + ')',
                                                }"
                                            >
                                            </div>
                                        </div>
                                    </template>
                                </template>
                            </div>

                        </div>
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
    props:['project','activeReport','auction'],
    data(){
        return{
            acceptFile:['png','jpg','jpeg','tiff'],
            objReport:{
            },
            arrFile:[],
        }
    },
    watch:{
        activeReport(){
            this.objReport.time = 'Tuần ' + Number(this.activeReport)
        }
    },
    methods:{
        async getForm(){
            var fileNew = this.arrFile.length ? await this.uploadFile(this.arrFile) : []
            var fileOld = this.objReport.attachment || []
            var arrFile = fileOld.concat(fileNew)
            var obj = {
                ...this.objReport,
                reportId: this.activeReport-1,
                attachment:arrFile
            }
            this.$emit('createReport',obj)
            this.hide()
        },
        updateReport(obj){
            console.log('report',obj)
            this.objReport = obj
        },
        triggerForm(status){
            this.objReport.status = status
            this.$refs.btnSubmitReport.click()
        },
        getFile(file){
            this.arrFile = this.arrFile.concat(file)
        },
        clearFile(file){
            this.arrFile = this.arrFile.filter(item => item.name !== file.name)
        },
        clearFileOld(file){
            this.objReport.attachment = this.objReport.attachment.filter(item => item !== file)
        },
        show() {
            this.$refs.modalReportCustomer.showModal();
        },
        hide(){
            this.$refs.modalReportCustomer.hideModal()
            this.arrFile = []
        },
    }

}
</script>