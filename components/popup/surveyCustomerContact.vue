<template>
    <Modal ref="popupSurveyContact" id="modal-survey-customer-contact">
      <template v-slot:content>
        <div class="modal-contact formCore" v-if="objConfirm">
          <div class="content">
            <p class="title f-14" >
                Bạn đã yêu cầu <span class="text-main">{{objConfirm.auctionBy.company}}</span> khảo sát và cập nhật báo giá. Nếu có thay đổi về thời gian và địa điểm, vui lòng liên hệ trực tiếp với công ty.
            </p>
            <div class="group-infor">
                <div class="row mb-15px">
                    <div class="col-md-3">
                        <span class="key">Họ Tên:</span>
                    </div>
                    <div class="col-md-9">
                        <span class="value text-red">{{objConfirm.auctionBy.name}}</span>
                    </div>
                </div>
                <div class="row mb-15px">
                    <div class="col-md-3">
                        <span class="key">Số điện thoại:</span>
                    </div>
                    <div class="col-md-9">
                        <span class="value">{{objConfirm.phone || '090 465 9518'}}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <span class="key">Địa chỉ Email:</span>
                    </div>
                    <div class="col-md-9">
                        <span class="value">{{objConfirm.email || 'LONGB@EPOINT.VN'}}</span>
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