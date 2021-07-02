exports.ids = [26,16];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/payment/createReport.vue?vue&type=template&id=452ce864&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalCreateReport",attrs:{"id":"modal-payment-report"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_vm._v("\n            TẠO BÁO CÁO TIẾN ĐỘ THI CÔNG\n        ")]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.getForm()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tên dự án")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nhân viên báo cáo")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.nameStaff),expression:"objReport.nameStaff"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objReport.nameStaff)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "nameStaff", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Thời gian")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.time),expression:"objReport.time"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objReport.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "time", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-25px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nhật ký công việc")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.note),expression:"objReport.note"}],staticClass:"form-control",attrs:{"type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objReport.note)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "note", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Hình ảnh đính kèm")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('InputFile',{key:"file",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Thêm hình ảnh'},on:{"input":_vm.getFile}}),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',[_c('div',{staticClass:"row cover-img"},[(_vm.arrBase64.length)?[_vm._l((_vm.arrBase64),function(item,idx){return [_c('div',{key:idx+50,staticClass:"col-6 img"},[_c('div',{staticClass:" item-img",style:({
                                                    'background-image': 'url(' + "" + (item.base64) + ')',
                                                })},[_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])])]})]:_vm._e()],2)]):_vm._e(),_vm._v(" "),(_vm.objReport.attachment && _vm.objReport.attachment.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.objReport.attachment && _vm.objReport.attachment.length)?_c('div',[_c('div',{staticClass:"row cover-img"},[(_vm.objReport.attachment && _vm.objReport.attachment.length)?[_vm._l((_vm.objReport.attachment),function(item,idx){return [_c('div',{key:idx+100,staticClass:"col-6 img"},[_c('div',{staticClass:" item-img",style:({
                                                    'background-image': 'url(' + "" + item + ')',
                                                })},[_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFileOld(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])])]})]:_vm._e()],2)]):_vm._e()],1)])]),_vm._v(" "),_c('div',{staticClass:"footer d-flex"},[_c('button',{ref:"btnSubmitReport",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('div',{staticClass:"btn-confirm flex-1",on:{"click":function($event){return _vm.triggerForm('OK')}}},[_c('span',[_vm._v("TẠO BÁO CÁO THI CÔNG")])]),_vm._v(" "),_c('div',{staticClass:"btn-confirm update flex-1 ml-25px",on:{"click":function($event){return _vm.triggerForm('DRAFT')}}},[_c('span',[_vm._v("LƯU BẢN NHÁP")])])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/payment/createReport.vue?vue&type=template&id=452ce864&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/payment/createReport.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createReportvue_type_script_lang_js_ = ({props:['project','activeReport'],data(){return{acceptFile:['png','jpg','jpeg','tiff'],objReport:{},arrFile:[],arrBase64:[]};},watch:{activeReport(){this.objReport.time='Tuần '+Number(this.activeReport);}},methods:{async getForm(){var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var fileOld=this.objReport.attachment||[];var arrFile=fileOld.concat(fileNew);var obj={...this.objReport,reportId:this.activeReport-1,attachment:arrFile};this.$emit('createReport',obj);this.hide();},updaetObjectReport(obj){this.objReport=obj;},triggerForm(status){this.objReport.status=status;this.$refs.btnSubmitReport.click();},async getFile(arrFile){this.arrFile=this.arrFile.concat(arrFile);var arrBase64=[];this.arrFile.forEach(async item=>{var base64=await this._toBase64(item);arrBase64.push({base64,name:item.name});});this.arrBase64=arrBase64;},clearFile(file){this.arrBase64=this.arrBase64.filter(item=>item.base64!==file.base64);this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objReport.attachment=this.objReport.attachment.filter(item=>item!==file);},show(){this.$refs.modalCreateReport.showModal();},hide(){this.$refs.modalCreateReport.hideModal();this.arrFile=[];this.arrBase64=[];}}});
// CONCATENATED MODULE: ./components/popup/payment/createReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var payment_createReportvue_type_script_lang_js_ = (createReportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/payment/createReport.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  payment_createReportvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d73e0fd2"
  
)

/* harmony default export */ var createReport = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=popup-payment-create-report.js.map