<template>
    <Modal ref="modalLien" id="modal-select-bank">
      <template v-slot:content>
        <div class="modal-contact">
           <div class="top border-0">
                <div class="title f-20 text-main">
                    Chuyển khoản ngân hàng
                </div>
                <div class="sub f-13">
                    Vui lòng ghi rõ gói <span class="f-bold">Token</span> bạn chọn và ID tài khoản <span>0123456</span> trong nội dung chuyển khoản
                </div>
           </div>
           <div class="form-group mt-16px mb-24px">
                  <b-form-select class="form-control col-12" v-model="bankSelected" :options="options"></b-form-select>
              </div>
           <div class="center border-0 p-0">
               <div class="name-line">
                   <div class="label">Chủ tài khoản::</div>
                   <div class="name">BÙI KIM LONG</div>
               </div>
               <div class="phone-line">
                   <div class="label">Số tài khoản:</div>
                   <div class="phone">12345678910</div>
               </div>
           </div>
           <div class="bottom btn-now pt-16px">
               <div class="submit f-16">OK, TÔI ĐỒNG Ý!</div>
           </div>
        </div>
      </template>
    </Modal>
</template>

<script>
export default {
    data(){
        return{
            bankSelected: 1,
            options: [{
                value: 1,
                text: 'NGÂN HÀNG THƯƠNG MẠI TECHCOMBANK, CN QUẬN 7'
            }],
        }
    },
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