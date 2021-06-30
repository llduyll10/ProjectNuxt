exports.ids = [12,16,28,29];
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

/***/ 222:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTIuMjA3M0w0LjcwNzM2IDcuNDk5OTZMMCAyLjc5MjY4TDIuNzkyNjggMEw3LjUwMDA0IDQuNzA3MzZMMTIuMjA3MyAwTDE1IDIuNzkyNjhMMTAuMjkyNiA3LjUwMDA0TDE1IDEyLjIwNzNMMTIuMjA3MyAxNUw3LjQ5OTk2IDEwLjI5MjZMMi43OTI2IDE1TDAgMTIuMjA3M1oiIGZpbGw9IiNEODAwMDAiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/createRequired.vue?vue&type=template&id=7ec76629&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"createRequired",attrs:{"id":"modal-payment-required"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.auction)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.auction.auctionBy.company))]),_vm._v(" GỬI YÊU CẦU THANH TOÁN ĐỢT "+_vm._s(_vm.activeRow+1)+"\n        ")]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.sendRequirePayment()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên dự án")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nhân viên yêu cầu")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameStaff),expression:"objPayment.nameStaff"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":""},domProps:{"value":(_vm.objPayment.nameStaff)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameStaff", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Giá trị thanh toán")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('div',{staticClass:"input-group "},[_c('currency-input',{staticClass:"form-control",attrs:{"type":"text","required":"","readonly":""},model:{value:(_vm.objPayment.price),callback:function ($$v) {_vm.$set(_vm.objPayment, "price", $$v)},expression:"objPayment.price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1)])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Ghi chú thanh toán")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.note),expression:"objPayment.note"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objPayment.note)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "note", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên ngân hàng")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameBank),expression:"objPayment.nameBank"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":""},domProps:{"value":(_vm.objPayment.nameBank)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameBank", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên chủ tài khoản")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameAccountBank),expression:"objPayment.nameAccountBank"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":""},domProps:{"value":(_vm.objPayment.nameAccountBank)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameAccountBank", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Số tài khoản")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.accountNumber),expression:"objPayment.accountNumber"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":""},domProps:{"value":(_vm.objPayment.accountNumber)},on:{"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "accountNumber", $event.target.value)}}})])])]),_vm._v(" "),(_vm.objPayment && _vm.objPayment.status != 'DONE' )?_c('div',{staticClass:"footer d-flex"},[_c('button',{ref:"btnSubmit",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('div',{staticClass:"btn-confirm flex-1",on:{"click":function($event){return _vm.triggerForm('DONE')}}},[_c('span',[_vm._v("XÁC NHẬN THANH TOÁN")])]),_vm._v(" "),_c('div',{staticClass:"btn-confirm cancel flex-1 ml-25px",on:{"click":function($event){return _vm.triggerForm('CANCEL')}}},[_c('span',[_vm._v("TỪ CHỐI THANH TOÁN")])])]):_vm._e()])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/paymentCustomer/createRequired.vue?vue&type=template&id=7ec76629&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/createRequired.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createRequiredvue_type_script_lang_js_ = ({props:['project','activeRow','auction'],data(){return{objPayment:{}};},methods:{sendRequirePayment(){console.log('sendRequirePayment',this.objPayment);this.$emit('requiredPayment',this.objPayment);this.hide();},updateObjectRequired(obj){this.objPayment={...obj};},triggerForm(status){if(status=='DONE'){this.objPayment.status='DONE';}else{this.objPayment.status='CANCEL';}this.$refs.btnSubmit.click();},show(){this.$refs.createRequired.showModal();},hide(){this.$refs.createRequired.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/paymentCustomer/createRequired.vue?vue&type=script&lang=js&
 /* harmony default export */ var paymentCustomer_createRequiredvue_type_script_lang_js_ = (createRequiredvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/popup/paymentCustomer/createRequired.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paymentCustomer_createRequiredvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "eb35acf8"
  
)

/* harmony default export */ var createRequired = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(79).default})


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/createReport.vue?vue&type=template&id=ffe5fd24&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalCreateReport",attrs:{"id":"modal-payment-report"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_vm._v("\n            TẠO BÁO CÁO TIẾN ĐỘ THI CÔNG\n        ")]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.getForm()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên dự án")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nhân viên báo cáo")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameStaff),expression:"objPayment.nameStaff"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objPayment.nameStaff)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameStaff", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Thời gian")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.time),expression:"objPayment.time"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objPayment.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "time", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-25px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nhật ký công việc")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.note),expression:"objPayment.note"}],staticClass:"form-control",attrs:{"type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objPayment.note)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "note", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Hình ảnh đính kèm")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('InputFile',{key:"file",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Thêm hình ảnh'},on:{"input":_vm.getFile}}),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})],2):_vm._e()],1)])]),_vm._v(" "),_c('div',{staticClass:"footer d-flex"},[_c('button',{ref:"btnSubmitReport",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('div',{staticClass:"btn-confirm flex-1",on:{"click":function($event){return _vm.triggerForm('CREATE')}}},[_c('span',[_vm._v("TẠO BÁO CÁO THI CÔNG")])]),_vm._v(" "),_c('div',{staticClass:"btn-confirm update flex-1 ml-25px",on:{"click":function($event){return _vm.triggerForm('DRAFT')}}},[_c('span',[_vm._v("LƯU BẢN NHÁP")])])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/paymentCustomer/createReport.vue?vue&type=template&id=ffe5fd24&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/createReport.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createReportvue_type_script_lang_js_ = ({props:['project'],data(){return{acceptFile:['png','jpg','jpeg','tiff'],objPayment:{},arrFile:[]};},methods:{getForm(){console.log('getForm',this.objPayment);},triggerForm(status){this.$refs.btnSubmitReport.click();},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},show(){this.$refs.modalCreateReport.showModal();},hide(){this.$refs.modalCreateReport.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/paymentCustomer/createReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var paymentCustomer_createReportvue_type_script_lang_js_ = (createReportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/popup/paymentCustomer/createReport.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paymentCustomer_createReportvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5d2fcfd9"
  
)

/* harmony default export */ var createReport = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(213).default,Modal: __webpack_require__(79).default})


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detailPayment.vue?vue&type=template&id=3e7b5838&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.auction)?_c('div',{staticClass:"detail-payment-component"},[_vm._ssrNode("<div class=\"group-payment\"><p class=\"fw-600 f-16 mb-16px\">Thanh toán</p> "+(_vm._ssrList((_vm.auction.deal[0].payments),function(item,idx){return ("<div class=\"d-flex\"><span class=\"item\" style=\"width:15%\">"+_vm._ssrEscape("Thanh toán đợt "+_vm._s(idx+1))+"</span> <span class=\"item text-center fw-600\" style=\"width:25%\">"+_vm._ssrEscape(_vm._s(item.value))+"</span> "+((_vm.arrRequiredPayment && item.paymentAuction)?("<span class=\"item text-center text-underline fw-600 text-main cursor-pointer\" style=\"width:20%;text-decoration:underline;\">"+_vm._ssrEscape("\n                Đề nghị thanh toán_Đợt "+_vm._s(idx+1)+"\n            ")+"</span>"):("<span class=\"item text-center cursor-pointer main-black\" style=\"width:20%\">\n                Chưa có đề nghị thanh toán\n            </span>"))+" "+((_vm.arrRequiredPayment && item.paymentAuction)?("<span class=\"item text-center fw-600 text-main\" style=\"width:20%\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.formatVnd(item.paymentAuction.price))+" VND\n            ")+"</span>"):("<span class=\"item\" style=\"width:20%\"></span>"))+" "+((_vm.arrRequiredPayment && item.paymentAuction && item.paymentAuction.status != 'DRAFT' && item.paymentAuction.status != 'CANCEL')?(((item.paymentAuction.status == 'DONE')?("<span class=\"item fw-600 text-main\" style=\"width:20%\"><img"+(_vm._ssrAttr("src",__webpack_require__(217)))+" alt> Đã thanh toán\n                </span>"):(item.paymentAuction.status == 'PENDING' )?("<span class=\"item fw-600 text-red\" style=\"width:20%\"><img"+(_vm._ssrAttr("src",__webpack_require__(222)))+" alt class=\"mb-2px\"> Chưa thanh toán\n                </span>"):"<!---->")):("<span class=\"item\" style=\"width:20%\"></span>"))+"</div>")}))+"</div> <div class=\"group-progress\"><p class=\"fw-600 f-16 mt-25px mb-16px\">Báo cáo tiến độ</p> "+(_vm._ssrList((_vm.auction.deal[0].payments),function(item,idx){return ("<div class=\"d-flex\"><span class=\"item\" style=\"width:15%\">"+_vm._ssrEscape(_vm._s(idx+1)+". Tuần "+_vm._s(idx+1))+"</span> <span class=\"item text-center fw-600\" style=\"width:25%\">"+_vm._ssrEscape("Tiến độ thi công tuần thứ "+_vm._s(idx+1))+"</span> <span class=\"item d-flex\" style=\"width:60%\">\n                Đánh giá:\n                <div class=\"group-star\">"+(_vm._ssrList((5),function(item,idx){return ("<i class=\"fas fa-star mr-1px f-13 main-yellow\"></i>")}))+"</div></span></div>")}))+"</div> "),_c('PopupPaymentCustomerCreateRequired',{ref:"customerCreateRequired",attrs:{"project":_vm.detailProject,"activeRow":_vm.activeRow,"auction":_vm.auction},on:{"requiredPayment":_vm.getObjRequiredPayment}}),_vm._ssrNode(" "),_c('PopupPaymentCustomerCreateReport',{ref:"customerCreateReport",attrs:{"project":_vm.detailProject}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detailPayment.vue?vue&type=template&id=3e7b5838&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detailPayment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var detailPaymentvue_type_script_lang_js_ = ({props:['auction','detailProject'],data(){return{statusPayment:1,activeRow:0,arrRequiredPayment:[]};},mounted(){this.getPaymentByAuction();},methods:{getObjRequiredPayment(obj){var objRequired={...obj,paymentId:objRequired?objRequired.paymentId:this.activeRow,project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};this.loader();this.$post('member/payments',objRequired).then(res=>{var objNext={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};return this.$post('member/payments-by-auction',objNext);}).then(res2=>{this.arrRequiredPayment=res2.data;this.auction.deal[0].payments.forEach(item=>delete item.paymentAuction);this.mapAuction();this.loader(0);}).catch(err=>{this.loader(0);});},getPaymentByAuction(){var obj={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};this.$post('member/payments-by-auction',obj).then(res=>{this.arrRequiredPayment=res.data;this.mapAuction();}).catch(err=>{console.log(err);});},mapAuction(){var arrTmp1=JSON.parse(JSON.stringify(this.auction.deal[0].payments))||[];var arrTmp2=this.arrRequiredPayment;arrTmp1.forEach((item1,index)=>{arrTmp2.forEach(item2=>{if(index==item2.paymentId&&item2.status!='DRAFT'&&item2.status!='CANCEL'){item1.paymentAuction=item2;}});});this.auction.deal[0].payments=arrTmp1;},openModalRequired(activeRow){this.$refs.customerCreateRequired.show();this.$refs.customerCreateRequired.updateObjectRequired({});this.activeRow=activeRow;},openModalRequiredUpdate(objRequired,activeRow){//Update row
this.activeRow=activeRow;this.$refs.customerCreateRequired.updateObjectRequired(objRequired);this.$refs.customerCreateRequired.show();},openModalReport(){this.$refs.customerCreateReport.show();},hideModal(){this.$refs.customerCreateRequired.hide();}}});
// CONCATENATED MODULE: ./components/detailPayment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_detailPaymentvue_type_script_lang_js_ = (detailPaymentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/detailPayment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_detailPaymentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b57972c"
  
)

/* harmony default export */ var detailPayment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PopupPaymentCustomerCreateRequired: __webpack_require__(246).default,PopupPaymentCustomerCreateReport: __webpack_require__(247).default})


/***/ })

};;
//# sourceMappingURL=detail-payment.js.map