exports.ids = [23,14,16];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FormProject.vue?vue&type=template&id=8f027a94&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<p class=\"title f-20 mb-10px\">"+_vm._ssrEscape(_vm._s(_vm.isModal ? 'Chỉnh sửa dự án' : 'Thông tin dự án'))+"</p> <p class=\"f-13 description\">Vui lòng điền vào thông tin dưới đây. Bạn sẽ nhận được <span>8-10</span>  chào giá tạm tính từ những công ty xây dựng/đơn vị thiết kế uy tín trong khu vực. Bạn thoà sức <span>\n        yêu cầu tư vấn</span>  và <span>chọn lựa</span> đơn vị phù hợp nhất cho dự án</p> "),_vm._ssrNode("<form class=\"group-content mt-36px\">","</form>",[_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 \">\n                Dịch vụ yêu cầu\n                <span style=\"color:red\">*</span></label> "),_c('treeselect',{staticClass:"pl-0 pr-0 col-md-9 col-sm-12",attrs:{"options":_vm.options,"disable-branch-nodes":true,"value":_vm.objProject.category,"multiple":true,"required":"","placeholder":"Chọn dịch vụ","clearable":false},model:{value:(_vm.objProject.category),callback:function ($$v) {_vm.$set(_vm.objProject, "category", $$v)},expression:"objProject.category"}})],2),_vm._ssrNode(" <div class=\"form-group row align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 \">\n                Tên Dự Án\n                <span style=\"color:red\">*</span></label> <input type=\"text\" required=\"required\" placeholder=\"Nhập tên dự án của bạn\""+(_vm._ssrAttr("value",(_vm.objProject.name)))+" class=\"form-control col-md-9 col-sm-12\"></div> <div class=\"form-group row align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 \">\n                Mô tả Yêu Cầu Về Công Việc\n\n                <span style=\"color:red\">*</span></label> <textarea required=\"required\" id=\"customPlaceholder\" rows=\"5\""+(_vm._ssrAttr("placeholder",_vm.place))+" class=\"form-control col-md-9 col-sm-12\">"+_vm._ssrEscape(_vm._s(_vm.objProject.description))+"</textarea></div> "),_vm._ssrNode("<div class=\"form-group row align-items-center mb-10px\">","</div>",[_vm._ssrNode("<label class=\"f-13  col-md-3 col-sm-12 \">\n                Hình ảnh đính kèm\n            </label> "),_vm._ssrNode("<div class=\"col-md-9 pl-0\">","</div>",[_c('InputFile',{key:"file",ref:"akjklak",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Thêm hình ảnh'},on:{"input":_vm.getFileImg}})],1),_vm._ssrNode(" <div class=\"col-md-3\"></div> <div class=\"col-md-9 pl-0\">"+((_vm.objProject.attachment)?((_vm._ssrList((_vm.objProject.photos),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item,'--')))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->")+" "+((_vm.arrBase64.length)?((_vm._ssrList((_vm.arrBase64),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(item.name)+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->")+"</div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13  col-md-3 col-sm-12 \">\n                Tài liệu đính kèm\n            </label> "),_vm._ssrNode("<div class=\"col-md-9 pl-0\">","</div>",[_c('InputFile',{key:"file",ref:"akjklak",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}})],1),_vm._ssrNode(" <div class=\"col-md-3\"></div> <div class=\"col-md-9 pl-0\">"+((_vm.objProject.attachment)?((_vm._ssrList((_vm.objProject.attachment),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->")+" "+((_vm.arrFile.length)?((_vm._ssrList((_vm.arrFile),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(item.name)+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->")+"</div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 \">\n                Địa điểm dự án\n                <span style=\"color:red\">*</span></label> "),_c('treeselect',{staticClass:"pl-0 pr-0 col-md-9 col-sm-12",attrs:{"options":_vm.optionsProvince,"value":_vm.objProject.address,"placeholder":"Tỉnh thành","required":"","clearable":false},model:{value:(_vm.objProject.address),callback:function ($$v) {_vm.$set(_vm.objProject, "address", $$v)},expression:"objProject.address"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 \">\n                Ngân sách dự trù\n                <span style=\"color:red\">*</span></label> "),_vm._ssrNode("<div class=\"input-group col-md-9 col-sm-12 px-0\">","</div>",[_c('currency-input',{staticClass:"form-control",attrs:{"type":"text","required":"","placeholder":"200,000,000"},model:{value:(_vm.objProject.budget),callback:function ($$v) {_vm.$set(_vm.objProject, "budget", $$v)},expression:"objProject.budget"}}),_vm._ssrNode(" <div class=\"input-group-append\"><span class=\"input-group-text f-12\">VND</span></div>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 \">\n                Thời gian kết thúc nhận chào giá\n                <span style=\"color:red\">*</span></label> "),_c('v-date-picker',{ref:"calendar",attrs:{"masks":{input: 'DD/MM/YYYY'},"model-config":{type: 'number',}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('div',{staticClass:"input-group mb-3"},[_c('input',_vm._g({staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":inputValue}},inputEvents)),_vm._v(" "),_c('div',{staticClass:"input-group-append cursor-pointer",on:{"click":function($event){return _vm.triggerCalendar()}}},[_c('span',{staticClass:"input-group-text custom-time"},[_c('i',{staticClass:"fas fa-calendar-day"})])])])]}}]),model:{value:(_vm.objProject.dueDate),callback:function ($$v) {_vm.$set(_vm.objProject, "dueDate", $$v)},expression:"objProject.dueDate"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group mb-50px group-checkbox d-flex\">","</div>",[_c('b-form-checkbox',{attrs:{"checked":_vm.objProject.agree,"name":"checkbox-agree","required":""},model:{value:(_vm.objProject.agree),callback:function ($$v) {_vm.$set(_vm.objProject, "agree", $$v)},expression:"objProject.agree"}}),_vm._ssrNode(" <span class=\"f-12 main-black mt-2px ml-5px\">Tôi đồng ý với <span class=\"main-color\">điều khoản</span> của Econs <span style=\"color:red\">*</span></span>")],2),_vm._ssrNode(" <div class=\"group-btn row\"><button type=\"submit\" class=\"d-none\"></button> <div class=\"col-md-6 col-sm-12\"><button type=\"button\" class=\"btn-now\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.isModal ? 'CẬP NHẬT THÔNG TIN' : 'ĐĂNG NGAY')+"\n                ")+"</button></div> <div class=\"col-md-6 col-sm-12 pr-0 cutom-sm\">"+((_vm.isModal)?("<button type=\"button\" class=\"btn-now delete\">\n                    HUỶ BỎ\n                </button>"):("<button type=\"button\" class=\"btn-now save\">\n                    LƯU BẢN NHÁP\n                </button>"))+"</div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FormProject.vue?vue&type=template&id=8f027a94&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FormProject.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FormProjectvue_type_script_lang_js_ = ({props:['objInfor','isModal'],data(){return{objProject:this.restForm(),options:this.getCategory(),optionsProvince:this.getProvince(),place:`1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn \n2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất. \n3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác`,acceptImg:["png","jpg","jpeg","tiff"],acceptFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFileImg:[],arrBase64:[],arrFile:[],currentStatus:''};},mounted(){if(!this.isModal){this.getProjectDraft();}else{if(this.objInfor){this.objProject=this.objInfor;console.log('this.objProject',this.objProject);}}},methods:{triggerCalendar(){this.$refs.calendar.showPopover();},restForm(){this.arrFileImg=[],this.arrBase64=[],this.arrFile=[];return{category:[],dueDate:new Date().getTime(),agree:false};},createJobActive(s){this.currentStatus=s;this.$refs.btnClick.click();},createJobDraft(s){this.currentStatus=s;this.$refs.btnClick.click();},async createJob(){var status=this.currentStatus;this.loader();try{// Img
var fileImgOld=this.objProject.photos||[];var fileImgNew=this.arrFileImg.length?await this.uploadFile(this.arrFileImg):[];var arrFileImg=fileImgOld.concat(fileImgNew);// File
var fileOld=this.objProject.attachment||[];var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var arrFile=fileOld.concat(fileNew);let res=await this.$post('member/projects',{...this.objProject,status,photos:arrFileImg,attachment:arrFile});if(status==='ACTIVE'&&!this.isModal){this.objProject=this.restForm();this.$router.replace(`/du-an/${res.data.project.slug}`);}if(status==='DRAFT'){this.objProject._id=res.data.project._id;}if(this.isModal){this.$emit('callGetDetail');this.$emit('hideModal');}this.$notify({group:'all',text:this.isModal?'Cập nhật dự án thành công':'Tạo dự án thành công',type:'dark'});this.loader(0);}catch(err){this.loader(0);}},getProjectDraft(){this.$get('member/projects/draft').then(res=>{if(res.data.status){this.objProject=res.data.project;}}).catch(err=>{console.log('getProjectDraft',err);});},callParent(){this.$emit('hideModal');},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objProject.attachment=this.objProject.attachment.filter(item=>item!==file);},async getFileImg(arrFile){this.arrFileImg=this.arrFileImg.concat(arrFile);var arrBase64=[];this.arrFileImg.forEach(async item=>{var base64=await this._toBase64(item);arrBase64.push({base64,name:item.name});});this.arrBase64=arrBase64;},clearFileImg(file){this.arrBase64=this.arrBase64.filter(item=>item.base64!==file.base64);this.arrFileImg=this.arrFileImg.filter(item=>item.name!==file.name);},clearFileImgOld(file){this.objProject.photos=this.objProject.photos.filter(item=>item!==file);}}});
// CONCATENATED MODULE: ./components/FormProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormProjectvue_type_script_lang_js_ = (FormProjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FormProject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FormProjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c90d266c"
  
)

/* harmony default export */ var FormProject = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default})


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/inforProject.vue?vue&type=template&id=7b89d4a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"inforProject",attrs:{"id":"modal-infor-project"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"formCore"},[_c('div',{staticClass:"content"},[_c('FormProject',{attrs:{"objInfor":_vm.objInfor,"isModal":true},on:{"hideModal":_vm.hide,"callGetDetail":_vm.getDetailProject}})],1)])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/inforProject.vue?vue&type=template&id=7b89d4a4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/inforProject.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inforProjectvue_type_script_lang_js_ = ({data(){return{objInfor:null};},mounted(){},methods:{getInfor(infor){this.objInfor=infor;},show(){this.$refs.inforProject.showModal();},hide(){this.$refs.inforProject.hideModal();},getDetailProject(){this.$emit('callGetDetail');}}});
// CONCATENATED MODULE: ./components/popup/inforProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_inforProjectvue_type_script_lang_js_ = (inforProjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/inforProject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_inforProjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f2a2b35a"
  
)

/* harmony default export */ var inforProject = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FormProject: __webpack_require__(112).default,Modal: __webpack_require__(33).default})


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
//# sourceMappingURL=popup-infor-project.js.map