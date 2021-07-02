exports.ids = [36,33];
exports.modules = {

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyContact.vue?vue&type=template&id=0fd9722d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyContact",attrs:{"id":"modal-survey-contact"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objConfirm)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-14"},[_vm._v("\n            Bạn đã xác nhận yêu cầu khảo sát của khách hàng "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objConfirm.name))]),_vm._v(". Nếu có thay đổi về thời gian và địa điểm, vui lòng liên hệ trực tiếp với khách.\n        ")]),_vm._v(" "),_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Họ Tên:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red"},[_vm._v(_vm._s(_vm.objConfirm.name))])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Số điện thoại:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.phone))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Địa chỉ Email:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.email))])])])]),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('div',{staticClass:"btn-confirm",on:{"click":function($event){return _vm.hide()}}},[_c('span',[_vm._v("HOÀN TẤT")])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/surveyContact.vue?vue&type=template&id=0fd9722d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyContact.vue?vue&type=script&lang=js&
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
/* harmony default export */ var surveyContactvue_type_script_lang_js_ = ({props:['objConfirm'],methods:{show(){console.log('objProject',this.objConfirm);this.$refs.popupSurveyContact.showModal();},hide(){this.$refs.popupSurveyContact.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/surveyContact.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyContactvue_type_script_lang_js_ = (surveyContactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/surveyContact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyContactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9dc61b10"
  
)

/* harmony default export */ var surveyContact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/viewSurvey.vue?vue&type=template&id=7b2c6074&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Modal',{ref:"popupSurvey",attrs:{"id":"modal-survey"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objInfor)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-16 isCancel pr-60px"},[_vm._v("\n                        Khách hàng "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objInfor.name))]),_vm._v(" đã chọn bạn khảo sát hiện trạng và gửi báo giá cuối cùng. Bạn sẽ tốn "),_c('span',{staticClass:"text-main"},[_vm._v("12 Tokens")]),_vm._v(" khi xác nhận tham gia khảo sát và báo giá\n                    ")]),_vm._v(" "),_c('form',{staticClass:"group-content mt-20px",on:{"submit":function($event){$event.preventDefault();return _vm.sendMessage()}}},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                Tên dự án\n                            ")]),_vm._v(" "),_c('span',{staticClass:"col-md-9 col-sm-12 pl-0 name-project",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                                "+_vm._s(_vm.detailProject.name)+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                Soạn tin nhắn\n                                "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.message),expression:"objResearch.message"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"required":"","id":"customPlaceholder","rows":"5","placeholder":_vm.placeholder,"readonly":true},domProps:{"value":(_vm.objResearch.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "message", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                    Địa điểm khảo sát\n                                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.address),expression:"objResearch.address"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"type":"text","placeholder":"Nhập địa chỉ công trình","required":"","readonly":true},domProps:{"value":(_vm.objResearch.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "address", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                    Thời gian khảo sát\n                                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"d-flex"},[[_c('div',{staticClass:"input-group custom-input-calendar",staticStyle:{"min-width":"170px"}},[_c('input',{staticClass:"form-control",attrs:{"type":"text","readonly":"","required":""},domProps:{"value":_vm.$moment(_vm.objResearch.date).format('DD/MM/YYYY')}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text custom-time disabled"},[_c('i',{staticClass:"fas fa-calendar-day"})])])])],_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.time),expression:"objResearch.time"}],staticClass:"ml-20px form-control",attrs:{"type":"time","readonly":true},domProps:{"value":(_vm.objResearch.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "time", $event.target.value)}}})],2)]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13  col-md-3 col-sm-12 mt-1"},[_vm._v("\n                                Tài liệu đính kèm\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-md-9 col-sm-12 pl-0"},[(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                                "+_vm._s(item.name)+"\n                                            ")])]})],2):_vm._e(),_vm._v(" "),(_vm.objProject.survey[0] && _vm.objProject.survey[0].attachments)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.objProject.survey[0] && _vm.objProject.survey[0].attachments)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.objProject.survey[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                                "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                            ")])]})],2):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group  group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree-survey","required":""},model:{value:(_vm.objResearch.agree),callback:function ($$v) {_vm.$set(_vm.objResearch, "agree", $$v)},expression:"objResearch.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý với "),_c('span',{staticClass:"main-color"},[_vm._v("điều khoản")]),_vm._v(" của Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"form-group  group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.objResearch.agreeSurvey),callback:function ($$v) {_vm.$set(_vm.objResearch, "agreeSurvey", $$v)},expression:"objResearch.agreeSurvey"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý khảo sát hiện trạng và sẽ  "),_c('span',{staticClass:"text-red"},[_vm._v(" cập nhật báo giá trong vòng 24 giờ ")]),_vm._v(" sau khi khảo sát "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"group-btn row"},[(!_vm.$auth.loggedIn)?_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide()}}},[_vm._v("\n                                    VUI LÒNG ĐĂNG NHẬP\n                                ")])]):_c('div',{staticClass:"col-md-12 d-flex"},[_c('button',{ref:"btnClick",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('button',{staticClass:"btn-now mr-15px",attrs:{"type":"button"},on:{"click":function($event){return _vm.sendSurvey('CONFIRM')}}},[_vm._v("\n                                XÁC NHẬN KHẢO SÁT\n                                ")]),_vm._v(" "),_c('button',{staticClass:"btn-now delete",attrs:{"type":"button"},on:{"click":function($event){return _vm.sendSurvey('CANCEL')}}},[_vm._v("\n                                    TỪ CHỐI YÊU CẦU KHẢO SÁT\n                                ")])])])])])]):_vm._e()]},proxy:true}])}),_vm._ssrNode(" "),_c('PopupSurveyContact',{ref:"surveyContact",attrs:{"objConfirm":_vm.objConfirm}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/viewSurvey.vue?vue&type=template&id=7b2c6074&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/viewSurvey.vue?vue&type=script&lang=js&
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
/* harmony default export */ var viewSurveyvue_type_script_lang_js_ = ({props:['detailProject','rawCategory','objProject'],data(){return{objResearch:{agree:false,agreeSurvey:false,date:new Date().getTime()},objInfor:null,arrFile:[],accepFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],options:this.getCategory(),date:new Date(),statusConfirm:'',objConfirm:null,placeholder:'1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn\n2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất.\n3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác'};},mounted(){if(this.objProject){this.objResearch=this.objProject.survey[0];}},methods:{async sendMessage(){try{this.loader();var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objResearch,attachments:arrFile,project:this.detailProject._id,auction:this.objProject._id};if(this.statusConfirm=='CONFIRM'){let res=await this.$post('member/survey/confirmed',obj);this.$emit('getListParent');this.objConfirm=res.data.auction.projectOwner;this.showSurveyContact();}else{let res=await this.$post('member/survey/destroy',obj);this.$emit('getListParent');}this.loader(0);this.hide();window.location.reload();}catch(err){console.log(err);this.loader(0);}},sendSurvey(status){this.statusConfirm=status;this.$refs.btnClick.click();},getInforPerchant(infor){this.objInfor=infor;},show(){this.$refs.popupSurvey.showModal();console.log('this.company',this.company);},hide(){this.$refs.popupSurvey.hideModal();},showSurveyContact(){this.$refs.surveyContact.show();},hideSurveyContact(){this.$refs.surveyContact.hide();}}});
// CONCATENATED MODULE: ./components/popup/viewSurvey.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_viewSurveyvue_type_script_lang_js_ = (viewSurveyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/viewSurvey.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_viewSurveyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "14d4443d"
  
)

/* harmony default export */ var viewSurvey = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default,PopupSurveyContact: __webpack_require__(93).default})


/***/ })

};;
//# sourceMappingURL=popup-view-survey.js.map