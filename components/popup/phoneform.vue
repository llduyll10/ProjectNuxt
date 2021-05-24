<template>
    <Modal ref="modalPhoneForm" id="modal-change-phone-form-submit">
      <template v-slot:content>
        <div class="modal-contact formCore">
          <div class="content">
            <p class="title f-20 mb-10px">Vui lòng nhập số điện thoại của bạn</p>
            <form @submit.prevent="showStepTwo ? verifyWithOTP() : saveConfirm()" class="group-content mt-28px">
              <div v-if="showStepTwo" class="form-group row">
                  <label class="f-13 col-md-3 col-sm-12 mt-8px">
                    Mã code
                    <span style="color:red">*</span>
                </label>
                 <div class=" form-group col-md-9 col-sm-12">
                  <input v-on:keyup="nextCode($event)" @keypress="isNumber($event)" v-model="codeObj.code1" type="text" class="form-control verifyOTP" required maxlength="1">
                  <input v-on:keyup="nextCode($event)" @keypress="isNumber($event)" v-model="codeObj.code2" type="text" class="form-control verifyOTP" required maxlength="1">
                  <input v-on:keyup="nextCode($event)" @keypress="isNumber($event)" v-model="codeObj.code3" type="text" class="form-control verifyOTP" required maxlength="1">
                  <input v-model="codeObj.code4" @keypress="isNumber($event)" type="text" class="form-control verifyOTP" required maxlength="1">
                </div>
              </div>
              <div v-else class="form-group row">
                    <label class="f-13 col-md-3 col-sm-12 mt-8px">
                      Số điện thoại
                      <span style="color:red">*</span>
                  </label>
                  <input required v-model="activePhone" class="form-control col-md-9 col-sm-12" placeholder="Nhập số điện thoại cần xác thực">
                  <b-alert v-if="showAlert" sm show variant="danger">{{msg}}</b-alert>
              </div>
                <div class="form-group mb-40px group-checkbox">
                    <b-form-checkbox
                        v-model="agree"
                        name="checkbox-agree"
                        required
                        >
                        Tôi đồng ý với <span>điều khoản</span> của Econs <span style="color:red">*</span>
                    </b-form-checkbox>
                </div>
                <div class="group-btn row">

                    <div class="col-md-12">
                        <button  type="submit" class="btn-now">
                          {{showStepTwo ? 'Xác nhận' : 'GỬI MÃ OTP XÁC THỰC'}}
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
  props:['phone'],
  data(){
    return{
        agree:false,
        options: this.getCategory(),
        date: new Date(),
        activePhone:this.phone,
        showStepTwo:false,
        showAlert:false,
        msg:'',
        codeObj:{}
    }
    },
    mounted(){

    },
    methods:{
        saveConfirm(){
          let obj = {phone: this.activePhone}
          // call api here
          this.$post('user/verify/phone',obj)
              .then(res => {
                if(res.data.status == true){
                  this.showStepTwo = true
                  this.agree = false
                  this.msg = res.data.msg
                }
                else{
                  this.showAlert = true
                }
              })
              .catch(err => {
                console.log(err)
              })
        },
        verifyWithOTP(){

          let obj = {
                      phone:this.activePhone,
                      verifiedCode:this.getCodeObj()
                    }
          this.$post('user/verify/phone/code',obj)
              .then(res => {
                if(res.data.status){
                   this.$emit('doneConfirmPhone');
                }
                else{
                  this.showAlert = true
                  this.msg = res.data.msg
                }
              })
              .catch(err =>{
                console.log(err)
              })
        },
         getCodeObj(){
          var code = '';
          var object = this.codeObj;
            for (const key in object) {
              if (Object.hasOwnProperty.call(object, key)) {
                code = code + object[key]+'';
              }
            }
            return code;
        },
        nextCode(evt){
          const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
          const keyPressed = evt.key;
          if (!keysAllowed.includes(keyPressed)){
            return
          }
          evt.target.nextElementSibling.focus()
        },
        show() {
            this.$refs.modalPhoneForm.showModal();
        },
        hide(){
            this.$refs.modalPhoneForm.hideModal()
        },
    }
}
</script>