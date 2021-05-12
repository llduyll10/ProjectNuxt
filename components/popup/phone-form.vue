<template>
    <Modal ref="modalPhoneForm" id="modal-change-phone-form-submit">
      <template v-slot:content>
        <div class="modal-contact formCore">
          <div class="content">
            <p class="title f-20 mb-10px">Vui lòng nhập số điện thoại của bạn</p>
            <form @submit.prevent="getForm()" class="group-content mt-36px">
              <div class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 mt-8px">
                      Số điện thoại
                      <span style="color:red">*</span>
                  </label>
                  <input class="form-control col-md-9 col-sm-12" placeholder="Nhập số điện thoại cần xác thực">

              </div>
                <div class="åçform-group mb-40px group-checkbox">
                    <b-form-checkbox
                        v-model="objResearch.status"
                        name="checkbox-agree"
                        required
                        
                        >
                        Tôi đồng ý với <span>điều khoản</span> của Econs <span style="color:red">*</span>
                    </b-form-checkbox>
                </div>
                <div class="group-btn row">
                    <div class="col-md-12">
                        <button type="submit" class="btn-now">
                        GỬI MÃ OTP XÁC THỰC
                        </button>
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
  data(){
    return{
        objResearch:{
            category:1,
            status:false
        },
        options: this.getCategory(),
        date: new Date(),
    }
    },
    mounted(){
        var textAreas = document.getElementsByTagName('textarea');
        Array.prototype.forEach.call(textAreas, function(elem) {
            elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
        });
    },
    methods:{
        show() {
            this.$refs.modalPhoneForm.showModal();
        },
        hide(){
            this.$refs.modalPhoneForm.hideModal()
        },
    }
}
</script>