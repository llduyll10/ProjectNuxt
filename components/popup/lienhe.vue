<template>
    <Modal ref="modalLien" id="modal-custom-form-contact">
      <template v-slot:content>
        <div class="modal-contact">
           <div class="top">
                <div class="title f-20">
                    Liên hệ trực tiếp với <span>Công ty cổ phần Epoint</span>
                </div>
                <div class="sub f-13">
                    Bạn sẽ tốn <span>3 Tokens</span> khi liên hệ trực tiếp với <span>Công ty cổ phần Epoint</span>
                </div>
           </div>
           <div class="center">
               <div class="name-line">
                   <div class="label">Họ Tên:</div>
                   <div class="name">BÙI KIM LONG</div>
               </div>
               <div class="phone-line">
                   <div class="label">Số điện thoại:</div>
                   <div class="phone">090 465 9518</div>
               </div>
               <div class="email-line">
                   <div class="label">Địa chỉ Email:</div>
                   <div class="email">LONGB@EPOINT.VN</div>
               </div>
           </div>
           <div class="bottom btn-now">
               <div class="submit f-16">HOÀN TẤT</div>
           </div>
        </div>
      </template>
    </Modal>
</template>

<script>
export default {
    methods:{
        show() {
            this.$refs.modalLien.showModal();
        },
        hide(){
            this.$refs.modalLien.hideModal()
        },
    }
}
</script>