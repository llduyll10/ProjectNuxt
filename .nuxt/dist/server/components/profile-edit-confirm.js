exports.ids = [50,16,30];
exports.modules = {

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputFile.vue?vue&type=template&id=15adf062&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"file\""+(_vm._ssrAttr("multiple",_vm.multiple))+(_vm._ssrClass("inputfile",_vm.isChat ? 'w-40' : ''))+"> <label"+(_vm._ssrClass(null,_vm.isChat ? 'bg-white mb-0' : ''))+">"+((_vm.isChat)?("<img"+(_vm._ssrAttr("src",__webpack_require__(214)))+" alt>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(215)))+" alt class=\"mr-4px h-13px mb-2px\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.label)+"\n        ")))+"</label> "+((!_vm.isChat)?("<span class=\"text-main f-11 font-italic\">"+(_vm._ssrList((_vm.accept),function(item,idx){return (_vm._ssrEscape("\n           "+_vm._s(item)+" ")+(((idx+1) < _vm.accept.length)?("<span>,</span>"):"<!---->"))}))+"</span>"):"<!---->")+" "+((_vm.showAlert)?("<small class=\"text-danger d-block\">Sai định dạng</small>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InputFile.vue?vue&type=template&id=15adf062&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputFile.vue?vue&type=script&lang=js&
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
/* harmony default export */ var InputFilevue_type_script_lang_js_ = ({props:['accept','multiple','label','isChat'],created(){},mounted(){},data(){return{showAlert:false};},methods:{onFileChange(){var arrFile=[];let files=this.$refs.file.files;let accept=this.accept;if(files&&files.length){var typeFile=files[0].name.split('.').pop();}if(accept){if(!accept.includes(typeFile)){this.showAlert=true;return;}else{this.showAlert=false;files.forEach(e=>{arrFile.push(e);});this.$emit("input",this.multiple?arrFile:arrFile[0]);this.$refs.file.value=null;}}}}});
// CONCATENATED MODULE: ./components/InputFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InputFilevue_type_script_lang_js_ = (InputFilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/InputFile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InputFilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dbfd3b8a"
  
)

/* harmony default export */ var InputFile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/file.0c843c8.svg";

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-upload.762d37f.svg";

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMzQzNjYgMTUuMzQwN0wwIDguOTk2NTZMMy4wMjU0NyA1Ljk3MTA5TDYuMzQzNjYgOS4yODkyOEwxMy45NzQ1IDEuNjU4OTRMMTcgNC42ODQ0TDYuMzQzNjYgMTUuMzQwN1oiIGZpbGw9IiMxOThBQzYiLz4KPC9zdmc+Cg=="

/***/ }),

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


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/confirm.vue?vue&type=template&id=38616046&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editProfileInfoWrap"},[_vm._ssrNode("<div class=\"f-20 f-bold text-main mb-15px\">\n        Xác thực thông tin tài khoản\n    </div> <div class=\"mb-24px text-black f-12\">\n        Xác thực đầy đủ thông tin doanh nghiệp/cá nhân để nhận được sự tin tưởng từ khách hàng và làm việc an toàn, hiệu quả.\n    </div> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"editRow mb-15px\"><div class=\"fieldLabel w-200px\">\n                Xác thực số điện thoại<span class=\"dot\">*</span></div> <div class=\"fieldInput flex-align-center\"><div"+(_vm._ssrClass("form-group mb-0 flex-1 mr-15px",_vm.$auth.user.verified ? 'group-verfiry' : ''))+"><input type=\"text\" required=\"required\""+(_vm._ssrAttr("disabled",_vm.$auth.user.verified))+" placeholder=\"Số điện thoại\""+(_vm._ssrAttr("value",(_vm.phone)))+(_vm._ssrClass("form-control",_vm.$auth.user.verified ? 'verify' : ''))+"> "+((_vm.$auth.user.verified)?("<div class=\"group-verify\"><img"+(_vm._ssrAttr("src",__webpack_require__(217)))+" alt> <span> Đã xác thực</span></div>"):"<!---->")+"</div> <div><button type=\"button\""+(_vm._ssrAttr("disabled",_vm.$auth.user.verified))+" class=\"btn btn-main px-25px\">\n                        Xác thực\n                    </button></div></div></div> "),_vm._ssrNode("<div class=\"editRow align-items-start mb-15px\">","</div>",[_vm._ssrNode("<div class=\"fieldLabel pt-5px w-200px\">\n                Xác thực CMND/Passport<span class=\"dot\">*</span> <br> <span class=\"info\">\n                    Vui lòng kèm trong file cả mặt trước và mặt sau của thẻ căn cước công dân\n                </span></div> "),(_vm.$auth.user.verifiedPaperStatus == 'NoAction')?_vm._ssrNode("<div class=\"fieldInput flex-align-center\">","</div>",[_vm._ssrNode("<div class=\"d-flex w-100\" style=\"justify-content:space-between\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('InputFile',{attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}}),_vm._ssrNode(" "+((_vm.arrFile.length)?("<div class=\"col-md-9 pl-0\">"+(_vm._ssrList((_vm.arrFile),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                                    "+_vm._s(item.name)+"\n                                    ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))+"</div>"):"<!---->"))],2),_vm._ssrNode(" <button type=\"button\" class=\"btn btn-main px-25px\">\n                        Xác thực\n                    </button>")],2)]):_vm._ssrNode(("<div>"+((_vm.$auth.user.verifiedPaperStatus == 'Active')?("<small class=\"checkVerify\"><img"+(_vm._ssrAttr("src",__webpack_require__(217)))+" alt>\n                    Đã xác thực\n                </small>"):("<small class=\"text-danger fw-600\">\n                    Đang xác thực\n                </small>"))+" "+((_vm.$auth.user.verifiedPaper && _vm.$auth.user.verifiedPaper.length)?("<div>"+(_vm._ssrList((_vm.$auth.user.verifiedPaper),function(item,idx){return ("<p class=\"f-11 cursor-pointer text-main  mb-0 mt-8px\"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                        ")+"</p>")}))+"</div>"):"<!---->")+"</div>"))],2)],2),_vm._ssrNode(" "),(!_vm.$auth.user.verified)?_c('PopupPhoneform',{ref:"PopupChangePhone",attrs:{"phone":_vm.phone},on:{"doneConfirmPhone":_vm.doneConfirmPhone}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/edit/confirm.vue?vue&type=template&id=38616046&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/edit/confirm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var confirmvue_type_script_lang_js_ = ({data(){return{phone:this.$auth.user.phone,acceptFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFile:[]};},mounted(){this.$auth.fetchUser();},methods:{doneConfirmPhone(){this.$auth.fetchUser();},async verifyPassport(){var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={verifiedPaper:arrFile};this.$post('user/verify/paper',obj).then(res=>{this.$auth.fetchUser();}).catch(err=>{console.log(err);});},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},openModalPhone(){this.$refs.PopupChangePhone.show();}}});
// CONCATENATED MODULE: ./components/profile/edit/confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_confirmvue_type_script_lang_js_ = (confirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/profile/edit/confirm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_confirmvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f39e1fc"
  
)

/* harmony default export */ var edit_confirm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(213).default,PopupPhoneform: __webpack_require__(242).default})


/***/ })

};;
//# sourceMappingURL=profile-edit-confirm.js.map