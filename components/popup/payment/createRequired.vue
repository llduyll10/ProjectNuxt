<template>
    <Modal ref="createRequired" id="modal-payment-required">
      <template v-slot:content>
        <div class="modal-contact formCore" >
          <div class="content">
            <p class="title f-20 fw-600" >
                TẠO YÊU CẦU THANH TOÁN ĐỢT 1
            </p>
            <form action="" @submit.prevent="sendRequirePayment()">
                <div class="group-infor no-border pr-60px">
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Tên dự án</span>
                        </div>
                        <div class="col-md-9">
                            <span class="value" :class="getClassCategory(mapImgFromCategory(project.category))">
                                {{project.name}}
                            </span>
                        </div>
                    </div>
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Nhân viên yêu cầu</span> <span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <input type="text" required class="form-control" v-model="objPayment.nameStaff" />
                        </div>
                    </div>
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Giá trị thanh toán</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <div class="input-group ">
                                <currency-input
                                    type="text"
                                    class="form-control"
                                    required
                                    v-model="objPayment.price"
                                />
                                <div class="input-group-append">
                                    <span class="input-group-text f-12">VND</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Ghi chú thanh toán</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <textarea type="text" required class="form-control" rows="5" v-model="objPayment.note"></textarea>
                        </div>
                    </div>
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Tên ngân hàng</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <input type="text" required class="form-control" v-model="objPayment.nameBank" />
                        </div>
                    </div>
                    <div class="row mb-15px">
                        <div class="col-md-3">
                            <span class="key">Tên chủ tài khoản</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <input type="text" required class="form-control" v-model="objPayment.nameAccountBank" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <span class="key">Số tài khoản</span><span class="text-red">*</span>
                        </div>
                        <div class="col-md-9">
                            <input type="text" required class="form-control" @keypress="isNumber($event)" v-model="objPayment.accountNumber" />
                        </div>
                    </div>
                </div>
                <div class="footer d-flex">
                    <button ref="btnSubmit" class="d-none" type="submit"></button>
                    <div @click="triggerForm('CREATE')" class="btn-confirm flex-1">
                        <span>TẠO YÊU CẦU THANH TOÁN</span>
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
    props:['project'],
    data(){
        return{
            objPayment:{}
        }
    },
    methods:{
        sendRequirePayment(){
            console.log('sendRequirePayment',this.objPayment)
            this.$emit('requiredPayment',this.objPayment)
            this.hide()
        },
        updateObjectRequired(obj){
            this.objPayment = {...obj}
        },
        triggerForm(status){
            this.$refs.btnSubmit.click()
        },
        show() {
            this.$refs.createRequired.showModal();
        },
        hide(){
            this.$refs.createRequired.hideModal()
        },
    }

}
</script>