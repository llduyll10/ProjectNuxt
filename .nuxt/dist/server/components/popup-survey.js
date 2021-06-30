exports.ids = [31,16];
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

/***/ 287:
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
var componentNormalizer = __webpack_require__(4);

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
installComponents(component, {InputFile: __webpack_require__(213).default,Modal: __webpack_require__(79).default})


/***/ })

};;
//# sourceMappingURL=popup-survey.js.map