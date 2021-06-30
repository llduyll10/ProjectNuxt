exports.ids = [65,16];
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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/CheckboxBig.bda5924.svg";

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/form.vue?vue&type=template&id=4a356c88&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShowForm)?_c('div',[_vm._ssrNode("<h3 class=\"h5 main-black f-14 fw-700\">"+((_vm.isUpdateQuote)?("\n            Cập nhật chào giá cho dự án\n        "):("\n            Gửi chào giá cho dự án - Bạn sẽ tốn\n            <span class=\"main-color\"><span class=\"f-20\">3</span> Tokens</span> khi tham gia chào giá\n        "))+"</h3> <hr class=\"hr\"> "),_vm._ssrNode("<form class=\"group-content\">","</form>",[_vm._ssrNode("<div class=\"form-group row mb-25px align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 fw-600\">\n                Chi phí ước tính\n                <span style=\"color:red\">*</span></label> "),_vm._ssrNode("<div class=\" col-md-9 col-sm-12\">","</div>",[_vm._ssrNode("<div class=\"input-group\">","</div>",[_c('currency-input',{staticClass:"form-control",attrs:{"type":"text","required":"","placeholder":"200,000,000"},model:{value:(_vm.objForm.price),callback:function ($$v) {_vm.$set(_vm.objForm, "price", $$v)},expression:"objForm.price"}}),_vm._ssrNode(" <div class=\"input-group-append\"><span class=\"input-group-text f-12\">VND</span></div>")],2),_vm._ssrNode(" <p class=\"mb-0 mt-5px f-12 main-black\">\n                    Phí hoa hồng nếu trúng thầu -\n                    <span class=\"main-color fw-600\">500</span> <span class=\"fw-600\">Tokens</span></p>")],2)],2),_vm._ssrNode(" <div class=\"form-group row mb-25px align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 fw-600\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.isUpdateQuote ? 'Giải pháp đề xuất và lý do tại sao báo giá lại cao/thấp hơn giá ước lượng ban đầu' : 'Kinh nghiệm, Năng lực và giải pháp đề xuất')+"\n\n                ")+"<span style=\"color:red\">*</span></label> <div class=\"col-md-9 col-sm-12\"><textarea required=\"required\" id=\"customPlaceholder\" rows=\"5\""+(_vm._ssrAttr("placeholder",_vm.place))+" class=\"form-control main-black \">"+_vm._ssrEscape(_vm._s(_vm.objForm.description))+"</textarea></div></div> <div class=\"form-group row mb-25px align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 fw-600 mb-0\">\n                Thời gian thi công dự trù\n                <span style=\"color:red\">*</span></label> <div class=\"col-md-3 col-sm-12 \"><div class=\"input-group\"><input type=\"text\""+(_vm._ssrAttr("value",(_vm.objForm.day)))+" class=\"form-control \"> <div class=\"input-group-append\"><span class=\"input-group-text py-0 px-10px f-12\">Ngày</span></div></div></div></div> "+((_vm.isUpdateQuote)?((_vm._ssrList((_vm.objForm.payments),function(item,idx){return ("<div class=\"form-group row mb-25px align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 fw-600\">"+_vm._ssrEscape("\n                        Thanh toán đợt "+_vm._s(idx+1)+"\n                        ")+"<span style=\"color:red\">*</span></label> <div class=\" col-md-9 col-sm-12 d-flex\"><div style=\"width:200px\"><input type=\"text\" required=\"required\" placeholder=\"200,000,000\""+(_vm._ssrAttr("value",(item.value)))+" class=\"form-control\"></div> "+((_vm.objForm.payments.length == 1)?("<span class=\"ml-10px mt-7px text-main f-12 cursor-pointer\">Thêm đề nghị thanh toán</span>"):(((idx+1 == _vm.objForm.payments.length)?("<span class=\"ml-10px mt-7px text-main f-12 cursor-pointer\">Thêm đề nghị thanh toán</span>"):("<span class=\"text-red mt-3px ml-5px cursor-pointer\"><i class=\"fas fa-times\"></i></span>"))))+"</div></div>")}))):"<!---->")+" "),_vm._ssrNode("<div class=\"form-group row mb-25px align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 fw-600\">\n                Tài liệu đính kèm\n            </label> "),_vm._ssrNode("<div class=\"col-md-9 col-sm-12\">","</div>",[_c('InputFile',{attrs:{"accept":_vm.accepFile,"multiple":true,"label":'Thêm tài liệu'},on:{"input":_vm.getFile}}),_vm._ssrNode(" "+((_vm.arrFile.length)?("<div class=\"col-md-3\"></div>"):"<!---->")+" "+((_vm.arrFile.length)?("<div class=\"col-md-9 pl-0\">"+(_vm._ssrList((_vm.arrFile),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(item.name)+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))+"</div>"):"<!---->"))],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group mb-50px group-checkbox d-flex\">","</div>",[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.objForm.agree),callback:function ($$v) {_vm.$set(_vm.objForm, "agree", $$v)},expression:"objForm.agree"}}),_vm._ssrNode(" <span class=\"f-12 main-black mt-2px ml-5px\">Tôi đồng ý với <span class=\"main-color\">điều khoản</span> của Econs <span style=\"color:red\">*</span></span>")],2),_vm._ssrNode(" <div class=\"group-btn\"><div class=\"d-flex mt-25px justify-content-xl-around row\"><div class=\"col-md-6 col-sm-12\"><button type=\"submit\" class=\" btn btn-primary main-bg-color radius-5 w-100  text-16 fw-700\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.isUpdateQuote ? 'CẬP NHẬT BÁO GIÁ' :'GỬI CHÀO GIÁ NGAY')+"\n                ")+"</button></div> <div class=\"col-md-6 col-sm-12\"><button type=\"button\" class=\" btn btn-primary main-bg-color radius-5 w-100  btn-brown text-16 pr-0 fw-700\">\n                    LƯU BẢN NHÁP\n                </button></div></div></div>")],2)],2):_c('div',[_vm._ssrNode("<div class=\"text-center\"><img"+(_vm._ssrAttr("src",__webpack_require__(310)))+"> "+((_vm.$auth.loggedIn && _vm.$auth.user.canAuction)?("<p class=\"f-19 main-black fw-600\">Bạn đã gửi chào giá cho\n            <span class=\"text-main\">"+_vm._ssrEscape(_vm._s(_vm.quoteName))+"</span></p>"):"<!---->")+" "+((!_vm.$auth.loggedIn)?("<p class=\"f-19 main-black fw-600\">\n            Vui lòng đăng nhập để chào giá\n        </p>"):"<!---->")+" "+((_vm.$auth.loggedIn && !_vm.$auth.user.canAuction)?("<p class=\"f-19 main-black fw-600\">\n            Vui lòng hoàn thành hồ sơ và xác thực tài khoản\n        </p>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/quote/form.vue?vue&type=template&id=4a356c88&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var formvue_type_script_lang_js_ = ({props:['id','quoteName',"detailProject"],data(){return{place:`1. Mô tả chi tiết về dự án xây dựng hoặc yêu cầu thiết kế của bạn \n2. Vui lòng đính kèm sổ đỏ, bản vẽ, thiết kế hoặc hình ảnh minh hoạ để nhận được tư vấn/dự toán tốt nhất. \n3. Yêu cầu năng lực của đơn vị báo giá hoặc những yêu cầu khác`,objForm:{agree:false},accepFile:["png","jpg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFile:[],isShowForm:false,isUpdateQuote:false};},mounted(){this.getQuote();},methods:{getQuote(){if(this.$auth&&this.$auth.user&&this.$auth.user.canAuction){this.$get(`member/auction/project/${this.id}`).then(res=>{if(res.data.status){if(res.data.auction){if(res.data.auction.status=='DRAFT'){this.objForm={...res.data.auction};this.isShowForm=true;}else{if(res.data.auction.step===1&&res.data.auction.survey.length&&res.data.auction.statusUpdate=='DRAFT'){this.objForm={...res.data.auction,payments:res.data.auction.payments.length?res.data.auction.payments:[{key:1,value:0}]};this.isShowForm=true;this.isUpdateQuote=true;}else{this.isShowForm=false;}}}else{this.isShowForm=true;}}}).catch(err=>{console.log(err);});}else{this.isShowForm=false;}},async createQuote(status){this.loader();try{var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objForm,day:Number(this.objForm.day),attachments:arrFile,projectOwner:this.detailProject.createBy._id};console.log(obj);var url=`member/auction/project/${this.id}`;if(this.isUpdateQuote){obj.statusUpdate=status;obj.step=2;}else{obj.status=status;}let res=await this.$post(url,obj);console.log('res',res);this.resetForm();this.getQuote();this.loader(0);this.$emit('callGetList');this.$auth.fetchUser();}catch(err){console.log(err);this.loader(0);}},resetForm(){this.objForm={};this.arrFile=[];},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},addPayment(){var length=this.objForm.payments.length;var obj={key:length,value:0};this.objForm.payments.push(obj);},clearPayment(item){if(this.objForm.payments.length==1)return;this.objForm.payments=this.objForm.payments.filter(pay=>pay.key!=item.key);}}});
// CONCATENATED MODULE: ./components/quote/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var quote_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/quote/form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  quote_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "801a3e5c"
  
)

/* harmony default export */ var quote_form = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(213).default})


/***/ })

};;
//# sourceMappingURL=quote-form.js.map