exports.ids = [10,12,16,22,25,28,29,30,32,34,35,67];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-sand-lock.d0f4865.svg";

/***/ }),

/***/ 115:
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
var componentNormalizer = __webpack_require__(2);

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
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/createReport.vue?vue&type=template&id=678213c5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalReportCustomer",attrs:{"id":"modal-payment-report"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.auction.auctionBy.company))]),_vm._v(" BÁO CÁO TIẾN ĐỘ THI CÔNG\n        ")]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.getForm()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên dự án")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nhân viên báo cáo")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.nameStaff),expression:"objReport.nameStaff"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objReport.nameStaff)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "nameStaff", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Thời gian")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.time),expression:"objReport.time"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objReport.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "time", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-25px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nhật ký công việc")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.note),expression:"objReport.note"}],staticClass:"form-control",attrs:{"type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objReport.note)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "note", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Hình ảnh đính kèm")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('div',{staticClass:"row cover-img"},[(_vm.objReport.attachment && _vm.objReport.attachment.length)?[_vm._l((_vm.objReport.attachment),function(item,idx){return [_c('div',{key:idx+100,staticClass:"col-6 img"},[_c('div',{staticClass:" item-img",style:({
                                                'background-image': 'url(' + "" + item + ')',
                                            })})])]})]:_vm._e()],2)])])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/paymentCustomer/createReport.vue?vue&type=template&id=678213c5&

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
/* harmony default export */ var createReportvue_type_script_lang_js_ = ({props:['project','activeReport','auction'],data(){return{acceptFile:['png','jpg','jpeg','tiff'],objReport:{},arrFile:[]};},watch:{activeReport(){this.objReport.time='Tuần '+Number(this.activeReport);}},methods:{async getForm(){var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var fileOld=this.objReport.attachment||[];var arrFile=fileOld.concat(fileNew);var obj={...this.objReport,reportId:this.activeReport-1,attachment:arrFile};this.$emit('createReport',obj);this.hide();},updateReport(obj){console.log('report',obj);this.objReport=obj;},triggerForm(status){this.objReport.status=status;this.$refs.btnSubmitReport.click();},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objReport.attachment=this.objReport.attachment.filter(item=>item!==file);},show(){this.$refs.modalReportCustomer.showModal();},hide(){this.$refs.modalReportCustomer.hideModal();this.arrFile=[];}}});
// CONCATENATED MODULE: ./components/popup/paymentCustomer/createReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var paymentCustomer_createReportvue_type_script_lang_js_ = (createReportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

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
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgOS43NjU4NkwzLjc2NTg5IDUuOTk5OTdMMCAyLjIzNDE0TDIuMjM0MTQgMEw2LjAwMDAzIDMuNzY1ODlMOS43NjU4NiAwTDEyIDIuMjM0MTRMOC4yMzQxMSA2LjAwMDAzTDEyIDkuNzY1ODZMOS43NjU4NiAxMkw1Ljk5OTk3IDguMjM0MTFMMi4yMzQwOCAxMkwwIDkuNzY1ODZaIiBmaWxsPSIjRjJGMkYyIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detailPayment.vue?vue&type=template&id=6f8e7925&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.auction)?_c('div',{staticClass:"detail-payment-component"},[_vm._ssrNode("<div class=\"group-payment\"><p class=\"fw-600 f-16 mb-16px\">Thanh toán</p> "+(_vm._ssrList((_vm.auction.deal[0].payments),function(item,idx){return ("<div class=\"d-flex\"><span class=\"item\" style=\"width:15%\">"+_vm._ssrEscape("Thanh toán đợt "+_vm._s(idx+1))+"</span> <span class=\"item text-left fw-600\" style=\"width:25%\">"+_vm._ssrEscape(_vm._s(item.value))+"</span> "+((_vm.arrRequiredPayment && item.paymentAuction)?("<span class=\"item text-left text-underline fw-600 text-main cursor-pointer\" style=\"width:20%;text-decoration:underline;\">"+_vm._ssrEscape("\n                Đề nghị thanh toán_Đợt "+_vm._s(idx+1)+"\n            ")+"</span>"):("<span class=\"item text-left cursor-pointer main-black\" style=\"width:20%\">\n                Chưa có đề nghị thanh toán\n            </span>"))+" "+((_vm.arrRequiredPayment && item.paymentAuction)?("<span class=\"item text-center fw-600 text-main\" style=\"width:20%\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.formatVnd(item.paymentAuction.price))+" VND\n            ")+"</span>"):("<span class=\"item\" style=\"width:20%\"></span>"))+" "+((_vm.arrRequiredPayment && item.paymentAuction && item.paymentAuction.status != 'DRAFT' && item.paymentAuction.status != 'CANCEL')?(((item.paymentAuction.status == 'DONE')?("<span class=\"item fw-600 text-main\" style=\"width:20%\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" alt> Đã thanh toán\n                </span>"):(item.paymentAuction.status == 'PENDING' )?("<span class=\"item fw-500 text-main\" style=\"width:20%\"><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt class=\"mb-2px\"> Chờ xác nhận\n                </span>"):"<!---->")):("<span class=\"item\" style=\"width:20%\"></span>"))+"</div>")}))+"</div> "),_vm._ssrNode("<div class=\"group-progress\">","</div>",[_vm._ssrNode("<p class=\"fw-600 f-16 mt-25px mb-16px\">Báo cáo tiến độ</p> "),_vm._l((_vm.auction.deal[0].payments),function(item,idx){return _vm._ssrNode("<div class=\"d-flex\">","</div>",[_vm._ssrNode("<span class=\"item\" style=\"width:15%\">"+_vm._ssrEscape(_vm._s(idx+1)+". Tuần "+_vm._s(idx+1))+"</span> "+((_vm.arrReport.length && item.reportAuction)?("<span class=\"item text-left fw-600 text-main cursor-pointer\" style=\"width:25%;text-decoration:underline\">"+_vm._ssrEscape("\n                Tiến độ thi công tuần thứ "+_vm._s(idx+1)+"\n            ")+"</span>"):("<span class=\"item text-left fw-500 text-red\" style=\"width:25%\">\n               Chưa cập nhật\n            </span>"))+" "),(_vm.arrReport.length && item.reportAuction)?_vm._ssrNode("<span class=\"item d-flex\" style=\"width:60%\">","</span>",[_vm._ssrNode("\n                Đánh giá:\n                "),_c('Rating',{attrs:{"rating":item.reportAuction.rating ? item.reportAuction.rating : 0,"report":item.reportAuction},on:{"rating":_vm.getRating}})],2):_vm._e()],2)})],2),_vm._ssrNode(" "),_c('PopupPaymentCustomerCreateRequired',{ref:"customerCreateRequired",attrs:{"project":_vm.detailProject,"activeRow":_vm.activeRow,"auction":_vm.auction},on:{"requiredPayment":_vm.getObjRequiredPayment}}),_vm._ssrNode(" "),_c('PopupPaymentCustomerCreateReport',{ref:"customerCreateReport",attrs:{"project":_vm.detailProject,"auction":_vm.auction}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detailPayment.vue?vue&type=template&id=6f8e7925&

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var detailPaymentvue_type_script_lang_js_ = ({props:['auction','detailProject'],data(){return{statusPayment:1,activeRow:0,arrRequiredPayment:[],arrReport:[]};},mounted(){this.getPaymentByAuction();this.getReportByAuction();},methods:{getObjRequiredPayment(obj){var objRequired={...obj,paymentId:objRequired?objRequired.paymentId:this.activeRow,project:this.auction.deal[0].project,auction:this.auction.deal[0].auction,ownerProject:this.detailProject.createBy._id};this.loader();this.$post('member/payments',objRequired).then(res=>{var objNext={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};return this.$post('member/payments-by-auction',objNext);}).then(res2=>{this.arrRequiredPayment=res2.data;this.auction.deal[0].payments.forEach(item=>delete item.paymentAuction);this.mapAuction();this.loader(0);}).catch(err=>{this.loader(0);});},getPaymentByAuction(){var obj={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};this.$post('member/payments-by-auction',obj).then(res=>{this.arrRequiredPayment=res.data;this.mapAuction();}).catch(err=>{console.log(err);});},mapAuction(){var arrTmp1=JSON.parse(JSON.stringify(this.auction.deal[0].payments))||[];var arrTmp2=this.arrRequiredPayment;arrTmp1.forEach((item1,index)=>{arrTmp2.forEach(item2=>{if(index==item2.paymentId&&item2.status!='DRAFT'&&item2.status!='CANCEL'){item1.paymentAuction=item2;}});});this.auction.deal[0].payments=arrTmp1;},//Report
getReportByAuction(){var obj={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};this.$post('member/reports-by-auction',obj).then(res=>{console.log('getReportByAuction',res);this.arrReport=res.data;this.mapReport();}).catch(err=>{console.log(err);});},mapReport(){var arrTmp1=JSON.parse(JSON.stringify(this.auction.deal[0].payments))||[];var arrTmp2=JSON.parse(JSON.stringify(this.arrReport))||[];arrTmp1.forEach((item1,index)=>{arrTmp2.forEach(item2=>{if(index==item2.reportId&&item2.status!='DRAFT'){item1.reportAuction=item2;}});});this.auction.deal[0].payments=arrTmp1;console.log('mapReport',this.auction.deal[0].payments);},//Rating
getRating(objRating){// this.loader()
var obj={rating:objRating.rating+1,_id:objRating._id,project:objRating.project,auction:objRating.auction};this.$post('member/reports-rating',obj).then(res=>{console.log('rating api',res);this.getReportByAuction();this.loader(0);}).catch(err=>{console.log(err);this.loader(0);});},openModalRequired(activeRow){this.$refs.customerCreateRequired.show();this.$refs.customerCreateRequired.updateObjectRequired({});this.activeRow=activeRow;},openModalRequiredUpdate(objRequired,activeRow){//Update row
this.activeRow=activeRow;this.$refs.customerCreateRequired.updateObjectRequired(objRequired);this.$refs.customerCreateRequired.show();},openModalReport(report){this.$refs.customerCreateReport.updateReport(report);this.$refs.customerCreateReport.show();},hideModal(){this.$refs.customerCreateRequired.hide();}}});
// CONCATENATED MODULE: ./components/detailPayment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_detailPaymentvue_type_script_lang_js_ = (detailPaymentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

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
installComponents(component, {Rating: __webpack_require__(87).default,PopupPaymentCustomerCreateRequired: __webpack_require__(115).default,PopupPaymentCustomerCreateReport: __webpack_require__(116).default})


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/survey.vue?vue&type=template&id=13313e87&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurvey",attrs:{"id":"modal-survey"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objInfor)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[(_vm.isCancel)?_c('p',{staticClass:"title f-19 isCancel"},[_vm._v("\n            Huỷ yêu cầu "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objInfor.auctionBy.company || _vm.objInfor.auctionBy.name))]),_vm._v(" khảo sát hiện trạng và gửi báo giá cuối cùng\n        ")]):_c('p',{staticClass:"title f-20 main-black"},[_vm._v("\n            CHỌN "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objInfor.auctionBy.company || _vm.objInfor.auctionBy.name))]),_vm._v(" KHẢO SÁT VÀ CẬP NHẬT GIÁ CẢ\n        ")]),_vm._v(" "),_c('form',{staticClass:"group-content mt-20px",on:{"submit":function($event){$event.preventDefault();return _vm.sendMessage()}}},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    Tên dự án\n                ")]),_vm._v(" "),_c('span',{staticClass:"col-md-9 col-sm-12 pl-0 name-project",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                    "+_vm._s(_vm.detailProject.name)+"\n                ")])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    Soạn tin nhắn\n                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.message),expression:"objResearch.message"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"required":"","id":"customPlaceholder","rows":"5","placeholder":_vm.placeholder,"readonly":_vm.isCancel},domProps:{"value":(_vm.objResearch.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "message", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                        Địa điểm khảo sát\n                        "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.address),expression:"objResearch.address"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"type":"text","placeholder":"Nhập địa chỉ công trình","required":"","readonly":_vm.isCancel},domProps:{"value":(_vm.objResearch.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "address", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                        Thời gian khảo sát\n                        "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"d-flex"},[(_vm.isCancel)?[_c('div',{staticClass:"input-group custom-input-calendar",staticStyle:{"min-width":"170px"}},[_c('input',{staticClass:"form-control",attrs:{"type":"text","readonly":"","required":""},domProps:{"value":_vm.$moment(_vm.objResearch.date).format('DD/MM/YYYY')}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text custom-time",class:_vm.isCancel ? 'disabled' : ''},[_c('i',{staticClass:"fas fa-calendar-day"})])])])]:[_c('v-date-picker',{ref:"calendar",attrs:{"masks":{input: 'DD/MM/YYYY'},"model-config":{type: 'number',}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('div',{staticClass:"input-group custom-input-calendar"},[_c('input',_vm._g({staticClass:"form-control",attrs:{"type":"text","readonly":_vm.isCancel,"required":""},domProps:{"value":inputValue}},inputEvents)),_vm._v(" "),_c('div',{staticClass:"input-group-append",on:{"click":function($event){return _vm.triggerCalendar()}}},[_c('span',{staticClass:"input-group-text custom-time",class:_vm.isCancel ? 'disabled' : ''},[_c('i',{staticClass:"fas fa-calendar-day"})])])])]}}],null,false,3653150464),model:{value:(_vm.objResearch.date),callback:function ($$v) {_vm.$set(_vm.objResearch, "date", $$v)},expression:"objResearch.date"}})],_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.time),expression:"objResearch.time"}],staticClass:"ml-20px form-control",attrs:{"type":"time","readonly":_vm.isCancel},domProps:{"value":(_vm.objResearch.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "time", $event.target.value)}}})],2)]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13  col-md-3 col-sm-12 mt-1"},[_vm._v("\n                    Tài liệu đính kèm\n                ")]),_vm._v(" "),_c('div',{staticClass:"col-md-9 col-sm-12 pl-0"},[(!_vm.isCancel)?_c('InputFile',{attrs:{"accept":_vm.accepFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})],2):_vm._e(),_vm._v(" "),(_vm.isCancel && _vm.objInfor.survey[0].attachments)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.isCancel && _vm.objInfor.survey[0].attachments)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.objInfor.survey[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                     "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                ")])]})],2):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"form-group mb-50px group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.objResearch.agree),callback:function ($$v) {_vm.$set(_vm.objResearch, "agree", $$v)},expression:"objResearch.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý với "),_c('span',{staticClass:"main-color"},[_vm._v("điều khoản")]),_vm._v(" của Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"group-btn row"},[(!_vm.$auth.loggedIn)?_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide()}}},[_vm._v("\n                        VUI LÒNG ĐĂNG NHẬP\n                    ")])]):_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",class:_vm.isCancel ? 'delete' : '',attrs:{"type":"submit"}},[_vm._v("\n                        "+_vm._s(_vm.isCancel ? "HUỶ YÊU CẦU KHẢO SÁT" :"CHỌN VÀ GỬI YÊU CẦU KHẢO SÁT")+"\n                    ")])])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/survey.vue?vue&type=template&id=13313e87&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/survey.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var surveyvue_type_script_lang_js_ = ({props:['isService','detailProject','rawCategory'],data(){return{objResearch:{agree:false,date:new Date().getTime()},objInfor:null,arrFile:[],accepFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],options:this.getCategory(),date:new Date(),placeholder:'Xin chào, mình có xem qua hồ sơ năng lực và tư vấn của công ty. Mình quyết định chọn công ty khảo sát hiện trạng công trình và làm việc kỹ hơn về giải pháp thi công để nhận được báo giá cuối cùng vá giải pháp chính xác nhất cho công trình',isCancel:false};},mounted(){},methods:{triggerCalendar(){this.$refs.calendar.showPopover();},async sendMessage(){try{this.loader();var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objResearch,attachments:arrFile,project:this.detailProject._id,auction:this.objInfor._id};if(this.isCancel){let res=await this.$post(`member/survey/cancel`,obj);this.$notify({group:'all',text:`Bạn đã huỷ yêu cầu khảo sát với ${this.objInfor.auctionBy.company||this.objInfor.auctionBy.name}`,type:'dark'});}else{let res=await this.$post('member/survey',obj);}this.$emit('activeCompany',true);this.resetForm();this.loader(0);this.hide();}catch(err){console.log(err);this.loader(0);}},resetForm(){this.objResearch={};this.arrFile=[];this.objInfor=null;},getInforPerchant(infor){this.objInfor=infor;},setCancelPopup(status){this.isCancel=status;if(status){this.objResearch=this.objInfor.survey[0];}},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},show(){this.$refs.popupSurvey.showModal();},hide(){this.$refs.popupSurvey.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/survey.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyvue_type_script_lang_js_ = (surveyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/survey.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5b466a90"
  
)

/* harmony default export */ var survey = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ }),

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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyCustomerContact.vue?vue&type=template&id=afb81fa2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyContact",attrs:{"id":"modal-survey-customer-contact"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objConfirm)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-14"},[_vm._v("\n            Thông tin liên hệ "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objConfirm.auctionBy.company))])]),_vm._v(" "),_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Họ Tên:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red"},[_vm._v(_vm._s(_vm.objConfirm.auctionBy.name))])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Số điện thoại:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.phone || '090 465 9518'))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Địa chỉ Email:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.email || 'LONGB@EPOINT.VN'))])])])]),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('div',{staticClass:"btn-confirm",on:{"click":function($event){return _vm.hide()}}},[_c('span',[_vm._v("HOÀN TẤT")])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/surveyCustomerContact.vue?vue&type=template&id=afb81fa2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyCustomerContact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var surveyCustomerContactvue_type_script_lang_js_ = ({props:['objConfirm'],methods:{show(){console.log('objProject',this.objConfirm);this.$refs.popupSurveyContact.showModal();},hide(){this.$refs.popupSurveyContact.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/surveyCustomerContact.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyCustomerContactvue_type_script_lang_js_ = (surveyCustomerContactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/surveyCustomerContact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyCustomerContactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ba55388c"
  
)

/* harmony default export */ var surveyCustomerContact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/endProject.vue?vue&type=template&id=40a425a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalReportCustomer",attrs:{"id":"modal-payment-report"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_vm._v("\n            YÊU CẦU KẾT THÚC DỰ ÁN VỚI "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.auction.auctionBy.company))])]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.endProject()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên dự án")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Đánh giá chất lượng")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('Rating',{attrs:{"rating":_vm.numberRate},on:{"rating":_vm.getRating}})],1)]),_vm._v(" "),_c('div',{staticClass:"row mb-25px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Đánh giá của bạn")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objProject.review),expression:"objProject.review"}],staticClass:"form-control",attrs:{"type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objProject.review)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objProject, "review", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"footer d-flex px-0"},[_c('button',{ref:"btnSubmit",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('div',{staticClass:"btn-confirm   w-100",on:{"click":function($event){return _vm.triggerForm('CANCEL')}}},[_c('span',[_vm._v("KẾT THÚC DỰ ÁN")])])])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/paymentCustomer/endProject.vue?vue&type=template&id=40a425a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/endProject.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var endProjectvue_type_script_lang_js_ = ({props:['project','auction'],data(){return{numberRate:0,objProject:{}};},methods:{endProject(){this.loader();var obj={...this.objProject,auction:this.auction.deal[0].auction,project:this.auction.deal[0].project,auctionBy:this.auction.auctionBy._id,rating:this.numberRate};this.$post('member/auction/deal/finish',obj).then(res=>{this.$emit('getDetailAgain');this.hide();this.loader(0);}).catch(err=>{this.loader(0);});},getRating(rate){this.numberRate=Number(rate.rating+1);},triggerForm(){this.$refs.btnSubmit.click();},show(){this.$refs.modalReportCustomer.showModal();},hide(){this.$refs.modalReportCustomer.hideModal();this.numberRate=0;}}});
// CONCATENATED MODULE: ./components/popup/paymentCustomer/endProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var paymentCustomer_endProjectvue_type_script_lang_js_ = (endProjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/paymentCustomer/endProject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paymentCustomer_endProjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b8e48cf2"
  
)

/* harmony default export */ var endProject = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Rating: __webpack_require__(87).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xNS4xOTcxIDAuNUgxMy44MTI1QzEzLjQzMTcgMC41IDEzLjEyMDEgMC43MTc3NDIgMTMuMTIwMSAwLjk4Mzg3MVYxMC4wMTYxQzEzLjEyMDEgMTAuMjgyMyAxMy40MzE3IDEwLjUgMTMuODEyNSAxMC41SDE1LjE5NzFDMTUuNTc3OSAxMC41IDE1Ljg4OTUgMTAuMjgyMyAxNS44ODk1IDEwLjAxNjFWMC45ODM4NzFDMTUuODg5NSAwLjcxNzc0MiAxNS41Nzc5IDAuNSAxNS4xOTcxIDAuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yLjQ5MzA2IDYuNjg1NDVINS4zNzc4M0M1Ljc3MDE2IDYuNjg1NDUgNi4wOTMyNSA2LjkxMTI2IDYuMDkzMjUgNy4xODU0NVY4LjA0ODM1QzYuMDkzMjUgOC40Njc3OSA2Ljc4NTU5IDguNzAxNjYgNy4yNTg2OSA4LjQ0MzUxTDExLjg3NDMgNS45MzU0NUMxMi4yNDM2IDUuNzMzODQgMTIuMjQzNiA1LjMzODY4IDExLjg3NDMgNS4xMzcwNkw3LjI1ODY5IDIuNTU2NDJDNi43ODU1OSAyLjI5ODM1IDYuMDkzMjUgMi41MzIyMiA2LjA5MzI1IDIuOTU5NjRWMy44MjI1NUM2LjA5MzI1IDQuMDk2NzQgNS43NzAxNiA0LjMyMjU1IDUuMzc3ODMgNC4zMjI1NUgyLjQ5MzA2QzIuMTAwNzQgNC4zMjI1NSAxLjc3NzY0IDQuNTQ4MzUgMS43Nzc2NCA0LjgyMjU1VjYuMTc3MzlDMS43NjYxIDYuNDU5NjQgMi4wODkyIDYuNjg1NDUgMi40OTMwNiA2LjY4NTQ1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-survey.4ed5e72.svg";

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyQuoteOwner.vue?vue&type=template&id=0594bba0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"company-quote-owner",class:[_vm.company && (_vm.company.survey.length) ? 'active' : 'border-0', _vm.bgWhite ? 'bg-white': '' ]},[_vm._ssrNode("<div class=\"row cover\"><div class=\"col-md-6 col-sm-12   pr-0 \"><div class=\"d-flex content-left\"><div>"+((_vm.company.auctionBy && _vm.company.auctionBy.photo)?("<img"+(_vm._ssrAttr("src",_vm.company.auctionBy.photo))+" width=\"70\">"):("<div class=\"cover-img\"><span>"+_vm._ssrEscape(" "+_vm._s(_vm.company.auctionBy.company.slice(0,1).toUpperCase() || _vm.company.auctionBy.name.slice(0,1).toUpperCase()))+"</span></div>"))+"</div> <div class=\"ml-1 ml-16px\" style=\"width:100%\"><div class=\"mb-0 f-14 fw-600 main-black d-flex justify-content-between\"><p class=\"mb-0\">"+_vm._ssrEscape(_vm._s(_vm.company.auctionBy.company || _vm.company.auctionBy.name))+"</p> <div><img"+(_vm._ssrAttr("src",__webpack_require__(86)))+"> <span class=\"main-color text-11\">"+_vm._ssrEscape(_vm._s(_vm.company.auctionBy.province))+"</span></div></div> <div class=\"d-inline-flex main-black pt-10px pb-10px\"><div class=\"star-rate mr-1\">\n                            5.0\n                        </div> "+(_vm._ssrList((4),function(item,idx){return ("<div class=\"group-star\"><i class=\"fas fa-star mr-1px f-13 main-yellow\"></i></div>")}))+" <span class=\"evaluate f-12 mb-0  ml-4px\">\n                            (<span class=\"main-yellow\">4</span> đánh giá)\n                        </span></div> <div class=\"text-11 color-grey\"><span>Chi phí ước tính -\n                            <span class=\"fw-600 main-color text-13\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.formatNamePrice(_vm.company.step=== 3 ? _vm.company.deal[0].price: _vm.company.price))+"\n                            ")+"</span></span> <span class=\"px-11px\"> | </span> <span>Thời gian thi công -\n                            <span class=\"fw-600 main-color text-13\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.company.step=== 3 ? _vm.company.deal[0].day : _vm.company.day)+" ngày\n                            ")+"</span></span></div></div></div></div> <div class=\"col-md-6 col-sm-12 content-right\">"+((_vm.company && _vm.company.survey.length)?(((_vm.company.step == 0)?("<div class=\"describe  d-flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt> <span>Chưa xác nhận</span></div> <div class=\"date-time \"><div class=\"date\"><span>Ngày khảo sát - </span><span class=\"text-red\">"+_vm._ssrEscape(_vm._s(_vm.$moment(_vm.company.survey[0].date).format('DD/MM/YYYY'))+" ")+"</span></div> <div class=\"time\"><span>Giờ - </span><span class=\"text-red\">"+_vm._ssrEscape(_vm._s(_vm.company.survey[0].time)+" ")+"</span></div></div> <div class=\"group-btn\"><div class=\"btn-send cancel\"><img"+(_vm._ssrAttr("src",__webpack_require__(134)))+" alt> <span>Huỷ khảo sát</span></div> <div class=\"btn-send cup\"><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt> <span>Thông tin liên hệ</span></div></div>"):(_vm.company.step == 1)?("<div class=\"describe d-flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" alt class=\"icon-check\"> <span>Đã xác nhận</span></div> <div class=\"date-time \"><div class=\"date\"><span>Ngày khảo sát - </span><span class=\"text-red\">"+_vm._ssrEscape(_vm._s(_vm.$moment(_vm.company.survey[0].date).format('DD/MM/YYYY'))+" ")+"</span></div> <div class=\"time\"><span>Giờ - </span><span class=\"text-red\">"+_vm._ssrEscape(_vm._s(_vm.company.survey[0].time)+" ")+"</span></div></div> <div class=\"group-btn\"><div class=\"btn-send\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>Gửi tin nhắn</span></div> <div class=\"btn-send cup\"><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt> <span>Thông tin liên hệ</span></div></div>"):(_vm.company.step===3)?(((_vm.company.deal.length && _vm.company.deal[0].status == 'CANCEL' )?("<div class=\"describe  d-flex\"><i class=\"fas fa-times text-red f-16 mt-5px mr-5px\"></i> <span class=\"text-red\">Nhà thầu từ chối thương lượng</span></div>"):(_vm.company.deal.length && _vm.company.deal[0].status == 'OK' )?("<div class=\"describe d-none\"></div>"):("<div class=\"describe  d-flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt> <span>Đang thương lượng</span></div>"))+" "+((_vm.company.deal.length)?("<div class=\"d-flex\"><span class=\"description\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.company.deal[0].message)+"\n                        ")+"</span></div>"):"<!---->")+" "+((_vm.company.deal.length &&  _vm.company.deal[0].attachments)?("<div>"+(_vm._ssrList((_vm.company.deal[0].attachments),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                                "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                            ")+"</p>")}))+"</div>"):"<!---->")+" <div class=\"list-payment\">"+((_vm.company.deal.length)?("<ul>"+(_vm._ssrList((_vm.company.deal[0].payments),function(pay,idx){return ("<li><span>"+_vm._ssrEscape("Thanh toán đợt "+_vm._s(idx+1))+"</span> - <span class=\"text-main\">"+_vm._ssrEscape(_vm._s(pay.value))+"</span></li>")}))+"</ul>"):"<!---->")+"</div> <div class=\"group-btn\">"+(( _vm.company.step == 3 && _vm.company.deal.length && _vm.company.deal[0].status == 'CANCEL' )?("<div class=\"btn-send cup mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>Xem tin nhắn</span></div>"):( _vm.company.step == 3 && _vm.company.deal.length && _vm.company.deal[0].status == 'OK' )?("<div class=\"btn-send  mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>Gửi tin nhắn</span></div>"):("<div class=\"btn-send cup mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt class=\"mb-2px\"> <span>Cập nhật</span></div>"))+" "+((!_vm.company.isFinish)?(((_vm.company.step == 3 && _vm.company.deal.length && _vm.company.deal[0].status == 'OK'  )?("<div class=\"btn-send cancel  mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(181)))+" alt> <span>Kết thúc dự án </span></div>"):("<div class=\"btn-send cancel \"><img"+(_vm._ssrAttr("src",__webpack_require__(134)))+" alt> <span>Huỷ thương lượng</span></div>"))):"<!---->")+"</div>"):(_vm.company.step===2)?(((_vm.company.statusUpdate == 'ACTIVE')?("<div class=\"describe  d-flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" class=\"icon-check\"> <span>Báo giá cập nhật</span></div> <div class=\"d-flex\"><span class=\"description\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.company.description)+"\n                            ")+"</span></div> "+((_vm.company.attachments)?("<div>"+(_vm._ssrList((_vm.company.attachments),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                                    "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                ")+"</p>")}))+"</div>"):"<!---->")+" "+((_vm.company.payments)?("<div class=\"list-payment\"><ul>"+(_vm._ssrList((_vm.company.payments),function(pay,idx){return ("<li><span>"+_vm._ssrEscape("Thanh toán đợt "+_vm._s(idx+1))+"</span> - <span class=\"text-main\">"+_vm._ssrEscape(_vm._s(pay.value))+"</span></li>")}))+"</ul></div>"):"<!---->")+" <div class=\"group-btn\"><div class=\"btn-send  mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>Gửi tin nhắn</span></div> <div class=\"btn-send cup mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt> <span>Thương lượng</span></div></div>"):("<div class=\"d-flex\"><span class=\"description\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.company.description)+"\n                            ")+"</span></div> "+((_vm.company.attachments)?("<div>"+(_vm._ssrList((_vm.company.attachments),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                                    "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                ")+"</p>")}))+"</div>"):"<!---->")))):"<!---->")):("<div class=\"describe \">"+_vm._ssrEscape(_vm._s(_vm.company.description))+"</div> <div class=\"group-btn\"><div class=\"btn-send\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>Gửi tin nhắn</span></div> "+((!_vm.company.isDestroy)?("<div class=\"btn-send cup\"><img"+(_vm._ssrAttr("src",__webpack_require__(182)))+" alt style=\"margin-top:-2px\"> <span>Hẹn khảo sát</span></div>"):"<!---->")+"</div>"))+"</div></div> "),(_vm.company.step == 3 && _vm.company.deal.length && _vm.company.deal[0].status == 'OK' )?[_c('DetailPayment',{attrs:{"auction":_vm.company,"detailProject":_vm.detailProject}})]:_vm._e(),_vm._ssrNode(" "),_c('PopupLienheform',{ref:"LienHeFormPop",attrs:{"isService":true,"title":_vm.detailProject.name,"rawCategory":_vm.rawCategory}}),_vm._ssrNode(" "),_c('PopupSurvey',{ref:"surveyPopup",attrs:{"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory},on:{"activeCompany":_vm.getActiveCompany}}),_vm._ssrNode(" "),(_vm.company)?_c('PopupSurveyUpdate',{ref:"surveyUpdate",attrs:{"surveryUpdate":_vm.surveryUpdate,"objCompany":_vm.company,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory},on:{"activeCompany":_vm.getActiveCompany}}):_vm._e(),_vm._ssrNode(" "),(_vm.company)?_c('PopupDealUpdate',{ref:"dealUpdate",attrs:{"objCompany":_vm.company,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory},on:{"activeCompany":_vm.getActiveCompany}}):_vm._e(),_vm._ssrNode(" "),(_vm.company)?_c('PopupSurveyCustomerContact',{ref:"customerContact",attrs:{"objConfirm":_vm.company}}):_vm._e(),_vm._ssrNode(" "),(_vm.company)?_c('PopupPaymentCustomerEndProject',{ref:"endProject",attrs:{"project":_vm.detailProject,"auction":_vm.company},on:{"getDetailAgain":_vm.getActiveCompany}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CompanyQuoteOwner.vue?vue&type=template&id=0594bba0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyQuoteOwner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CompanyQuoteOwnervue_type_script_lang_js_ = ({props:['company','detailProject','rawCategory','bgWhite'],data(){return{isActive:false,surveryUpdate:false};},mounted(){},methods:{openLienHeMail(){this.$refs.LienHeFormPop.show();this.$refs.LienHeFormPop.getInforPerchant(this.company);},openPopupSurvey(status){this.$refs.surveyPopup.show();this.$refs.surveyPopup.getInforPerchant(this.company);if(status=='CANCEL'){this.$refs.surveyPopup.setCancelPopup(true);}else{this.$refs.surveyPopup.setCancelPopup(false);}},destroyDeal(item){this.loader();var obj={project:item.deal[0].project,auction:item.deal[0].auction};this.$post('member/auction/deal/destroy',obj).then(res=>{this.getActiveCompany();this.loader(0);}).catch(err=>{this.loader(0);});},getActiveCompany(){this.$emit('getDetailAgain');},checkShowTypeTime(time){var hour=time.toString().split(':');if(Number(hour[0])<=12){return`${time} AM`;}else{return`${time} PM`;}},openSurveyUpdate(status){if(status=='UPDATE'){this.surveryUpdate=true;}this.$refs.surveyUpdate.show();},openEndProject(){console.log('endProject');this.$refs.endProject.show();},openDeal(){this.$refs.dealUpdate.show();},openCustomerContact(){this.$refs.customerContact.show();}}});
// CONCATENATED MODULE: ./components/CompanyQuoteOwner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CompanyQuoteOwnervue_type_script_lang_js_ = (CompanyQuoteOwnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CompanyQuoteOwner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CompanyQuoteOwnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "305363c9"
  
)

/* harmony default export */ var CompanyQuoteOwner = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DetailPayment: __webpack_require__(154).default,PopupLienheform: __webpack_require__(91).default,PopupSurvey: __webpack_require__(155).default,PopupSurveyUpdate: __webpack_require__(92).default,PopupDealUpdate: __webpack_require__(156).default,PopupSurveyCustomerContact: __webpack_require__(157).default,PopupPaymentCustomerEndProject: __webpack_require__(158).default})


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

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNSAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDEwLjY1NTNWMS4zNDQ3M0w5LjgyODEyIDZMMTUgMTAuNjU1M1oiIGZpbGw9IiNGMkYyRjIiLz4KPHBhdGggZD0iTTcuNTAwMTMgOC4wOTU0N0w2LjAyMzUyIDYuNzY2MzZMMC44NTE1NjIgMTEuNDIxNkgxNC4xNDg3TDguOTc2NzQgNi43NjYzNkw3LjUwMDEzIDguMDk1NDdaIiBmaWxsPSIjRjJGMkYyIi8+CjxwYXRoIGQ9Ik0xNC4xNDg3IDAuNTc4MzY5SDAuODUxNTYyTDcuNTAwMTMgNi41NjI3NkwxNC4xNDg3IDAuNTc4MzY5WiIgZmlsbD0iI0YyRjJGMiIvPgo8cGF0aCBkPSJNMCAxLjM0NDczVjEwLjY1NTNMNS4xNzE5MiA2TDAgMS4zNDQ3M1oiIGZpbGw9IiNGMkYyRjIiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMzQzNjYgMTUuMzQwN0wwIDguOTk2NTZMMy4wMjU0NyA1Ljk3MTA5TDYuMzQzNjYgOS4yODkyOEwxMy45NzQ1IDEuNjU4OTRMMTcgNC42ODQ0TDYuMzQzNjYgMTUuMzQwN1oiIGZpbGw9IiMxOThBQzYiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-location.ebc9fcd.svg";

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Rating.vue?vue&type=template&id=60629e83&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"group-star d-flex",attrs:{"id":"rating-component"}},[_vm._ssrNode(((_vm.rating)?((_vm._ssrList((_vm.rating),function(item,index){return ("<i class=\"fas fa-star mr-1px f-13 main-yellow\"></i>")}))+" "+(_vm._ssrList(((5-_vm.rating)),function(tmp,idx){return ("<i class=\"fas fa-star mr-1px f-13 \"></i>")}))):((_vm._ssrList((5),function(item,index){return ("<i class=\"fas fa-star mr-1px f-13 \"></i>")})))))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Rating.vue?vue&type=template&id=60629e83&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Rating.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Ratingvue_type_script_lang_js_ = ({props:['rating','report','noClick'],name:'Rating',data(){return{};},methods:{emitRating(rating){if(this.noClick){return;}var obj={...this.report,rating};this.$emit('rating',obj);}}});
// CONCATENATED MODULE: ./components/Rating.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Ratingvue_type_script_lang_js_ = (Ratingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Rating.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Ratingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0bebb898"
  
)

/* harmony default export */ var Rating = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjc2MDEgMTMuOTM0NEMxMi4zMTE5IDEwLjkxOTMgMTEuMTQyOSA3Ljk0ODE4IDguMzg0ODQgNi45OTU0QzkuNDU2NzIgNi4zMjc4MyAxMC4xNjgyIDUuMTM5OTkgMTAuMTY4MiAzLjc4MjkxQzEwLjE2ODIgMS42OTU1NyA4LjQ3NTczIDAgNi4zODUyNiAwQzQuMjk0NzkgMCAyLjYwMjM1IDEuNjkyNDQgMi42MDIzNSAzLjc4MjkxQzIuNjAyMzUgNS4xMzY4NiAzLjMxNjk0IDYuMzI3ODMgNC4zODU2OCA2Ljk5NTRDMS42Mjc2NCA3Ljk0ODE4IDAuNDU1NDY2IDEwLjkxOTMgMC4wMTA0MTgzIDEzLjkzNDRDLTAuMDc0MjAzNSAxNC40OTU0IDAuMzY3NzEgMTUgMC45MzQ5OSAxNUgxMS44MjkzQzEyLjQwMjggMTUgMTIuODQ0NyAxNC40OTU0IDEyLjc2MDEgMTMuOTM0NFpNNC4wMjgzOSAzLjc4MjkxQzQuMDI4MzkgMi40ODIyNCA1LjA4NzczIDEuNDIyOSA2LjM4ODQgMS40MjI5QzYuNjk4NjggMS40MjI5IDYuOTUyNTQgMS42NzY3NyA2Ljk1MjU0IDEuOTg3MDVDNi45NTI1NCAyLjI5NzMzIDYuNjk4NjggMi41NTExOSA2LjM4ODQgMi41NTExOUM1LjcwODI5IDIuNTUxMTkgNS4xNTY2OCAzLjEwMjggNS4xNTY2OCAzLjc4MjkxQzUuMTU2NjggNC4wOTMxOSA0LjkwMjgxIDQuMzQ3MDUgNC41OTI1MyA0LjM0NzA1QzQuMjc5MTIgNC4zNDcwNSA0LjAyODM5IDQuMDk2MzIgNC4wMjgzOSAzLjc4MjkxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/lienheform.vue?vue&type=template&id=7a40a608&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalLienForm",attrs:{"id":"modal-cotact-form-submit"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objInfor)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20",class:_vm.isService ? '' : 'hide-border'},[_vm._v("\n            Gửi tin nhắn cho\n            "),(_vm.isService)?_c('span',[_vm._v(_vm._s(_vm.objInfor.auctionBy.company || _vm.objInfor.auctionBy.name))]):_c('span',[_vm._v("Công ty cổ phần Epoint")])]),_vm._v(" "),(!_vm.isService)?_c('p',{staticClass:"f-13 description pl-60px"},[_vm._v("Vui lòng điền vào thông tin dưới đây. Bạn sẽ tốn\n            "),_c('span',[_vm._v("3 Tokens")]),_vm._v(" khi gửi tin nhắn cho\n            "),(_vm.isService)?_c('span',[_vm._v(_vm._s(_vm.objInfor.auctionBy.company || _vm.objInfor.auctionBy.name))]):_c('span',[_vm._v("Công ty cổ phần Epoint")])]):_vm._e(),_vm._v(" "),_c('form',{staticClass:"group-content mt-20px",on:{"submit":function($event){$event.preventDefault();return _vm.sendMessage()}}},[(_vm.isService)?_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    Tên dự án\n                ")]),_vm._v(" "),_c('span',{staticClass:"col-md-9 col-sm-12 pl-0 name-project",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                    "+_vm._s(_vm.title)+"\n                ")])]):_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    Dịch vụ yêu cầu\n                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('treeselect',{staticClass:"pl-0 pr-0 col-md-9 col-sm-12",attrs:{"options":_vm.options,"disable-branch-nodes":true,"clearable":false,"value":_vm.objResearch.category,"multiple":true,"required":"","placeholder":"Chọn dịch vụ"},model:{value:(_vm.objResearch.category),callback:function ($$v) {_vm.$set(_vm.objResearch, "category", $$v)},expression:"objResearch.category"}})],1),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    Soạn tin nhắn\n                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.message),expression:"objResearch.message"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"required":"","id":"customPlaceholder","rows":"5","placeholder":_vm.placeholder},domProps:{"value":(_vm.objResearch.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "message", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13  col-md-3 col-sm-12 mt-1"},[_vm._v("\n                    Tài liệu đính kèm\n                ")]),_vm._v(" "),_c('div',{staticClass:"col-md-9 col-sm-12 pl-0"},[_c('InputFile',{attrs:{"accept":_vm.accepFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}}),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})],2):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"form-group mb-50px group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.objResearch.agree),callback:function ($$v) {_vm.$set(_vm.objResearch, "agree", $$v)},expression:"objResearch.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý với "),_c('span',{staticClass:"main-color"},[_vm._v("điều khoản")]),_vm._v(" của Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"group-btn row"},[(!_vm.$auth.loggedIn)?_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide()}}},[_vm._v("\n                        VUI LÒNG ĐĂNG NHẬP\n                    ")])]):_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"submit"}},[_vm._v("\n                        GỬI TIN NHẮN\n                    ")])])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/lienheform.vue?vue&type=template&id=7a40a608&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/lienheform.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lienheformvue_type_script_lang_js_ = ({props:['isService','title','rawCategory'],data(){return{objResearch:{agree:false},objInfor:null,arrFile:[],accepFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],options:this.getCategory(),date:new Date(),placeholder:'Xin chào, mình có xem qua hồ sơ năng lực của công ty. Mình cần công ty tư vấn hỗ trợ xây dựng nhà phố 1 trệt 4 lầu tại Gò Vấp Diện tích đất: 5x20 Ngân sách dự trù: 3 tỷ Mong nhận được phản hồi sớm từ công ty'};},mounted(){},methods:{async sendMessage(){try{this.loader();var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objResearch,attachments:arrFile,to:this.isService?this.objInfor.auctionBy._id:this.objInfor._id,title:this.isService?this.objInfor.auctionBy.company?this.objInfor.auctionBy.company:this.objInfor.auctionBy.name:this.objInfor.company?this.objInfor.company:this.objInfor.name};let res=await this.$post(`/member/rooms`,obj);this.loader(0);this.resetForm();this.hide();}catch(err){console.log(err);this.loader(0);}},resetForm(){this.objResearch={};this.arrFile=[];this.objInfor=null;},getInforPerchant(infor){this.objInfor=infor;console.log('ingo',infor);},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},show(){this.$refs.modalLienForm.showModal();},hide(){this.$refs.modalLienForm.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/lienheform.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_lienheformvue_type_script_lang_js_ = (lienheformvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/lienheform.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_lienheformvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dee8c0f6"
  
)

/* harmony default export */ var lienheform = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyUpdate.vue?vue&type=template&id=1e5246a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyUpdate",attrs:{"id":"modal-survey-update"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objCompany)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[(_vm.isCompany)?_c('p',{staticClass:"title f-14 fw-600"},[_vm._v("\n            Khách hàng "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objCompany.projectOwner.name))]),_vm._v(" đã gửi yêu cầu thương lượng giá/tiến độ với bạn. Bạn sẽ tốn "),_c('span',{staticClass:"text-main"},[_vm._v("500 Tokens")]),_vm._v("  khi xác nhận đồng ý và bắt đầu công trình\n        ")]):_c('p',{staticClass:"title f-14 fw-600"},[_vm._v("\n            Chọn "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objCompany.auctionBy.company))]),_vm._v(" làm đơn vị thi công và yêu cầu thương lượng\n        ")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.submitForm()}}},[_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên dự án:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"f-16 fw-600",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                            "+_vm._s(_vm.detailProject.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[(_vm.isCompany)?_c('span',{staticClass:"key"},[_vm._v("Tin nhắn của khách "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]):_c('span',{staticClass:"key"},[_vm._v("Soạn tin nhắn "),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[((_vm.isCompany && _vm.objCompany.deal[0]) || _vm.surveryUpdate)?[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].message),expression:"objCompany.deal[0].message"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5","readonly":!_vm.surveryUpdate},domProps:{"value":(_vm.objCompany.deal[0].message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "message", $event.target.value)}}})]:[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objSurvey.message),expression:"objSurvey.message"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objSurvey.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objSurvey, "message", $event.target.value)}}})]],2)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Đơn giá dự thầu")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.formatNamePrice(_vm.objCompany.price)))])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Đơn giá thương lượng")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[((_vm.isCompany && _vm.objCompany.deal[0]) || _vm.surveryUpdate)?_c('div',{staticClass:"input-group"},[_c('currency-input',{staticClass:"form-control fw-600",attrs:{"type":"text","required":"","placeholder":"200,000,000","readonly":!_vm.surveryUpdate},model:{value:(_vm.objCompany.deal[0].price),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "price", $$v)},expression:"objCompany.deal[0].price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1):_c('div',{staticClass:"input-group"},[_c('currency-input',{staticClass:"form-control fw-600",attrs:{"type":"text","required":"","placeholder":"200,000,000"},model:{value:(_vm.objSurvey.price),callback:function ($$v) {_vm.$set(_vm.objSurvey, "price", $$v)},expression:"objSurvey.price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1)])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tiến độ thi công")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.objCompany.day)+" ngày")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tiến độ mong muốn")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[((_vm.isCompany && _vm.objCompany.deal[0]) || _vm.surveryUpdate)?_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].day),expression:"objCompany.deal[0].day"}],staticClass:"form-control",attrs:{"type":"text","required":"","readonly":!_vm.surveryUpdate},domProps:{"value":(_vm.objCompany.deal[0].day)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "day", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("Ngày")])])]):_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objSurvey.day),expression:"objSurvey.day"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objSurvey.day)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objSurvey, "day", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("Ngày")])])])])]),_vm._v(" "),((_vm.isCompany && _vm.objCompany.deal[0]) || (_vm.surveryUpdate && _vm.objCompany.deal[0]))?[_c('div',{staticClass:"row mb-15px mr-60px"},[(_vm.objCompany.payments)?_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(item.value))])])])]})],2):_vm._e(),_vm._v(" "),(_vm.objCompany.deal[0] &&  _vm.objCompany.deal[0].payments)?_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.deal[0].payments),function(item,idx){return [_c('div',{key:idx+10,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.value),expression:"item.value"}],staticClass:"form-control",attrs:{"type":"text","required":"","readonly":!_vm.surveryUpdate},domProps:{"value":(item.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "value", $event.target.value)}}})])])]})],2):_vm._e()])]:[_c('div',{staticClass:"row mb-15px mr-60px"},[(_vm.objCompany.payments)?_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(item.value))])])])]})],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx+10,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh toán đợt "+_vm._s(idx+1))]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.newValue),expression:"item.newValue"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(item.newValue)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "newValue", $event.target.value)}}})])])]})],2)])],_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Yêu cầu báo cáo")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[(_vm.isCompany && _vm.objCompany.deal[0])?_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objCompany.deal[0].report,"placeholder":"","clearable":false,"disabled":""},model:{value:(_vm.objCompany.deal[0].report),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "report", $$v)},expression:"objCompany.deal[0].report"}}):_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objSurvey.report,"placeholder":"","clearable":false},model:{value:(_vm.objSurvey.report),callback:function ($$v) {_vm.$set(_vm.objSurvey, "report", $$v)},expression:"objSurvey.report"}})],1)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"f-13  col-md-3 col-sm-12 "},[_c('span',{staticClass:"key"},[_vm._v("Tài liêu đính kèm:")])]),_vm._v(" "),(!_vm.isCompany)?_c('div',{staticClass:"col-md-9 "},[_c('InputFile',{key:"file",ref:"akjklak",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}})],1):_vm._e(),_vm._v(" "),(!_vm.isCompany)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-md-9 "},[((_vm.isCompany &&  _vm.objCompany.deal[0] && _vm.objCompany.deal[0].attachments) || _vm.surveryUpdate)?[_vm._l((_vm.objCompany.deal[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                     "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                    "),(_vm.surveryUpdate)?_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFileOld(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})]):_vm._e()])]})]:_vm._e(),_vm._v(" "),(_vm.arrFile.length)?[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx + 30,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})]:_vm._e()],2)]),_vm._v(" "),(_vm.isCompany)?_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Phản hồi của bạn"),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objSurvey.feedback),expression:"objSurvey.feedback"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objSurvey.feedback)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objSurvey, "feedback", $event.target.value)}}})]],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form-group group-checkbox mb-0 d-flex"},[_c('b-form-checkbox',{staticClass:"f-13",attrs:{"checked":_vm.objSurvey.agree,"name":"checkbox-agree","required":""},model:{value:(_vm.objSurvey.agree),callback:function ($$v) {_vm.$set(_vm.objSurvey, "agree", $$v)},expression:"objSurvey.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("Tôi đồng ý với "),_c('span',{staticClass:"main-color"},[_vm._v("điều khoản")]),_vm._v(" của Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1)],2),_vm._v(" "),_c('div',{staticClass:"footer"},[(_vm.isCompany)?[_c('div',{staticClass:"d-flex"},[_c('button',{ref:"btnConfirm",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('button',{staticClass:"btn-confirm mr-15px",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('ACCEPT')}}},[_c('span',[_vm._v("ĐỒNG Ý VÀ BẮT ĐẦU DỰ ÁN")])]),_vm._v(" "),_c('button',{staticClass:"btn-confirm cancel",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('CANCEL')}}},[_c('span',[_vm._v("TỪ CHỐI YÊU CẦU THƯƠNG LƯỢNG")])])])]:[_c('button',{staticClass:"btn-confirm",attrs:{"type":"submit"}},[_c('span',[_vm._v("GỬI YÊU CẦU THƯƠNG LƯỢNG")])])]],2)])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/surveyUpdate.vue?vue&type=template&id=1e5246a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyUpdate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var surveyUpdatevue_type_script_lang_js_ = ({props:['objCompany','detailProject','rawCategory','isCompany','surveryUpdate'],data(){return{optionSearch:[{id:1,label:'1 tuần 1 lần'},{id:2,label:'2 tuần 1 lần'},{id:4,label:'1 tháng 1 lần'}],acceptFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFile:[],objSurvey:{message:'',report:1,agree:false},statusCallAPI:''};},mounted(){},methods:{async submitForm(){try{// this.loader()
var arrPayment=[];if(this.surveryUpdate){var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var fileOld=this.objCompany.deal[0].attachments||[];var arrFile=fileOld.concat(fileNew);this.objCompany.deal[0].payments.forEach(item=>{var obj={key:item.key,value:item.value};arrPayment.push(obj);});var obj={...this.objCompany.deal[0],project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction,payments:arrPayment,attachments:arrFile};}else{this.objCompany.payments.forEach(item=>{var obj={key:item.key,value:item.newValue};arrPayment.push(obj);});var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objSurvey,project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction,payments:arrPayment,attachments:arrFile};}let url='';if(this.statusCallAPI=='ACCEPT'){url='member/auction/deal/confirmed';}else if(this.statusCallAPI=='CANCEL'){url='member/auction/deal/cancel';}else{url='member/auction/deal';}let res=await this.$post(url,obj);console.log(res);this.hide();this.arrFile=[];if(this.statusCallAPI=='ACCEPT'||this.statusCallAPI=='CANCEL'){this.$emit('getListParent');}else{this.$emit('activeCompany');}}catch(err){this.loader(0);console.log(err);}},confirmSurvey(status){this.statusCallAPI=status;this.$refs.btnConfirm.click();},show(){console.log('objProject',this.objCompany);console.log('objProject',this.detailProject);console.log('objProject',this.rawCategory);this.$refs.popupSurveyUpdate.showModal();},hide(){this.$refs.popupSurveyUpdate.hideModal();},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objCompany.deal[0].attachments=this.objCompany.deal[0].attachments.filter(item=>item!==file);},getFile(file){this.arrFile=this.arrFile.concat(file);}}});
// CONCATENATED MODULE: ./components/popup/surveyUpdate.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyUpdatevue_type_script_lang_js_ = (surveyUpdatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/surveyUpdate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyUpdatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d38bb21"
  
)

/* harmony default export */ var surveyUpdate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=company-quote-owner.js.map