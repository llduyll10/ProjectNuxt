<template>
    <Modal ref="popupSurveyContact" id="modal-survey-contact">
      <template v-slot:content>
        <div class="modal-contact formCore" v-if="objConfirm">
          <div class="content">
            <p class="title f-14" >
                Bạn đã xác nhận yêu cầu khảo sát của khách hàng <span class="text-main">{{objConfirm.name}}</span>. Nếu có thay đổi về thời gian và địa điểm, vui lòng liên hệ trực tiếp với khách.
            </p>
            <div class="group-infor">
                <div class="row">
                    <div class="col-md-3">
                        <span class="key">Họ Tên:</span>
                    </div>
                    <div class="col-md-9">
                        <span class="value text-red">{{objConfirm.name}}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <span class="key">Số điện thoại:</span>
                    </div>
                    <div class="col-md-9">
                        <span class="value">{{objConfirm.phone}}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <span class="key">Địa chỉ Email:</span>
                    </div>
                    <div class="col-md-9">
                        <span class="value">{{objConfirm.email}}</span>
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
    props:['objConfirm'],
    methods:{
        show() {
            console.log('objProject',this.objConfirm)
            this.$refs.popupSurveyContact.showModal();
        },
        hide(){
            this.$refs.popupSurveyContact.hideModal()
        },
    }

}
</script>