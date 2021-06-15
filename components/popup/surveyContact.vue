<template>
    <Modal ref="popupSurveyContact" id="modal-survey-contact">
      <template v-slot:content>
        <div class="modal-contact formCore" v-if="objProject">
          <div class="content">
            <p class="title f-14" >
                Bạn đã xác nhận yêu cầu khảo sát của khách hàng <span class="text-main">{{objProject.projectOwner.name}}</span>. Nếu có thay đổi về thời gian và địa điểm, vui lòng liên hệ trực tiếp với khách.
            </p>
            <div class="group-infor">
                <div class="row">
                    <div class="col-md-3">
                        <span class="key">Họ Tên:</span>
                    </div>
                    <div class="col-md-9">
                        <span class="value text-red">{{objProject.projectOwner.name}}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <span class="key">Số điện thoại:</span>
                    </div>
                    <div class="col-md-9">
                        <span class="value">BÙI KIM LONG</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <span class="key">Địa chỉ Email:</span>
                    </div>
                    <div class="col-md-9">
                        <span class="value">BÙI KIM LONG</span>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="btn-confirm" @click="hide()">
                    <span>HOÀN TẤT</span>
                </div>
            </div>
          </div>
        </div>
      </template>
    </Modal>
</template>
<script>
export default {
    props:['objProject'],
    methods:{
        show() {
            console.log('objProject',this.objProject)
            this.$refs.popupSurveyContact.showModal();
        },
        hide(){
            this.$refs.popupSurveyContact.hideModal()
        },
    }

}
</script>