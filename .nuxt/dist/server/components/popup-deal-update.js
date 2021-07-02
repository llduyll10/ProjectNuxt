exports.ids = [22,16];
exports.modules = {

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/dealUpdate.vue?vue&type=template&id=ce3bf7d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyUpdate",attrs:{"id":"modal-deal-update"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objCompany && _vm.objCompany.deal[0])?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-14 fw-600"},[_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objCompany.auctionBy.company))]),_vm._v(" đã từ chối yêu cầu thương lượng của bạn\n        ")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.submitForm()}}},[_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên dự án:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"f-16 fw-600",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                            "+_vm._s(_vm.detailProject.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tin nhắn của bạn "),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].message),expression:"objCompany.deal[0].message"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objCompany.deal[0].message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "message", $event.target.value)}}})]],2)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Đơn giá dự thầu")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.formatNamePrice(_vm.objCompany.price)))])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Đơn giá thương lượng")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[_c('div',{staticClass:"input-group"},[_c('currency-input',{staticClass:"form-control fw-600",attrs:{"type":"text","required":"","placeholder":"200,000,000"},model:{value:(_vm.objCompany.deal[0].price),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "price", $$v)},expression:"objCompany.deal[0].price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1)])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tiến độ thi công")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.objCompany.day)+" ngày")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tiến độ mong muốn")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].day),expression:"objCompany.deal[0].day"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objCompany.deal[0].day)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "day", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("Ngày")])])])])]),_vm._v(" "),(_vm.objCompany.payments.length)?[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx+100,staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(item.value))])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.valueDeal),expression:"item.valueDeal"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(item.valueDeal)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "valueDeal", $event.target.value)}}})])])]})]:_vm._e(),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Yêu cầu báo cáo")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objCompany.deal[0].report,"placeholder":"","clearable":false},model:{value:(_vm.objCompany.deal[0].report),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "report", $$v)},expression:"objCompany.deal[0].report"}})],1)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"f-13  col-md-3 col-sm-12 "},[_c('span',{staticClass:"key"},[_vm._v("Tài liêu đính kèm:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9 "},[_c('InputFile',{key:"file",ref:"akjklak",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}})],1),_vm._v(" "),_c('div',{staticClass:"col-md-3"}),_vm._v(" "),_c('div',{staticClass:"col-md-9 "},[(_vm.objCompany && _vm.objCompany.deal[0].attachments)?[_vm._l((_vm.objCompany.deal[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                     "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                ")])]})]:_vm._e(),_vm._v(" "),(_vm.arrFile.length)?[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx + 30,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})]:_vm._e()],2)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Phản hồi của nhà thầu"),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].feedback),expression:"objCompany.deal[0].feedback"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objCompany.deal[0].feedback)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "feedback", $event.target.value)}}})]],2)]),_vm._v(" "),_c('div',{staticClass:"form-group group-checkbox mb-0 d-flex"},[_c('b-form-checkbox',{staticClass:"f-13",attrs:{"checked":_vm.objSurvey.agree,"name":"checkbox-agree","required":""},model:{value:(_vm.objSurvey.agree),callback:function ($$v) {_vm.$set(_vm.objSurvey, "agree", $$v)},expression:"objSurvey.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý với "),_c('span',{staticClass:"main-color"},[_vm._v("điều khoản")]),_vm._v(" của Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1)],2),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('div',{staticClass:"d-flex"},[_c('button',{ref:"btnConfirm",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('button',{staticClass:"btn-confirm mr-15px",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('ACCEPT')}}},[_c('span',[_vm._v("ĐỒNG Ý VÀ BẮT ĐẦU DỰ ÁN")])]),_vm._v(" "),_c('button',{staticClass:"btn-confirm update",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('UPDATE')}}},[_c('span',[_vm._v("GỬI THƯƠNG LƯỢNG CẬP NHẬT")])])])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/dealUpdate.vue?vue&type=template&id=ce3bf7d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/dealUpdate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var dealUpdatevue_type_script_lang_js_ = ({props:['objCompany','detailProject','rawCategory','isCompany'],data(){return{optionSearch:[{id:1,label:'1 tuần 1 lần'},{id:2,label:'2 tuần 1 lần'},{id:4,label:'1 tháng 1 lần'}],acceptFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFile:[],objSurvey:{message:'',report:1,agree:false},statusCallAPI:''};},mounted(){if(this.objCompany&&this.objCompany.deal[0]&&this.objCompany.deal[0].payments.length){this.objCompany.deal[0].payments.forEach(item1=>{this.objCompany.payments.forEach(item2=>{item2.valueDeal=item1.value;});});}},methods:{async submitForm(){try{// this.loader()
var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var arrPayment=[];this.objCompany.payments.forEach(item=>{var obj={key:item.key,value:item.valueDeal};arrPayment.push(obj);});let url='';if(this.statusCallAPI=='ACCEPT'){url='member/auction/deal/destroy';var obj={project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction};}else{var obj={...this.objCompany.deal[0],project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction,payments:arrPayment,attachments:arrFile};url='member/auction/deal/update';}console.log('obj',obj);let res=await this.$post(url,obj);console.log(res);this.hide();if(this.statusCallAPI=='ACCEPT'||this.statusCallAPI=='CANCEL'){this.$emit('getListParent');}else{this.$emit('activeCompany');}}catch(err){this.loader(0);console.log(err);}},confirmSurvey(status){this.statusCallAPI=status;this.$refs.btnConfirm.click();},show(){this.$refs.popupSurveyUpdate.showModal();},hide(){this.$refs.popupSurveyUpdate.hideModal();},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},getFile(file){this.arrFile=this.arrFile.concat(file);}}});
// CONCATENATED MODULE: ./components/popup/dealUpdate.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_dealUpdatevue_type_script_lang_js_ = (dealUpdatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/dealUpdate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_dealUpdatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0b1dfb33"
  
)

/* harmony default export */ var dealUpdate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputFile.vue?vue&type=template&id=15adf062&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"file\""+(_vm._ssrAttr("multiple",_vm.multiple))+(_vm._ssrClass("inputfile",_vm.isChat ? 'w-40' : ''))+"> <label"+(_vm._ssrClass(null,_vm.isChat ? 'bg-white mb-0' : ''))+">"+((_vm.isChat)?("<img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" alt>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt class=\"mr-4px h-13px mb-2px\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.label)+"\n        ")))+"</label> "+((!_vm.isChat)?("<span class=\"text-main f-11 font-italic\">"+(_vm._ssrList((_vm.accept),function(item,idx){return (_vm._ssrEscape("\n           "+_vm._s(item)+" ")+(((idx+1) < _vm.accept.length)?("<span>,</span>"):"<!---->"))}))+"</span>"):"<!---->")+" "+((_vm.showAlert)?("<small class=\"text-danger d-block\">Sai định dạng</small>"):"<!---->"))])}
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
var componentNormalizer = __webpack_require__(2);

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

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/file.0c843c8.svg";

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-upload.762d37f.svg";

/***/ })

};;
//# sourceMappingURL=popup-deal-update.js.map