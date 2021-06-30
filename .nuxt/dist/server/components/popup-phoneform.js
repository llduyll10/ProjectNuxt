exports.ids = [30];
exports.modules = {

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/phoneform.vue?vue&type=template&id=5384b0fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalPhoneForm",attrs:{"id":"modal-change-phone-form-submit"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 mb-10px"},[_vm._v("Vui lòng nhập số điện thoại của bạn")]),_vm._v(" "),_c('form',{staticClass:"group-content mt-28px",on:{"submit":function($event){$event.preventDefault();_vm.showStepTwo ? _vm.verifyWithOTP() : _vm.saveConfirm()}}},[(_vm.showStepTwo)?_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 mt-8px"},[_vm._v("\n                Mã code\n                "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-9 col-sm-12"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.codeObj.code1),expression:"codeObj.code1"}],staticClass:"form-control verifyOTP",attrs:{"type":"text","required":"","maxlength":"1"},domProps:{"value":(_vm.codeObj.code1)},on:{"keyup":function($event){return _vm.nextCode($event)},"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.codeObj, "code1", $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.codeObj.code2),expression:"codeObj.code2"}],staticClass:"form-control verifyOTP",attrs:{"type":"text","required":"","maxlength":"1"},domProps:{"value":(_vm.codeObj.code2)},on:{"keyup":function($event){return _vm.nextCode($event)},"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.codeObj, "code2", $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.codeObj.code3),expression:"codeObj.code3"}],staticClass:"form-control verifyOTP",attrs:{"type":"text","required":"","maxlength":"1"},domProps:{"value":(_vm.codeObj.code3)},on:{"keyup":function($event){return _vm.nextCode($event)},"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.codeObj, "code3", $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.codeObj.code4),expression:"codeObj.code4"}],staticClass:"form-control verifyOTP",attrs:{"type":"text","required":"","maxlength":"1"},domProps:{"value":(_vm.codeObj.code4)},on:{"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.codeObj, "code4", $event.target.value)}}})])]):_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 mt-8px"},[_vm._v("\n                  Số điện thoại\n                  "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activePhone),expression:"activePhone"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"required":"","placeholder":"Nhập số điện thoại cần xác thực"},domProps:{"value":(_vm.activePhone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.activePhone=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group mb-40px group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.agree),callback:function ($$v) {_vm.agree=$$v},expression:"agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý với "),_c('span',{staticClass:"main-color"},[_vm._v("điều khoản")]),_vm._v(" của Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"group-btn row"},[_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"submit"}},[_vm._v("\n                      "+_vm._s(_vm.showStepTwo ? 'Xác nhận' : 'GỬI MÃ OTP XÁC THỰC')+"\n                    ")]),_vm._v(" "),(_vm.msg)?_c('small',{staticClass:"text-danger"},[_vm._v(_vm._s(_vm.msg))]):_vm._e()])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/phoneform.vue?vue&type=template&id=5384b0fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/phoneform.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var phoneformvue_type_script_lang_js_ = ({props:['phone'],data(){return{agree:false,options:this.getCategory(),date:new Date(),activePhone:this.phone,showStepTwo:false,msg:'',codeObj:{}};},mounted(){},methods:{saveConfirm(){this.msg='';let obj={phone:this.activePhone};// call api here
this.$post('user/verify/phone',obj).then(res=>{if(res.data.status==true){this.showStepTwo=true;this.agree=false;}else{this.msg=res.data.msg;}}).catch(err=>{this.msg='Có lỗi xảy ra';console.log(err);});},verifyWithOTP(){this.msg='';let obj={phone:this.activePhone,verifiedCode:this.getCodeObj()};this.$post('user/verify/phone/code',obj).then(res=>{if(res.data.status){this.$emit('doneConfirmPhone');}else{this.msg=res.data.msg;}}).catch(err=>{this.msg='Có lỗi xảy ra';});},getCodeObj(){var code='';var object=this.codeObj;for(const key in object){if(Object.hasOwnProperty.call(object,key)){code=code+object[key]+'';}}return code;},nextCode(evt){const keysAllowed=['0','1','2','3','4','5','6','7','8','9'];const keyPressed=evt.key;if(!keysAllowed.includes(keyPressed)){return;}evt.target.nextElementSibling.focus();},show(){this.$refs.modalPhoneForm.showModal();},hide(){this.$refs.modalPhoneForm.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/phoneform.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_phoneformvue_type_script_lang_js_ = (phoneformvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/popup/phoneform.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_phoneformvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d25e144"
  
)

/* harmony default export */ var phoneform = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(79).default})


/***/ })

};;
//# sourceMappingURL=popup-phoneform.js.map